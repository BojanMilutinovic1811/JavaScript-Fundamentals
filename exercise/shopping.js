(function() {
    
    class Product {
        constructor(name, price, expirationDate) {
            this.productId = Math.ceil(Math.random()*100000)
            this.name = name;
            this.price = parseFloat(price.toFixed(2));
            this.expirationDate = new Date(expirationDate);
        }

        getInfo() {
            const itemCode = (this.name[0] + this.name[this.name.length-1]).toUpperCase() +this.productId
            return `${itemCode}, ${this.name}, ${this.price}`
        }
    }


    class ShoppingBag {
        constructor() {
            this.productList = []
        }

        addProduct(product) {
            if(product.expirationDate > new Date()) {
                this.productList.push(product);
            }
        }
        

        averageProductsPrice() {

            let averagePrice = 0;

            this.productList.forEach(product => {
                   averagePrice += parseInt(product.price)
            }); 
            
            return (averagePrice / 2).toFixed(3);
        }

        getMostExpensive() {
            let mostExpensive = this.productList[0].price; 

            this.productList.forEach( product => {
               if(mostExpensive < product.price) mostExpensive = product.getInfo()
            })

            return mostExpensive;
        }

        calculateTotalPrice() {
            let totalPrice = 0;
            this.productList.forEach(product => totalPrice += product.price);
            return totalPrice;
        }
    }

    class PaymentCard {
        constructor(accountBalance, status, validUntil) {
            this.accountBalance = parseFloat(accountBalance.toFixed(2));
            this.status = status;
            this.validUntil = new Date(validUntil);
        }
    }




    const product1 = new Product('banana', 120, '11-18-2019');
    const product2 = new Product('apple', 90, '8-15-2019' );
    const product3 = new Product('cherry', 300, 'November 10 2019');
    const product4 = new Product('pineapple', 900, 'december 12 2020')
    const shoppingBag1 = new ShoppingBag;
    shoppingBag1.addProduct(product1);
    shoppingBag1.addProduct(product2);
    shoppingBag1.addProduct(product3);
    shoppingBag1.addProduct(product4);
    const paymentCard1 = new PaymentCard(1000, 'active', 'November 10 2019')


    function checkAccountAndBuy(shoppingBag, paymentCard) {

        const account = paymentCard.accountBalance;
        const price = shoppingBag.calculateTotalPrice();

        if(account > price) {
            console.log('success');
        } else {
            console.log(`You need ${price - account}$`);
        }
    }

    checkAccountAndBuy(shoppingBag1, paymentCard1);

  


})()