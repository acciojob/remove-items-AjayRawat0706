//your JS code here. If required.
const button = document.getElementById("btn");
function solve(){
	let val = document.getElementById("colorSelect").value;
let colorselect=document.getElementById("colorSelect");
	
	   for (let i = 0; i < colorSelect.options.length; i++) {
        if (colorSelect.options[i].value === val) {
            colorSelect.remove(i); // Remove the option
            break; // Exit loop after removing
        }
    }
}

button.addEventListener("click",solve);