// Declare your arrays here
let  sweets = ["https://www.mexicanplease.com/wp-content/uploads/2018/05/agua-de-jamaica-serving-in-glass.jpg", "https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/7/1/7189ZDDI1OL._SL1500_.jpg"];
let  spicys = ["https://thesocialsipper.com/wp-content/uploads/2022/06/Flybird-Spicy-Tamarind-Mangonada-6-scaled.jpg", "https://www.hantover.com/datasurge/img/image-normal/Lagasse-CLO30966CT-53775-web-3.jpg"];
let  sours = ["https://www.muydelish.com/wp-content/uploads/2022/05/agua-de-tamarindo-drink.jpg", "https://rooseveltfishingadventures.com/wp-content/uploads/2024/04/9-Amazing-Health-Benefits-Of-Cranberry-Juice.png"];
// Make sure to declare your HTML elements as variables! 

let  answer = document.querySelector('#answer');
let recommend = document.querySelector(".recommend");

// Submit Button 

let submitButton = document.querySelector("button");

submitButton.addEventListener("click", function() {
   let userInput = document.querySelector("input").value
   if (userInput === "sweet"){
    sweets.forEach(function(sweets){
        let image = document.createElement("img");
        image.src = sweets;
        recommend.appendChild(image);
    })
   }
   if (userInput === "spicy"){
    spicys.forEach(function(spicys){
        let image = document.createElement("img");
        image.src = spicys;
        recommend.appendChild(image);
    })
   }

   if (userInput === "sour"){
    sours.forEach(function(sours){
        let image = document.createElement("img");
        image.src = sours;
        recommend.appendChild(image);
    })
   }
   
});