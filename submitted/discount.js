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

let result = newPrice(200,30);
console.log(result);
