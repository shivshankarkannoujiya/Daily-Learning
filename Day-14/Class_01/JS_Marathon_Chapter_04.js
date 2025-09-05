let salesData = [
    {product: "laptop", price: 1200},
    {product: "Smartphone", price: 800},
    {product: "Headphone", price: 500},
    {product: "keyboard", price: 90},
]

let initialValue = 0
let totalSales = salesData.reduce((accumulator, currentSale) => accumulator + currentSale.price, initialValue)


let inventory = [
    {name: "widget A", stock: 30},
    {name: "widget B", stock: 120},
    {name: "widget C", stock: 45},
    {name: "widget D", stock: 70},
]

let lowStock = inventory.filter((item) => item.stock < 50 )

let userActivity = [
    {user: "Alice", activityCount: 45},
    {user: "Bob", activityCount: 72},
    {user: "Charlie", activityCount: 33},
]

// find most active user using: <reduce>
let mostActiveUser = userActivity.reduce((maxUser, user) => (
    user.activityCount > maxUser.activityCount ? user : maxUser
))
