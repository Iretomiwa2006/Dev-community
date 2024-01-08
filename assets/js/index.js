// DOM Document object model
// Tag name
// id
// class

const sidebarOpen = document.getElementById("sidebar-open");
const sidebarClose = document.getElementById("sidebar-close");
const sidebarContainer = document.querySelector(".sidebar-container");

// Events
sidebarOpen.onclick = function () {
  console.log("sidebar open clicked");
  sidebarContainer.style.visibility = "visible";
};

sidebarClose.onclick = function () {
  console.log("sidebar close clicked");
  sidebarContainer.style.visibility = "hidden";
};
