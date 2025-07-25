const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
