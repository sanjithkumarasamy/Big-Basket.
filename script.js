console.log ("welcome to big Basket")
function calculateGiftVoucher(points) {

    const voucherValue = 400;
    return voucherValue;
}


function displayVoucherReward(customer) {

    const voucherValue = calculateGiftVoucher(customer.points);
    console.log(`Congratulations ${customer.name}!`);
    console.log(`You have earned a gift voucher worth ₹${voucherValue} based on your ${customer.points} bonus points.`);
}

let customer1 = {
    name: "nishanth",
    points: 150 
};

let customer2 = {
    name: "dhinesh",
    points: 200 
};

displayVoucherReward(customer1);
displayVoucherReward(customer2); 
