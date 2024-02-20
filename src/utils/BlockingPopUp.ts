/*
    Function to create a blocking pop-up to nudge a user on a distracting website
*/

export function blockingPopUp(line: string): Promise<number> {
  return new Promise((resolve) => {
    if (document.getElementById("blockingPopUp")) {
      resolve(0);
    } else {
      var styleElement = document.createElement("style");
      styleElement.id = "blockingPopUp-style";
      styleElement.textContent = `
    #blocking_popup {
      all: revert;
        position: absolute !important;
        left: 0 !important;
        right: 0 !important;
        margin: auto !important;
        top: 50vh !important;
        transform: translateY(-50%) !important;
        background-color: #fff !important;
        padding: 20px !important;
        border-radius: 8px !important;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3) !important; /* shadow effect */
        min-width: 400px !important;
        width: 100% !important;
        max-width: 800px !important;
        backdrop-filter: blur(100px) !important;
        z-index: 1000000 !important;
        color: black !important;
        font-size: 16px !important;
    }

    #blocking_popup * {
      all: revert;
      color: black !important;
    }

    .blocking_popup-content {
        text-align: center !important;
    }

    .blocking_popup-content h2 {
        margin-top: 0 !important;
    }
    .blocking_popup-content #close_button {
        border-radius:10px !important;
        border:none !important;
        padding:0.75em 1.5em !important;
        background-color:green !important;
        color: white !important;
        cursor:pointer !important;
      }
`;

      document.head.appendChild(styleElement);
      var popupDiv = document.createElement("div");

      popupDiv.id = "blocking_popup";

      popupDiv.innerHTML = `
    <div class="blocking_popup-content">
        <h2>${line}</h2>
        <p>Here's an activity to help you regain focus:</p>
        <p>Step away from your desk and take a five-minute break.</p>
        <button id = "close_button">
            Close
          </button>
    </div>
`;

      document.body.appendChild(popupDiv);

      var closeButton = popupDiv.querySelector("button");
      if (!closeButton) {
        resolve(0);
        return;
      }
      closeButton.addEventListener("click", () => {
        document.body.removeChild(popupDiv);
        document.head.removeChild(styleElement);
        window.location.href = "https://www.google.com";
      });
    }
  });
}
