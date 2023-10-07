document.addEventListener("DOMContentLoaded", function () {
    // Get the header element
    const header = document.querySelector("header");

    // Add the "visible" class to the header after a delay (e.g., 1 second)
    setTimeout(function () {
        header.classList.add("visible");
    }, 100); // Changed to 1000 milliseconds (1 second)

});

document.addEventListener("DOMContentLoaded", function () {
    const popupButton = document.getElementById("popup-button");
    const popupMenu = document.getElementById("popup-menu");

    popupButton.addEventListener("click", function () {
        // Toggle the visibility of the popup menu
        if (popupMenu.style.display === "block") {
            popupMenu.style.display = "none";
        } else {
            popupMenu.style.display = "block";
        }
    });
});


