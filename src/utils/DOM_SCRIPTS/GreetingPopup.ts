/*
    This popup will be shown to the user when they first open the extension on a new day.
    It will be shown only once per day.
    It will contain a greeting message and a button to close the popup. It will also automatically close after some time.
*/

import { insertGreetings } from "./DailyPopup";

export function addGreetingPopup() {
  //   const popup = document.createElement("div");
  //   popup.innerHTML = `
  //         <div id="greeting-popup" style="position: absolute; top: 20px; right: 50px; background-color: #fff; border: 1px solid #ccc; padding: 10px; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); z-index:9999999; color : #000;">
  //             <p>Good morning! Let us try to have a great productive day ahead! 🥳.</p>
  //             <button id="close-popup-btn" style="background-color: #007bff; color: #fff; border: none; padding: 5px 10px; cursor: pointer;">Close</button>
  //         </div>
  //     `;

  //   document.body.appendChild(popup);

  // //   Close the popup after some time
  //   setTimeout(() => {
  //     document.getElementById("greeting-popup")?.remove();
  //   }, 10000);

  //   // Close the popup when the close button is clicked
  //   document.getElementById("close-popup-btn")?.addEventListener("click", () => {
  //     document.getElementById("greeting-popup")?.remove();
  //   });

  insertGreetings();
}
