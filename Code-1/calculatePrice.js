function calculatePrice(price, isStudent, hasCoupon) {
    // Validate input price type
    if (typeof price !== "number" || price <= 0 || price > 500) {
      throw new Error("Invalid price: Price must be a positive number.");
    }
    if (typeof isStudent !== 'boolean') {
      throw new Error("Invalid isStudent type: It should be either true or false");
    }
    if (typeof hasCoupon !== 'boolean') {
      throw new Error("Invalid hasCoupon type: It should be either true or false");
    }

    // Apply discounts based on conditions
    let finalPrice = price;
    if (isStudent || hasCoupon) {
      if (isStudent && hasCoupon) {
        // Apply maximum discount for students with coupons
        finalPrice *= 0.8; // 20% discount
      }else if (hasCoupon && !isStudent) {
        // Apply coupon discount
        finalPrice *= 0.95; // 5% discount
        console.log("inside hasCoupon")
      }else if (isStudent && !hasCoupon) {
        // Apply standard student discount
        finalPrice *= 0.9; // 10% discount
      }
    }
  
    return finalPrice;
  }
  
module.exports = calculatePrice;
  