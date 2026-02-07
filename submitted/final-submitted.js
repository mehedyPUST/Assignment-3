//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== "number"
        || typeof discount !== "number"
        || currentPrice < 0
        || discount < 0
        || discount > 100) {
        return "Invalid";
    }
    else {
        const newPrice = (currentPrice - (currentPrice * discount) / 100).toFixed(3);
        return newPrice;
  }
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    if (typeof otp !== "string") {
    return "Invalid";
  }
  
  else {
    if (otp.length !== 8 || otp.startsWith("ph-") !== true) {
      return false;
    } 
    else {
      return true;
    }
  }
}

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

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
     if (Array.isArray(array) !== true) {
    return "Invalid";
  }
  else {
     let voteCount = { ha: 0, na: 0 };

    for (let vote of array) {
        vote = vote.toLowerCase();
        // কোন কারনে ha na Capital letter এ দিলেও যাতে Count হয় 
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

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
     if (typeof str !== "string" || str.length === 0) {
    return "Invalid";
  } 
  else {
    const trimmedStr = str.trim();
    const splitedStr = trimmedStr.split(" ");
    let longwords = ""; 
    // এই ভেরিয়েবলের নাম টা ক্যামেল কেসে longWords লিখতে চেয়েছিলাম কিন্তু  প্রব্লেম ডকে longwords ছিল তাই এমন লিখলাম । 
    let maxLength = 0;

    for (let word of splitedStr) {
      if (word.length > maxLength) {
        maxLength = word.length;
        longwords = word;
      }
    }

    const joinedStr = splitedStr.join("");
    const token = joinedStr.length;

    return { longwords, token };
  }
}

