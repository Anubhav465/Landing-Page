let click = document.getElementById("menu");
let show_content = document.getElementById("new-content");
let cross = document.getElementById("cross");

click.addEventListener("click", function() {
    show_content.style.display = "block";
    click.style.display = "none";
    cross.style.display = "block";
});

cross.addEventListener("click", function() {
    show_content.style.display = "none";
    click.style.display = "block";
    cross.style.display = "none";
});
