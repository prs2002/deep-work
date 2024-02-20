/*
    Function to create a non-blocking pop-up to nudge a user on a distracting website
*/

export function nonBlockingPopUp(): Promise<number> {
  if (document.getElementById("non_blocking_popup")) {
    return new Promise((resolve) => {
      resolve(0);
    });
  }
  return new Promise((resolve) => {
    var styleElement = document.createElement("style");
    styleElement.id = "nonBlockingPopUp-style";
    styleElement.textContent = `
    #non_blocking_popup {
      all: revert;
      position: absolute !important;
      top: 20px !important;
      right: 20px !important;
      background-color: #fff !important;
      padding: 20px !important;
      border-radius: 10px !important;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3) !important; /* shadow effect */
      z-index: 1000000 !important;
      color: black !important;
      width: 300px !important;
      text-align: center !important;
    }

    #non_blocking_popup * {
      all: revert;
      color: black !important;
    }

    #non_blocking_popup #agreeButton {
      background-color: #4CAF50 !important;
      text-align: center !important;
      color: white !important;
      border: none !important;
      padding: 15px 32px !important;
      border-radius: 10px !important;
      margin: 4px 2px !important;
      margin-top: 10px !important;
      cursor: pointer !important;
      font-size: 16px !important;
      text-decoration: none !important;
    }

    #non_blocking_popup #moreTimeButton {
      background-color: #f44336 !important;
      text-align: center !important;
      color: white !important;
      border: none !important;
      padding: 15px 32px !important;
      border-radius: 10px !important;
      margin: 4px 2px !important;
      margin-top: 10px !important;
      cursor: pointer !important;
      font-size: 16px !important;
      text-decoration: none !important;
    }
`;

    document.head.appendChild(styleElement);
    const body = document.querySelector("body");
    const div = document.createElement("div");
    div.id = "non_blocking_popup";
    div.innerHTML = `
      <h2>Feeling Distracted?</h2>
      <p>Would you like to go back to work?</p>
      <div id="buttonContainer">
          <button id="agreeButton">Yes</button>
          <button id="moreTimeButton">Just a bit more time</button>
      </div>
      `;
    body?.appendChild(div);

    const agreeButton = document.getElementById("agreeButton");
    const moreTimeButton = document.getElementById("moreTimeButton");

    if (!agreeButton || !moreTimeButton) {
      return;
    }

    document
      .getElementById("agreeButton")
      ?.addEventListener("click", function () {
        window.location.href = "https://www.google.com";
        resolve(0);
      });

    document
      .getElementById("moreTimeButton")
      ?.addEventListener("click", function () {
        const nonBlockingPopUp = document.getElementById("non_blocking_popup");
        if (nonBlockingPopUp) {
          document.querySelector("body")?.removeChild(nonBlockingPopUp);
          document.head.removeChild(styleElement);
        }
        resolve(1);
      });
  });
}

