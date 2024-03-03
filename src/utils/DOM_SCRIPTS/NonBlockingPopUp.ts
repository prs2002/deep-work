/*
    Function to create a non-blocking pop-up to nudge a user on a distracting website
*/

import { addGrayscale } from "./AddGrayscale";
import { insertAlert } from "./Alert";


export function nonBlockingPopUp(grayScalePercentage: number): Promise<number> {

  return new Promise((resolve) => {
    addGrayscale(grayScalePercentage);
    insertAlert(resolve);
  });
}
