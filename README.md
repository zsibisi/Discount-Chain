# Discount-Chain

On this project,  I had an assignment to work on for my new job as a junior developer at a pharmaceutical startup. The assignment was to create a checkout system that would calculate the total cost of all refills and apply discounts based on whether the customer had a subscription and/or a coupon.

I was given three customer objects, each with different values for their prescription, price per refill, number of refills, subscription status, and coupon status. I created a separate function to calculate the total cost of refills, apply a subscription discount if the customer had a subscription, apply a coupon discount if the customer had a coupon, and calculate the final amount including all discounts.

I used the function keyword to create four separate functions - calculateRefillTotalCost, applySubscriptionDiscount, applyCouponDiscount, and calculateFinalAmount - each of which performed a specific task. I also used arrow syntax to write the calculations for applying the subscription and coupon discounts.

To calculate the refill total cost, I multiplied the customer's price per refill by the number of refills they had. To apply the subscription discount, I multiplied the refill total cost by 0.75 if the customer had a subscription. To apply the coupon discount, I subtracted $10 from the discounted refill total cost if the customer had a coupon. Finally, to calculate the final amount, I used string interpolation to return a string that included the grand total with a dollar sign in front.

I tested my functions with the example customer objects and printed out the final amount using console.log. After some testing and debugging, I was able to confirm that my solution was correct for all three customer objects. Overall, I feel like I learned a lot about writing functions in JavaScript and how to break down a larger task into smaller functions.






