const URL = `https://picsum.photos/200/300`;
const container = document.querySelector(".container");

function getImages(num = 10) {
  let i = 0;
  while (i < num) {
    const img = document.createElement("img");
    img.src = `https://picsum.photos/id/${i + 1}/200/300`;
    container.append(img);
    i++;
  }
}

getImages();

// Listen to scroll events and load images when we reach the end of the page

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    getImages();
  }
});
