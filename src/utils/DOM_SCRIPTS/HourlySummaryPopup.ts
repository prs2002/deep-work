/*
    This popup is used to display the hourly summary of the selected day.
*/

function msToHMS(ms: number): string {
    // 1- Convert to seconds:
    let seconds = Math.floor(ms / 1000);
    // 2- Extract hours:
    const hours = Math.floor(seconds / 3600); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    const minutes = Math.floor(seconds / 60); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  }

export function hourlySummaryPopUp(productiveTime : number, untaggedTime : number, wastedTime : number) {
    const popUpContainer = document.createElement('div');
    popUpContainer.style.position = 'absolute';
    popUpContainer.style.top = '20px';
    popUpContainer.style.right = '20px';
    popUpContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    popUpContainer.style.padding = '10px';
    popUpContainer.style.borderRadius = '5px';
    popUpContainer.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
    popUpContainer.style.zIndex = '100000';
    
    const title = document.createElement('h3');
    title.textContent = 'Hourly Summary';
    title.style.color = 'black';
    
    const productiveTimeElem = document.createElement('p');
    productiveTimeElem.textContent = `Productive Time: ${msToHMS(productiveTime)}`;
    productiveTimeElem.style.color = 'green';
    
    const untaggedTimeElem = document.createElement('p');
    untaggedTimeElem.textContent = `Untagged Time: ${msToHMS(untaggedTime)}`;
    untaggedTimeElem.style.color = 'orange';
    
    const wastedTimeElem = document.createElement('p');
    wastedTimeElem.textContent = `Wasted Time: ${msToHMS(wastedTime)}`;
    wastedTimeElem.style.color = 'red';
    
    popUpContainer.appendChild(title);
    popUpContainer.appendChild(productiveTimeElem);
    popUpContainer.appendChild(untaggedTimeElem);
    popUpContainer.appendChild(wastedTimeElem);
    
    document.body.appendChild(popUpContainer);


    setTimeout(() => {
        popUpContainer?.remove();
    }, 5000);


}
