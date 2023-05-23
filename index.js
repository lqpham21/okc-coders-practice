var className = "ok-coders";
var testNumber = 1;
var testNumber2 = 2.0;
var myOtherClassName;

// code comment here 
console.log(className)

var basicMath = 1 + 1
var advancedMath = basicMath * 2

navigator.geolocation.getCurrentPosition(
    (position) => {
    console.log(position);
    }, 
    (error) => {
    console.log(error);
    }
);

var userIconElement = document.getElementById("user-icon")
console.log(userIconElement)
userIconElement.addEventListener('click', () => {
    console.log("I was clicked")
});
