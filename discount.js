//Problem-01: New Price for Eid Sale
function newPrice(currentPrice,discount) {
    let  newPrice;
    if (typeof currentPrice !== "number" || typeof discount !== "number"  || discount < 0 || discount > 100 ){
        return "Invalid";
    }
    else {
      newPrice = currentPrice- (currentPrice*discount)/100;
      return newPrice.toFixed(3);
    }
}


let result = newPrice(200,30);
console.log(result);
