/*
    This popup will be shown to the user when they first open the extension on a new day.
    It will be shown only once per day.
    It will contain a greeting message and a button to close the popup. It will also automatically close after some time.
*/

import { insertGreetings } from "./DailyPopup";

export function addGreetingPopup(isFirstTime?: boolean) {
  insertGreetings(isFirstTime);
}
