const fs = require('fs');
const path = require('path')

// This will check if a directory exists or not. If a directory exists and we do not implement
// this check then everything will overwritten in that directory with a fresh new directory.

if(!fs.existsSync('./New Folder')) {
fs.mkdir('./New Folder', (err) => {
    if(err) throw err;
    console.log("Directory creation: Completed!");
});
}

if(fs.existsSync('./New Folder')) {
    fs.rmdir('./New Folder', (err) => {
        if(err) throw err;
        console.log("Directory removal: Completed!");
    });
    }