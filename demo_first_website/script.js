// JavaScript code to toggle the menu items
// document.addEventListener("DOMContentLoaded", function () {
//     const toggleMenu = document.getElementById("toggle-menu");
//     const navItems = toggleMenu.querySelectorAll("h4");

//     // Hide items initially for small screens
//     navItems.forEach(item => item.style.display = "none");

//     toggleMenu.addEventListener("click", function () {
//         navItems.forEach(item => {
//             if (item.style.display === "none") {
//                 item.style.display = "block"; // Show items
//             } else {
//                 item.style.display = "none";  // Hide items
//             }
//         });
//     });
// });
// JavaScript code to toggle the menu columns
document.addEventListener("DOMContentLoaded", function () {
    const toggleMenu = document.getElementById("toggle-menu");
    const menuColumns = document.getElementById("menu-columns");

    toggleMenu.addEventListener("click", function () {
        // Toggle visibility of the menu columns
        if (menuColumns.style.display === "none" || menuColumns.style.display === "") {
            menuColumns.style.display = "flex";
            menuColumns.style.flexDirection = "column";
        } else {
            menuColumns.style.display = "none";
        }
    });
});
