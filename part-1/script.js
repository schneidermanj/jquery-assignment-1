// // Do your work in this file.

// 1. [Fork this repo][fork]. X
// 1. Only code inside the file named `script.js`. No editing any other files. X
// 1. Create a `div` element with a class name of "**view**" and append it to the document `body` using jQuery. You can use [append], [appendTo], or any other jQuery method.
var skyElement = document.createElement("div");
skyElement.className = "view";
// document.body.appendChild(skyElement);
$('body').append(skyElement);

// 1. Create a `div` element with a class name of "**grass**" and append it to the previously created "view" div from step 3.
var grassElement = document.createElement("div");
grassElement.className = "grass";
// skyElement.appendChild(grassElement);
$('.view').append(grassElement);

// 1. Create a `div` element with a class name of "**sun**" and append it to the previously created "view" div from step 3.
var sunElement = document.createElement("div");
sunElement.className = "sun";
// skyElement.appendChild(sunElement);
$('.view').append(sunElement);

// 1. Write a [`while`] loop to create 5 divs. The div classes will be "**ray-1**", "**ray-2**", "**ray-3**", "**ray-4**", and "**ray-5**". Append each of these divs to the previously created "sun" div from step 5.
var i = 1;
while (i <= 5) {
    var rayElement = document.createElement("div");
    rayElement.className = "ray-" + i;
   $('.sun').append(rayElement);
    i++;
}


// 1. Create a `div` element with a class name of "**mountain**" and append it to the previously created "view" div from step 3.
var mountainElement = document.createElement("div");
mountainElement.className = "mountain";
// skyElement.appendChild (mountainElement);
$('.view').append(mountainElement);



// 1. Create a `div` element with a class name of "**mountain-top**" and append it to the previously created "mountain" div from step 7.
var mountainTopElement = document.createElement("div");
mountainTopElement.className = "mountain-top";
// mountainElement.appendChild (mountainTopElement);
$('.mountain').append(mountainTopElement);

// 1. Write a [`do...while`] loop to create 3 divs. The div classes will be "**mountain-cap-1**", "**mountain-cap-2**", and "**mountain-cap-3**". Append each of these divs to the previously created "mountain-top" div from step 8.
var i = 1;
do {
    var capElement = document.createElement("div");
    capElement.className = "mountain-cap-" + i;
    // mountainTopElement.appendChild(capElement);
    $('.mountain-top').append(capElement);
    i++;
}
while (i <= 3);

// ### What the HTML should look like when you're done.

// Remember, you're producing this HTML using jQuery. You cannot edit any file other than the `script.js` file.

// ```HTML
// <div class="view">
//     <div class="grass"></div>
//     <div class="sun">
//         <div class="ray-1"></div>
//         <div class="ray-2"></div>
//         <div class="ray-3"></div>
//         <div class="ray-4"></div>
//         <div class="ray-5"></div>
//     </div>

//     <div class="mountain">
//         <div class="mountain-top">
//             <div class="mountain-cap-1"></div>
//             <div class="mountain-cap-2"></div>
//             <div class="mountain-cap-3"></div>
//         </div>
//     </div>
// </div>
// ```