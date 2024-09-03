//Icons Selection
const darkBTN = document.querySelector(".dark");
const lightBTN = document.querySelector(".light");

//Themes
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

//Toggle Icons
const iconToggle = () => {
  darkBTN.classList.toggle("display-none");
  lightBTN.classList.toggle("display-none");
};

// Initial Theme Check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    darkBTN.classList.add("display-none");
    return;
  }
  lightBTN.classList.add("display-none");
};

//Manual Theme Switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

//Call Theme Switch on Clicking Buttons
lightBTN.addEventListener("click", () => {
  themeSwitch();
});

darkBTN.addEventListener("click", () => {
  themeSwitch();
});

//Invoke Theme Check on Initial Load
themeCheck();
