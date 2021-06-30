const products =  [
    { 
        "name": "iphone 1", 
        "brand": "apple", 
        "description": "iphone 1", 
        "price": "250" 
    },
    { 
        "name": "iphone 2", 
        "brand": "apple", 
        "description": "iphone 2", 
        "price": "260" 
    },
    { 
        "name": "iphone 3", 
        "brand": "apple", 
        "description": "iphone 3", 
        "price": "270" 
    },
    { 
        "name": "iphone 4", 
        "brand": "apple", 
        "description": "iphone 4", 
        "price": "280" 
    },
    { 
        "name": "iphone 5", 
        "brand": "apple", 
        "description": "iphone 5", 
        "price": "290" 
    },
    { 
        "name": "iphone 6", 
        "brand": "apple", 
        "description": "iphone 6", 
        "price": "300" 
    },
    { 
        "name": "iphone 7", 
        "brand": "apple", 
        "description": "iphone 7", 
        "price": "310" 
    },
    { 
        "name": "iphone 8", 
        "brand": "apple", 
        "description": "iphone 8", 
        "price": "310" 
    }
]

const productContainer = document.getElementById("products-container");

// var cart = [];

function addToCart(productName){
    alert("Item added to cart: " + productName);

    // cart.push(productName)

    $(".modal-body").append(
        `<p>${productName}</p>`
    );

}

products.forEach(product => {
    
    $('#products')
    .append(
        '<div class="card border-dark mb-5" style="width: 18rem;">'+
            '<img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000" class="card-img-top" alt="...">'+
            '<div class="card-body">'+
                `<h5 class="card-title text-primary">${product.name}</h5>`+
                '<div class="d-flex justify-content-between">'+
                    `<p class="card-text">$${product.price}.00</p>`+
                    `<a href="#" class="btn btn-primary" onclick="addToCart('${product.name}')">Order</a>`+
                '</div>'+
            '</div>'+
        '</div>'
    );

});