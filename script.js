document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Live Search
document.getElementById("searchBox").addEventListener("input", function() {
    let query = this.value.toLowerCase();
    let results = ["JavaScript", "Python", "C++", "HTML", "CSS"].filter(item => item.toLowerCase().includes(query));
    document.getElementById("searchResults").innerText = results.join(", ");
});

// Poll System
let pollResults = {};
function vote(language) {
    pollResults[language] = (pollResults[language] || 0) + 1;
    document.getElementById("pollResults").innerText = JSON.stringify(pollResults);
}

// Comment Section
function submitComment() {
    let comment = document.getElementById("commentBox").value;
    if (comment) {
        let commentsSection = document.getElementById("commentsSection");
        commentsSection.innerHTML += `<p>${comment}</p>`;
        document.getElementById("commentBox").value = "";
    }
}

// User Authentication (Local Storage)
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (!localStorage.getItem(user)) {
        localStorage.setItem(user, pass);
        document.getElementById("loginStatus").innerText = "Account created successfully!";
    } else if (localStorage.getItem(user) === pass) {
        document.getElementById("loginStatus").innerText = "Login successful!";
    } else {
        document.getElementById("loginStatus").innerText = "Incorrect password!";
    }
}
