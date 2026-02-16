
let userObj = {
    fullName : "Jasvir",
    City : "Mukerian",
    Profession : "developer",
}

let orderObj = {
    productName : "Laptop",
    quantity: 5,
    bgColor: "orange",
}

// full object
console.log(userObj);
console.log(orderObj);

// specific object
console.log(userObj.City)

// change background color by accessing object
document.body.style.backgroundColor = orderObj.bgColor;

// show in paragragh
document.getElementById("name").textContent = userObj.fullName;
document.getElementById("city").textContent = userObj.City;
document.getElementById("profession").textContent = userObj.Profession;
document.getElementById("product").textContent = orderObj.productName;
document.getElementById("quantity").textContent = orderObj.quantity;
