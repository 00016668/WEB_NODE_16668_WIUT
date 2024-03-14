// Handle delete recipe button click
document.querySelectorAll('.deleteRecipeBtn').forEach(button => {
    button.addEventListener('click', async (event) => {
        event.preventDefault();

        const recipeId = button.getAttribute('recipe-id');

        if (!confirm('Are you sure you want to delete this recipe?')) {
            return;
        }

        try {
            // Send a DELETE request to the server to delete the recipe
            const response = await fetch(`/recipes/${recipeId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete recipe');
            }

            // Remove the recipe row from the table on successful deletion
            button.closest('tr').remove();
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    });
});


const updateForm = document.getElementById('updateRecipeForm');

// Event listener for form submission
updateForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const updateId = document.getElementById('updateId').value;
    const updatedRecipe = {
        title: document.getElementById('updateTitle').value,
        description: document.getElementById('updateDescription').value,
        ingredients: document.getElementById('updateIngredients').value,
        instructions: document.getElementById('updateInstructions').value
    };

    try {
        const response = await fetch(`/recipes/${updateId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedRecipe)
        });
        if (!response.ok) {
            throw new Error('Failed to update recipe');
        }
        alert('Recipe updated successfully');
        // Optionally, you can redirect or perform other actions after successful update
    } catch (error) {
        console.error('Error updating recipe:', error);
    }
});

// Code to populate the update form when clicking edit buttons
const editButtons = document.querySelectorAll('.editRecipeBtn');
editButtons.forEach(button => {
    button.addEventListener('click', () => {
        const recipeId = button.dataset.id;
        const recipeTitle = button.parentElement.parentElement.querySelector('td:nth-child(1)').innerText;
        const recipeDescription = button.parentElement.parentElement.querySelector('td:nth-child(2)').innerText;
        const recipeIngredients = button.parentElement.parentElement.querySelector('td:nth-child(3)').innerText;
        const recipeInstructions = button.parentElement.parentElement.querySelector('td:nth-child(4)').innerText;

        // Populate the update form with the recipe information
        updateForm.querySelector('#updateId').value = recipeId;
        updateForm.querySelector('#updateTitle').value = recipeTitle;
        updateForm.querySelector('#updateDescription').value = recipeDescription;
        updateForm.querySelector('#updateIngredients').value = recipeIngredients;
        updateForm.querySelector('#updateInstructions').value = recipeInstructions;
    });
});


