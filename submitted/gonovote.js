//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
  if (Array.isArray(array) !== true) {
    return "Invalid";
  }
  else {
     let voteCount = { ha: 0, na: 0 };

    for (let vote of array) {
        vote = vote.toLowerCase();
    if (vote === "ha" || vote === "na") {
      voteCount[vote]++;
    }
}

    if (voteCount["ha"] === voteCount["na"]) {
      return "equal";
    } else if (voteCount["ha"] > voteCount["na"]) {
      return true;
    } else {
      return false;
    }
  }
  }



let rwsult = gonoVote(['ha','na' , 'Na', 'ha' , 'ha']);
console.log(rwsult);

