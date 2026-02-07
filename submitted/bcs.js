//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
    if (omr["right"] + omr["wrong"] + omr["skip"] !== 100) {
    return "Invalid";
  }
  else if (
       omr["right"] < 0 || omr["right"] > 100
    || omr["wrong"] < 0 || omr["wrong"] > 100
    || omr["skip"]  < 0  || omr["skip"] > 100
  ) {
    return "Invalid";
  }
  else {
    // let finalScore = omr["right"] * 1 - omr["wrong"] * 0.5;
    const finalScore = Math.round(omr["right"] - omr["wrong"] * 0.5);
    return finalScore;
  }
}
let result = finalScore ({ right: 70, wrong: -10, skip: 30 });
console.log(result);