function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    debugger
    for (let i = 0; i < quantity; i++) {
        totalPrice += pricePerItem;
        console.log(totalPrice, " total price so far");
        console.log(quantity, " so far items purchased");

    }
// If they are buying more than 10 items apply discount of 10% off
    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}
console.log(calculateDiscountedPrice(2, 5));


module.exports = calculateDiscountedPrice;