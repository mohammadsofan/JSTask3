let parent = document.querySelector(".parent");

async function getProducts(){
   let response = await fetch("https://dummyjson.com/products");
   let data = await response.json();
   let products = data.products;
   
   const result = products.map(function (product){
        return `
        <div class="child">
        <img src='${product.thumbnail}'/>
        <h2>${product.title}</h2>
        <span>$${product.price}</span>
        </div>
        `;
   }).join('');

   parent.innerHTML = result;
}


getProducts();