const leftPane = document.getElementById("leftPane");
leftPane.style.display = "none";


const thumbnailList = document.getElementById("thumbnailList");
thumbnailList.style.display = "none";

const rightPlayersContainer = document.getElementById("rightPlayersContainer");
const secondaryScreen = document.getElementById("secondaryScreen");
const secondaryContentScreenCapture = document.querySelector(".secondary-content.screen-capture");

rightPlayersContainer.style.width = "100%";
rightPlayersContainer.style.height = "100%";


setInterval(() => {
    rightPlayersContainer.style.width = "100%";
    rightPlayersContainer.style.height = "100%";
    secondaryContentScreenCapture.style.width="100vw";
    secondaryContentScreenCapture.style.height="80vh";
    secondaryScreen.style.height = "100%";
    secondaryScreen.style.width = "100%";
    secondaryScreen.style.marginTop="-300px"
    secondaryScreen.style.marginLeft="-380px"
  }, 1);
