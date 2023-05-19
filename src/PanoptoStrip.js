const cssRules = `
  #leftPane,
  #thumbnailList {
    display: none !important;
  }

  #rightPlayersContainer,
  #secondaryScreen,
  .secondary-content.screen-capture {
    width: 100% !important;
    height: 100% !important;
  }

  .secondary-content.screen-capture {
    width: 100vw !important;
    height: 75vw !important;
  }

  #secondaryScreen {
    margin: -300px 0 0 -380px !important;
  }
`;

const styleElement = document.createElement('style');
styleElement.textContent = cssRules;

document.head.appendChild(styleElement);