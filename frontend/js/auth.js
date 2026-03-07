const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async(e) => {

        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;

        await fetch("https://engipa-project-production.up.railway.app/api/register", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password, role })

        });

        alert("Registered");

    });

}


const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async(e) => {

        e.preventDefault();

        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        const res = await fetch("https://engipa-project-production.up.railway.app/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (data.message === "Login successful") {

            alert("Login successful");

            // redirect to dashboard
            window.location.href = "dashboard.html";

        } else {

            alert("Invalid credentials");

        }

    });

}