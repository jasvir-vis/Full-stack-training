let users = JSON.parse(localStorage.getItem("users")) || [];

const regBtn = document.getElementById("register");


if (regBtn) {
    regBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const age = parseInt(document.getElementById("age").value);
        const city = document.getElementById("city").value;

        if (!name || !email || !password || !age || !city) {
            alert("All fields are required");
            return;
        }

        const exist = users.find(u => u.email === email);
        if (exist) {
            alert("User already exists");
            return;
        }

        const user = { name, email, password, age, city };
        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful");
        window.location.href = "Login.html";
    });
}

const loginBtn = document.getElementById("login");

if (loginBtn) {
    loginBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const email = document.getElementById("logmail").value;
        const password = document.getElementById("logpass").value;

        if (!email || !password) {
            alert("Please enter email and password");
            return;
        }

        const validUser = users.find(
            u => u.email === email && u.password === password
        );

        if (!validUser) {
            alert("Invalid email or password");
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(validUser));

        alert("Login successful");
        window.location.href = "Dashboard.html";
    });
}

const logFalseDiv = document.getElementById("logfalse");
const logTrueDiv = document.getElementById("login");
const logoutBtn = document.getElementById("logout");

if (logFalseDiv && logTrueDiv) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        logFalseDiv.style.display = "none";
        logTrueDiv.style.display = "flex";

        document.getElementById("dname").textContent = currentUser.name;
        document.getElementById("dmail").textContent = currentUser.email;
        document.getElementById("dage").textContent = currentUser.age;
        document.getElementById("dcity").textContent = currentUser.city;
    } else {
        logFalseDiv.style.display = "flex";
        logTrueDiv.style.display = "none";
    }
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("currentUser");
        window.location.href = "Login.html";
    });
}
