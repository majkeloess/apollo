const fs = require("fs");
const csv = require("csv-parser");

const exercises = [];

fs.createReadStream("exercises.csv")
  .pipe(csv())
  .on("data", (row) => {
    exercises.push({ name: row["name"], group: row["muscleGroup"] });
  })
  .on("end", () => {
    console.log(exercises);
    fs.writeFile('exercises.js', 'const exercises = ' + JSON.stringify(exercises, null, 2), (err) => {
      if (err) throw err;
    });

    const uniqVal = [];
    for (let el of exercises) {
      if (!uniqVal.includes(el.group)) {
        uniqVal.push(el.group);
      }
    }
    console.log(uniqVal);


  });




