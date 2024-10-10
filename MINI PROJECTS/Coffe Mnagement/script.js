// Coffee Menu Data
const snackmenu = [
    { name: "Burger", price: 150 },
    { name: "Pizza", price: 120 },
    { name: "Chicken Wings", price: 180 },
    { name: "Mocktails", price: 60 },
    {name:"Sandwich",price:60
    },
    {name:"FrenchFires",price:80
    },
];

// Load Menu Items
window.onload = () => {
    const menuItemsContainer = document.getElementById("menu-items");
    snackmenu.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="addToOrder(${index})">Add Item</button>`;
        menuItemsContainer.appendChild(li);
        
    });
};

// Order Management
let order = [];
let totalPrice = 0;

// Add Item to Order
function addToOrder(index) {
    const item = snackmenu[index];
    order.push(item);
    totalPrice += item.price;
    updateOrderDisplay();
}

// Remove Item from Order
function removeFromOrder(index) {
    const item = order[index];
    totalPrice -= item.price;
    order.splice(index, 1);
    updateOrderDisplay();
}

// Update Order Display
function updateOrderDisplay() {
    const orderItemsContainer = document.getElementById("order-items");
    orderItemsContainer.innerHTML = "";
    order.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromOrder(${index})">Remove</button>`;
        orderItemsContainer.appendChild(li);
    });
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
}

// Place Order
document.getElementById("place-order").addEventListener("click", () => {
    if (order.length === 0) {
        alert("Your order is empty!");
    } else {
        const greetingMessage = document.getElementById("greeting-message");
        greetingMessage.innerText = "Thank you for ordering with us! ✨";
        greetingMessage.style.display = "block";

        alert(`Order placed! Total: $${totalPrice.toFixed(2)}`);
        order = [];
        totalPrice = 0;
        updateOrderDisplay();

        // Hide the greeting after 3 seconds
        setTimeout(() => {
            greetingMessage.style.display = "none";
        }, 3000);
    }
});
