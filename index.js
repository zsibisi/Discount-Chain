// Function to calculate the refill total cost
function calculateRefillTotalCost(customer) {
    return customer.pricePerRefill * customer.refills;
  }
  
  // Function to apply subscription discount
  function applySubscriptionDiscount(refillTotalCost) {
    return refillTotalCost * 0.75;
  }
  
  // Function to apply coupon discount
  function applyCouponDiscount(discountedTotalCost) {
    return discountedTotalCost - 10;
  }
  
  // Function to calculate final amount
  function calculateFinalAmount(customer) {
    let refillTotalCost = calculateRefillTotalCost(customer);
  
    if (customer.subscription) {
      refillTotalCost = applySubscriptionDiscount(refillTotalCost);
    }
  
    if (customer.coupon) {
      refillTotalCost = applyCouponDiscount(refillTotalCost);
    }
  
    return `Your grand total is $${refillTotalCost}.`;
  }
  
  // Test with example customer objects
  const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
  };
  
  const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
  }
  
  const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
  }
  
  console.log(calculateFinalAmount(timmy)); // "Your grand total is $65."
  console.log(calculateFinalAmount(sarah)); // "Your grand total is $37.5."
  console.log(calculateFinalAmount(rocky)); // "Your grand total is $96.875." (with subscription and coupon discounts applied)
  
