//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== "number" || typeof discount !== "number" || discount < 0 ||discount > 100) {
        return "Invalid";
    }
    else {
        let newPrice = currentPrice - (currentPrice * discount) / 100;
        return newPrice.toFixed(3);
  }
}


//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  }
  
  else {
    if (otp.length !== 8 || otp.startsWith("ph-") === false) {
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
  else {
    let finalScore = omr["right"] * 1 - omr["wrong"] * 0.5;
    return Math.round(finalScore);
  }
}

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
  if (Array.isArray(array) !== true) {
    return "Invalid";
  }
  else {
    let countFrequency = {};

    for (let element of array) {
      countFrequency[element] = (countFrequency[element] || 0) + 1;
    }

    if (countFrequency["ha"] === countFrequency["na"]) {
      return "equal";
    } else if (countFrequency["ha"] > countFrequency["na"]) {
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
    let splitedStr = str.split(" ");
    let longwords = "";
    let maxLength = 0;

    for (let word of splitedStr) {
      if (word.length > maxLength) {
        maxLength = word.length;
        longwords = word;
      }
    }

    let joinedStr = splitedStr.join("");
    let token = joinedStr.length;

    return { longwords, token };
  }
}

