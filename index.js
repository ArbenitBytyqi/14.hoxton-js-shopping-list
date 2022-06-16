
let shoppingList = [
    ['Milk', 1.2],
    ['Cocoa', 2],
    ['Salad', 2],
    ['Carrots', 2],
    ['Tomatoes', 2.5],
    ['Ready meals', 5],
]

let userWantsToAddItem = confirm('Add an item?')

while (userWantsToAddItem) {
    let itemName = String(prompt('What is the name of the item you want to add?'))
    let itemPrice = Number(
        prompt('What is the price of the item you want to add?')
    )
    shoppingList.push([itemName, itemPrice])

    userWantsToAddItem = confirm('Add another item?')
}

let total = 0
for (let item of shoppingList) {
    let name = item[0]
    let price = item[1]
    total += price
    console.log(`${name}: £${price.toFixed(2)}`)
}


console.log(`Total: £${total.toFixed(2)}`)