let dtabs, dtabContents;
function addClassDynamic(tab) {
  console.log(tab.dataset, "tab class dynamic");
  const target = document.querySelector(tab.dataset.tabTargetDynamic);
  console.log(target, "tab class target");

  target.classList.add("active");
  tab.classList.add("active");
}

function removeClassDynamic() {
  dtabContents.forEach((tabContent) => tabContent.classList.remove("active"));
  dtabs.forEach((tab) => tab.classList.remove("active"));
}

function generateTabs() {
  // create ul
  const createUl = document.createElement("ul");
  const createDivTabContent = document.querySelector(".tab-content-dynamic");
  createUl.className = "tabs";
  // number of tabs
  const tabCount = 5;
  const tabDetails = ["home1", "pricin1g", "about1", "data1", "information1"];
  const tabContent = [
    {
      name: "Home",
      content: "Lorem Ipsum",
    },
    {
      name: "Pricing",
      content: "Lorem Ipsum",
    },
    {
      name: "About",
      content: "Lorem Ipsum",
    },
    {
      name: "Data",
      content: "Lorem Ipsum",
    },
    {
      name: "Information",
      content: "Lorem Ipsum",
    },
  ];
  for (let i = 0; i < tabCount; i++) {
    const createNewTab = document.createElement("li");
    const createButton = document.createElement("button");
    createNewTab.className = "tab";
    createNewTab.setAttribute("data-tab-target-dynamic", `#${tabDetails[i]}`);
    createButton.className = "tab-button";
    createButton.innerHTML = tabDetails[i];
    createNewTab.appendChild(createButton);
    createUl.appendChild(createNewTab);
    const createDiv = document.createElement("div");
    if (i === 0) {
      createDiv.className = "active";
      createNewTab.classList.add("active");
    }
    createDiv.id = tabDetails[i];
    const att = document.createAttribute("data-tab-content-dynamic");
    createDiv.setAttributeNode(att);
    const createH1 = document.createElement("h1");
    const createPara = document.createElement("p");
    createH1.innerHTML = tabContent[i].name;
    createPara.innerHTML = tabContent[i].content;
    createDiv.appendChild(createH1);
    createDiv.appendChild(createPara);
    createDivTabContent.appendChild(createDiv);
  }
  // setting the tab buttons
  const dymamicTabButtons = document.querySelector(".tab-button-dynamic");
  dymamicTabButtons.appendChild(createUl);
}

function intializeClickListner() {
  dtabs = document.querySelectorAll("[data-tab-target-dynamic]");
  dtabContents = document.querySelectorAll("[data-tab-content-dynamic]");
  dtabs.forEach((tab) =>
    tab.addEventListener("click", () => {
      removeClassDynamic(tab);
      addClassDynamic(tab);
    })
  );
}

// dynamic tabs

generateTabs();
intializeClickListner();
