const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
function addClass(tab) {
  console.log("ADD CLASS CALLED");
  const target = document.querySelector(tab.dataset.tabTarget);
  target.classList.add("active");
  tab.classList.add("active");
}

function removeClass() {
  console.log("REMOVE CLASS CALLED");

  tabContents.forEach((tabContent) => tabContent.classList.remove("active"));
  tabs.forEach((tab) => tab.classList.remove("active"));
}

// static tabs
tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    removeClass(tab);
    addClass(tab);
  })
);

// dynamic tabs
