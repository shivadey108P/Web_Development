const scrollContainer = document.getElementById("scroll-container");

function scrollToLeft() {
    scrollContainer.scrollBy({ left: -scrollContainer.clientWidth, behavior: "smooth" });

}

function scrollRight() {
    scrollContainer.scrollBy({ left: scrollContainer.clientWidth, behavior: "smooth" });
}

