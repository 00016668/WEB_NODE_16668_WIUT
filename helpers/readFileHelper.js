const fs = require('fs');
const path = require('path');

// Function to read JSON data from a file
const readFileCustom = (filename) => {
  const filePath = path.join(process.cwd(), 'data', filename);
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading file ${filename}: ${err.message}`);
    return null;
  }
};

module.exports = readFileCustom;
