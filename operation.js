var constproperties =[
    {
        image:"",
        name:"Name:Sunny Villa",
        city:"City:New York",
        price:"Price:500000",
        discountedPrice:"DiscountedPrice:475000",
        disc:"5%"
    },
    {
        image:"",
        name:"Name:Oceanfront Condo",
        city:"City:Miami",
        price:"Price:750000",
        discountedPrice:"DiscountedPrice:700000",
         disc:"6.67%"
    },
    {
        image:"",
        name:"Name:Mountain Retreat",
        city:"City:Denver",
        price:"Price:600000",
        discountedPrice:"DiscountedPrice:570000",
         disc:"4.44%"
    },
    {
        image:"",
        name:"Name:Urban Apartment",
        city:"City:Chicago",
        price:"Price:450000",
        discountedPrice:"DiscountedPrice:430000",
         disc:"5.56%"
    }
]


constproperties.forEach(serve=>{
    var box = document.createElement("div");
box.className = "box";

var upperbox = document.createElement("div");
upperbox.className = "upperbox";

var lowerbox = document.createElement("div");
lowerbox.className = "lowerbox";

box.appendChild(upperbox);
box.appendChild(lowerbox);

var container = document.getElementById("details");
container.appendChild(box);

var nameHeading = document.createElement("h1");
nameHeading.textContent = serve.name;

var cityName = document.createElement("h2");
cityName.textContent = serve.city;

var villaPrice = document.createElement("h3");
villaPrice.textContent = serve.price;

var discount = document.createElement("h4");
discount.textContent = serve.discountedPrice;

var position = document.createElement("div");
position.className= "position";

var image = document.createElement("img");
image.src=serve.image;

var h1Element = document.createElement("h1");
h1Element.textContent = serve.disc;

position.appendChild(h1Element);
box.appendChild(position);
upperbox.appendChild(image);
lowerbox.appendChild(nameHeading);
lowerbox.appendChild(cityName);
lowerbox.appendChild(villaPrice);
lowerbox.appendChild(discount);
})
// var box = document.createElement("div");
// box.className = "box";

// var upperbox = document.createElement("div");
// upperbox.className = "upperbox";

// var lowerbox = document.createElement("div");
// lowerbox.className = "lowerbox";

// box.appendChild(upperbox);
// box.appendChild(lowerbox);

// var container = document.getElementById("details");
// container.appendChild(box);

// var nameHeading = document.createElement("h1");
// nameHeading.textContent = constproperties.name;

// var cityName = document.createElement("h2");
// cityName.textContent = constproperties.city;

// var villaPrice = document.createElement("h3");
// villaPrice.textContent = constproperties.price;

// var discount = document.createElement("h4");
// discount.textContent = constproperties.discountedPrice;


// var image = document.createElement("img");
// image.src=serve.image;

// upperbox.appendChild(image);
// lowerbox.appendChild(nameHeading);
// lowerbox.appendChild(cityName);
// lowerbox.appendChild(villaPrice);
// lowerbox.appendChild(discount);