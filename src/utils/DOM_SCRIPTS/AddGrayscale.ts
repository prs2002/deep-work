import { grayscaleExtensionOverlayId as id } from "../CONSTANTS/constants";

export function addGrayscale() {
  if (document.getElementById(id)) {
    return;
  }

  const div = document.createElement("div");
  div.id = id;

  let sheet = new CSSStyleSheet();
  sheet.replaceSync(`#${id} {
                position: fixed;
                top: 0;
                left: 0;
                height: 100vh;
                width: 100vw;
                z-index: 9999999999;    
                pointer-events: none;    
                background-color: #fff;
                mix-blend-mode: hue;
            }`);
  document.adoptedStyleSheets = [sheet];

  document.body.appendChild(div);
}

export function removeGrayscale() {
  const div = document.getElementById(id);
  if (div) {
    div.remove();
  }
}
