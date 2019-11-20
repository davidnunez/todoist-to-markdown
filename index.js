const csv = require('csv-parser');
const fs = require('fs');

var numberOfTasks = 0;
var indent = 0;
fs.createReadStream('data.csv')
  .pipe(csv({headers:false}))
  .on('data', (row) => {    
    if (row['0'] == 'task') {
        numberOfTasks++;
        indent = row[3];
        var indents = '';
        for (i = 1; i < indent; i++) {
            indents += '\t';
        }
        console.log(indents + `- ${row[1]}`)
    };
    if (row['0'] == 'note') {
        var indents = '';
        for (i = 0; i < indent; i++) {
            indents += '\t';
        }
        console.log(indents + row[1].replace(/\n/g, `\n${indents}`))
    }
  })
  .on('end', () => {
    console.log(`CSV file successfully processed ${numberOfTasks} tasks`);
  });
