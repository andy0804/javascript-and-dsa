const productRatingModel = {
  name: "",
  rating: "",
  set: false,
};
let state = {
  products: [],
};

const rating = document.querySelector("#rating");

const productRating = {};
const productsCount = rating.childElementCount;
const children = Array.from(rating.children);
children.forEach((i) => {
  let product = { ...productRatingModel };
  product.name = i.children[0].innerText;
  product.rating = 0;
  product.set = false;
  state.products.push(product);
});
rating.addEventListener("click", function (event) {
  const starsArray = Array.from(event.target.parentNode.children);
  const starIndex = starsArray.indexOf(event.target);
  const position = Array.from(rating.children).indexOf(
    event.target.parentNode.parentNode
  );
  updateRating(position, starIndex);
  console.log("Final Rating", state.products);
  updateStars(position, starIndex, event);
});

const updateRating = (position, valueSet) => {
  let updateState = { ...state.products };
  updateState[position].rating = valueSet + 1;
  updateState[position].set = true;

  state = { ...state, products: updateState };
};

const updateStars = (position, valueSet, event) => {
  let children = Array.from(event.target.parentNode.children);
  console.log("STARS", children);
  console.log("VALUE ", valueSet);

  switch (valueSet.toString()) {
    case "0":
      children[0].classList.add("checked");
      children[1].classList.remove("checked");
      children[2].classList.remove("checked");
      children[3].classList.remove("checked");
      children[4].classList.remove("checked");
      break;

    case "1":
      children[0].classList.add("checked");
      children[1].classList.add("checked");
      children[2].classList.remove("checked");
      children[3].classList.remove("checked");
      children[4].classList.remove("checked");
      break;
    case "2":
      children[0].classList.add("checked");
      children[1].classList.add("checked");
      children[1].classList.add("checked");
      children[3].classList.remove("checked");
      children[4].classList.remove("checked");
      break;

    case "3":
      children[0].classList.add("checked");
      children[1].classList.add("checked");
      children[2].classList.add("checked");
      children[3].classList.add("checked");
      children[4].classList.remove("checked");
      break;
    case "4":
      children[0].classList.add("checked");
      children[1].classList.add("checked");
      children[2].classList.add("checked");
      children[3].classList.add("checked");
      children[4].classList.add("checked");
      break;
  }
};
