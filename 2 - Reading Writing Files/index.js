//I'm gonna bring in the Filesystem module which is a common core module

const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

// This uses a fixed directory to locate a file

// fs.readFile('./files/rpg_doc1.txt', 'utf8', (err,data) => {
//     if(err) throw err;
//     console.log(data);
// })

/*
This uses the actual path structure to easily identify the file you want to read/write
The join() method is going to concatenate the arguments I enter to create the appropriate
Path to the designated file I was to read/write

fs.readFile(path.join(__dirname, 'files', 'rpg_doc.txt'), 'utf-8', (err,data) => {
    if(err) throw err;
    console.log(data);
})
*/

// Due to async, the below will show up first in the console even though I read the rpg_doc.txt first.
// Both of the console.logs are being processed asynchronously so therefore as soon as one is completed
// It will display that and as soon as the next one is completed it will display that as well

console.log('Hello...')

//This is how we can write a file. It's almost identical to the readFile method
//We do not have to specify the encoding type (utf-8) since that is the default
//There is no data parameter because we are writing the data, not passing through
//data to be read
//where we previously had the encoding argument, we replace that with the content
//we wish to write to the file ie so instead of 'utf-8' we will just write something
//like 'I just wrote to this text file. Dope!'

/*
fs.writeFile(path.join(__dirname, 'files', 'my_test_write.txt'), 'I just wrote to this text file. Dope!',(err) => {
    if(err) throw err;
    console.log("Write operation: Completed!");
})
*/

//Instead of rewriting a file every time we can append to a file. If there is not a file
//already present with the filename you specify, it will create the file and append as normal.

/*
fs.appendFile(path.join(__dirname, 'files', 'append.txt'), 'I just appended data to this text file. Doper!',(err) => {
    if(err) throw err;
    console.log("Append operation: Completed!");
})
*/

/*
However what we could also do is just throw appendFile() into the writeFile() method so that
writeFile() checks to see if a file is created with the name specified and if so, it would
then append to that file. If not, no file will be created.
Keep in mind I'm using tilde to append which acts like the <pre> HTML tag and allows for \n
to be represented with an actual line break instead of escaping \n.
Basically it will append a new line, then the sentence, and create one final new line due
to the location of the tildes.
Since NodeJS is asynchronous, one way to control the order in which operations complete is to
nest the operations in the callback like the below, which guarantees that a file will be written, appended, and renamed
in that order. Unfortunately this is what's known as callback heck and we don't want that ish.

To avoid this we can use promises which allow us to use async and await in Node

fs.writeFile(path.join(__dirname, 'files', 'my_test_write_check.txt'), 'I just wrote to this text file and will be appending to it as well.',(err) => {
    if(err) throw err;
    console.log("Write operation: Completed!");

    fs.appendFile(path.join(__dirname, 'files', 'my_test_write_check.txt'),
`

I just appended data to this text file that I just created.
`,
    (err) => {
        if(err) throw err;
        console.log("Append operation: Completed!");
    })
})
*/

//Using promises to enable async and await so we don't have callback heck
// This is the big brain way, that I'm aware of right now, to do something like
// this. I have an exampel below of a Blocking vs Non-Blocking way to read data/files

// Uncomment this section to rename the file rpg_doc.txt to fsPromise_write.txt

/* const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'rpg_doc.txt'), 'utf-8');
        console.log(data);
        // If we read the file above and store the data we can delete or "unlink" that file since the data is stored in memory 
        // and then write a new file with that data so that we do not have a bunch of duplicate files littering the project
        await fsPromises.unlink(path.join(__dirname, 'files', 'rpg_doc.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'fsPromise_write.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'fsPromise_write.txt'), " This is appended.");
        //For the rename() method you need to specify the path for the renamed file or else it will just duplicate the 
        //original file to the base directory
        await fsPromises.rename(path.join(__dirname, 'files', 'fsPromise_write.txt'), path.join(__dirname, 'files', "fsPromise_rename.txt"));

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'fsPromise_rename.txt'), 'utf-8');
        console.log(newData);

    } catch (err) {
        console.log(err);
    }
}


//Now I call this function

fileOps()
*/

// An example of a Blocking/synchronous approach, considered trash
// All of these lines will only happen once the previous one has been completed

const textIn = fs.readFileSync(path.join(__dirname, 'files', 'input.txt'), 'utf8');
    console.log(textIn);
const textOut = `This is what I think about programming: ${textIn}
Timestamp: ${Date.now()}`;
fs.writeFileSync(path.join(__dirname, 'files', 'output.txt'), textOut);
console.log('File has been written.');

// An example of the above but in a non-Blocking/asynchronous way
// These lines are not going to wait in line. They're going to be executed
// as soon as they're ready to go regardless of the previous line(s)
// being ready
// This is also an example of callback heck and is very common in Node.
// I also liked using the contents of the data1 argument to determine
// the .txt file to read and output (rpg_doc.txt in this case) just
// to show how much freedom we have when using variables
// What the below code will output will be in the reverse order
// due to how asynchronous code is interpreted.
// We'll get the 'Reading the file...' message prior to the reading
// and output of the file that's being read because the action
// of reading and ouputting take slonger than a simple console.log().

fs.readFile(path.join(__dirname, 'files', 'start.txt'), 'utf-8', (err, data1) => {
    fs.readFile(path.join(__dirname, 'files', `${data1}.txt`), 'utf-8', (err, data2) => {
        console.log(data2);
    });
});
console.log(`Reading the file rpg_doc.txt...`);

//Stop doing stuff if there is an uncaught error

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})