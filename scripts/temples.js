// Temple Album JavaScript

(() => {

    // Get the current year
    const currentYear = new Date().getFullYear();

    document.querySelector("#currentyear").textContent = currentYear;

    // Get the last modified date
    document.querySelector("#lastModified").textContent = document.lastModified;

    // Hamburger Menu
    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector("#primary-nav");

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        const isOpen = navigation.classList.contains("open");

        menuButton.textContent = isOpen ? "✕" : "☰";

        menuButton.setAttribute("aria-expanded", isOpen);

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

})();