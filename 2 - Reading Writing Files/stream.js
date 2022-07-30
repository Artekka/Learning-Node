const fs = require('fs');
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname, 'files', 'rpg_doc.txt'), {encoding: 'utf-8'});
const ws = fs.createWriteStream(path.join(__dirname, 'files', 'streamed_rpg_doc.txt'));

// We need to listen for the data stream coming in so we create a listener on the ReadStream

/* rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
}); */

// We can use the pipe() method to pass data through to the WriteStream by using ws as an argument
// because the argument is the destination for the data, hence it would send everything to
// streamed_rpg_doc.txt

rs.pipe(ws);