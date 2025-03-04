const  icon=document.getElementById("icon");
const mobilemenu=document.getElementById("mobilemenu");
icon.addEventListener("click", ()=>{
    mobilemenu.classList.toggle("hidden");
})

      // end menu

const Allproduct = [
    {
        Image: "img/slider-slide-3.jpg",
    },
    {
        Image: "img/img-product-1.jpg",
    },
    {
        Image: "img/slider-slide-2.jpg",
    },
    {
        Image: "img/slider-slide-4.jpg",
    },
];

const productimgs = document.querySelector("#productimgs");

Allproduct.map((product) => {
    const producthtml = `
        <div class="shadow-lg bg-white px-12 md:px-1 py-5 md:my-20">
            <img src="${product.Image}">
        </div>`;
    productimgs.innerHTML += producthtml;
});

// //end product slider



const Allicons = [
    {
        Image: "img/shop-categories-1.png",
        name: "Skin Care",
       
        
        
    },
    {
        Image: "img/shop-categories-2.png",
        name : "Eye Brows",
        
    },
    {
        Image: "img/shop-categories-3.png",
         name : "Face",
    },
    {
        Image: "img/shop-categories-4.png",
         name : "Hair Care",
    },
    {
        Image: "img/shop-categories-5.png",
         name : "Makeup"
    },
];

const producticons = document.querySelector("#producticons");

Allicons.map((icon) => {
    const producthtml = `<div class="shadow-lg bg-white px-12 md:px-1 py-5 md:my-20">
            <img src="${icon.Image}">
            <h3 class="py-3 text-xl">${icon.name}</h3>
             <a class="text-2xl text-[#EA5A31] hover:text-[#222222] hover:underline" href="#">Click</a>
        </div>`;
        producticons.innerHTML += producthtml;
});

// end product icons


const Allproducts=[
    {
        Image: "img/img-product-5.jpg",
        name : "V-Beauty pack",
        price: 25.65
    },
    {
        Image: "img/img-product-3.jpg",
        name : "Anti-Aging Cream",
        price: 30.99
    },
    {
        Image: "img/img-product-1.jpg",
        name : "Hair style Gel",
        price: 90.25
    },
    {
        Image: "img/img-product-4.jpg",
        name : "V-bath saltish",
        price: 76.87
    },
    {
        Image: "img/img-product-6.jpg",
        name : "beauty Glow serum",
        price: 64.00
    },
    {
        Image: "img/img-product-2.jpg",
        name : "Skinny lotion",
        price: 54.12
    },
 
];

const Productcards=document.querySelector("#productcards");

Allproducts.map((product)=>{
    producthtml=`<div class="shadow-lg bg-gray-100 px-3 py-5 my-8 scale-130">
                <img src="${product.Image}">
                <h3  class="py-2 text-2xl font-[Roboto] font-bold">${product.name}</h3>
                <h4 class="py-5 text-2xl">$${product.price} </h4>
                <button class="rounded-lg bg-[#EA5A31] text-white px-2 py-1 cursor-pointer" onclick="buyNow('${product.Image}', '${product.name}', '${product.price}')">Buy Now</button>
                
            </div>`
            productcards.innerHTML += producthtml;

})
 
// end product cards
