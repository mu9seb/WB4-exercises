let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Gushers", price: 4.79},
    {product: "Fruit Roll Ups", price: 2.99},
    {product: "Ring Pops", price: 2.79},
    {product: "Poptarts", price: 5.19},
    {product: "Chili Lemon Lays", price: 2.29},
    {product: "Sour Bears", price: 2.79},
];

const numProducts = products.length;

getCheapCandies(4.00)

function getCheapCandies(budget) {
    let cheapCandies = [];
    const price = Number(budget);

    for (i = 0; i < numProducts; i++) {
        let candyPrice = products[i].price;
        if (candyPrice < price) {
            cheapCandies.push(products[i].product);
        }
    }
    let displayMessage = console.log(`Here's a list of candies under $${budget}: ${cheapCandies}.`);
    return displayMessage;
}

