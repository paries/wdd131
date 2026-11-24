const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = today.getFullYear();
document.getElementById("lastModified").textContent = 'Last Modified ' + document.lastModified;

const productList = document.getElementById("product");


const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const addProductToList = function (product) {
    productList.add(new Option(product.name, product.id))
}

const loadProducts = function(){
    products.forEach
    products.forEach(product => {
        addProductToList(product);
    });
}

loadProducts();