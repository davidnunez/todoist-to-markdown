# todoist-to-markdown

Needed a quick & dirty script to create markdown files from todoist CSV exports.

- Install dependencies w/ `npm install`
- Expects data file to be named `data.csv` in same location as `index.js`
- Just run `node index.js` and the markdown file will be written to console
- Should preserve sub-task indent levels & notes.  Won't converttask text to tags, dates, etc.
- **Due Dates are not preserved**

_This was a 1/2 cup coffee hack._
