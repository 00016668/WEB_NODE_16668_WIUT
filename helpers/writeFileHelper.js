const fs = require('fs');
const path = require('path');

// Function to write JSON data to a file
const writeFileCustom = (filename, data) => {
  const filePath = path.join(process.cwd(), 'data', filename);
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
    return 'Ok';
  } catch (err) {
    console.error(`Error writing file ${filename}: ${err.message}`);
    return 'Error';
  }
};

module.exports = writeFileCustom;
