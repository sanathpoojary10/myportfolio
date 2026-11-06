// Mobile Navigation

const menuToggle = document.getElementById("menuToggle");

const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function() {

        mainNav.classList.toggle("open");

        if (mainNav.classList.contains("open")) {
            menuToggle.innerHTML = "✕";
        } else {
            menuToggle.innerHTML = "☰";
        }

    });

}


// Automatic Footer Year

const year = document.getElementById("year");

if (year) {
    year.innerHTML = new Date().getFullYear();
}