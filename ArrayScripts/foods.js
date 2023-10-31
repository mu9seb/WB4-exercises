let lunch = [
    {item: "Spicy Ramen", price: 9.95},
    {item: "Gyozas", price: 6.00},
    {item: "Crab Puffs", price: 5.00}
];

calculateTotal(lunch);

function calculateTotal(order) {
    let subtotal = 0;
    const tax = 0.08;
    const tip = 0.18;

    for (i = 0; i < lunch.length; i++) {
        subtotal += order[i].price;
    }
    const taxAmount = (tax * subtotal);
    const tipAmount =  (tip * subtotal);
    let grandTotal = subtotal + taxAmount + tipAmount;

    let displayMessage = console.log(`
    \n Your order subtotal is: $${subtotal}, \n Tax: $${taxAmount.toFixed(2)}, \n Tip: $${tipAmount.toFixed(2)}, \n Total Charges: $${grandTotal.toFixed(2)}
    `);
    return displayMessage;
}