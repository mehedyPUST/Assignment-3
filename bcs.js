//Problem-03: BCS Final Score Calculator
function finalScore (omr) {
    let right;
    let wrong;
    let skip;
    let score ;
          if (omr["right"] + omr["wrong"] + omr["skip"] !==100) {
            return "Invalid";
          }

          else {
            score = omr["right"]*1 - omr["wrong"]*0.5;
            return Math.round(score);
          }
}

let result = finalScore ({ right: 50, wrong: 10, skip: 40 });
console.log(result);

