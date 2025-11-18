const searchbox = document.getElementById("search-box-div");
const headbanner = document.getElementById("banner-content");

const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
    console.log(searchbox.classList)
    if (window.scrollY > 50) {
        searchbox.style.transform = "translateX(0px)"
        searchbox.style.opacity = "1"
        headbanner.style.display = "none"
        header.style.height = "50px"
        header.style.marginBottom = "50px"
    } else {
        searchbox.style.transform = "translateX(20000px)"
        searchbox.style.opacity = "0"
        headbanner.style.display = "flex"
        header.style.height = "100px"
        header.style.marginBottom = "0px"
    }
});