const rightDiv = document.querySelector(".right");
const thumbnails = document.querySelectorAll("article img");

thumbnails.forEach(img => {
    img.addEventListener("click", () => {
     const newImg = img.getAttribute("src");
     rightDiv.style.backgroundImage = `url("${newImg}")`;
    });
});