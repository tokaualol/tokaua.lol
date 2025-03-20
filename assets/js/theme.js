function darkmode() {
    var element = document.documentElement;
    var button = document.getElementById("themeToggle");
    element.classList.toggle("dark-mode");

    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        button.innerHTML = "☀️";
    } else {
        localStorage.setItem("darkMode", "disabled");
        button.innerHTML = "🌙";
    }
}

window.onload = function () {
    var button = document.getElementById("themeToggle");
    if (localStorage.getItem("darkMode") === "enabled") {
        document.documentElement.classList.add("dark-mode");
        button.innerHTML = "☀️";
    } else {
        button.innerHTML = "🌙";
    }
};