let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
      //document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      document.querySelector("input").value = string; //we can also write - input.value = string;
    } else if (e.target.innerHTML == "C") {
      string = ""; //for cancel
      input.value = string; //We can also write - document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string += e.target.innerHTML;
      input.value = string; //document.querySelector("input").value = string;
    }
  });
});
