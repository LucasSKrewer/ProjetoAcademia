const currentPage = location.pathname;
const menuItems = document.querySelectorAll("header .links a");

for (item of menuItems) {
    if (currentPage == item.getAtribbute("href")) {
        item.classList.add("active");
    }
}