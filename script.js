document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Toggle theme mode
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
        
        // Change button text based on theme
        themeToggle.textContent = body.classList.contains("light-mode") ? "Switch to Dark Mode" : "Switch to Light Mode";
    });

    // Remember theme preference
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.textContent = "Switch to Dark Mode";
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Button animation effect
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mousedown", function () {
            this.classList.add("clicked");
        });
        button.addEventListener("mouseup", function () {
            this.classList.remove("clicked");
        });
    });

    // Section hover effect with movement
    document.querySelectorAll("section").forEach(section => {
        section.addEventListener("mouseenter", function () {
            this.style.boxShadow = "0 4px 20px rgba(255, 255, 255, 0.2)";
            this.style.transform = "translateY(-5px)";
            this.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        });
        section.addEventListener("mouseleave", function () {
            this.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
            this.style.transform = "translateY(0)";
        });
    });
});
