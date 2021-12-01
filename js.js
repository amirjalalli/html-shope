var allProducts = [
    {id: 1, name: "labtop", price: 17000000},
    {id: 2, name: "phone", price: 7000000},
    {id: 3, name: "milk", price: 10000},
    {id: 4, name: "water", price: 8000},
    {id: 5, name: "pen", price: 6000},
    {id: 6, name: "pencel", price: 800},
    {id: 7, name: "cable", price: 55000},
    {id: 8, name: "soft water", price: 8000},
    
]

var userBasket = [
    {id: 1, name: "labtop", price: 17000000},
    {id: 2, name: "phone", price: 7000000},
]

var userRequest = prompt('1.add product: \n 2.Remove product:')
if(userRequest == "1"){
    alert("Add")

    var userProductName = prompt('enter your name: ')
    var productData 

    var isInShop = allProducts.some(function(product){
        if (product.name === userProductName){
            productData = product
            return true
        }
        return product.name === userProductName
    })
    if (isInShop == true){
        var newProduct = {
            id: 3,
            name : productData.name,
            price: productData.price,
        }
        userBasket.push(newProduct);
        console.log("basket: ", userBasket)
    } else {
        alert("همچین محصولی موجود نمی باشد")
    }

} else if (userRequest =='2') {
    alert("Remove")

    var userProductName = prompt("enter your product name: ")
    var productIndex = userBasket.findIndex(function(product) {
        return product.name == userProductName;
    });
    userBasket.splice(productIndex, 1)
    console.log("Basket: ", userBasket);

} else{
    alert("لطفا گزینه صحیح را انتخاب کنید")
}