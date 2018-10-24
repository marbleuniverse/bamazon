var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	user: 'root',

	password: '',
	database: 'bamazon'
});

function UserPurchase() {
	
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Item ID',
			validate: validateInput,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many would you like to buy?',
			validate: validateInput,
			filter: Number
		}
	]).then(function(input) {

		var item = input.item_id;
		var quantity = input.quantity;

        var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;


			if (data.length === 0) {
				console.log('Invalid ID');
				Inventory();

			} else {
				var productData = data[0];

				if (quantity <= productData.quantity) {
					console.log('this product is in stock. Placing your order.');

                    var updateQueryStr = 'UPDATE products SET quantity = ' + (productData.quantity - quantity) + ' WHERE item_id = ' + item;
                    
				} else {
					console.log('That item is out of stock');
				}
			}
		})
	})
}

function Inventory() {

	queryStr = 'SELECT * FROM products';

	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('Inventory: ');

		var strOut = '';
		for (var i = 0; i < data.length; i++) {
			strOut = '';
			strOut += 'Item ID: ' + data[i].item_id + '  //  ';
			strOut += 'Product Name: ' + data[i].product_name + '  //  ';
			strOut += 'Price: $' + data[i].price + '\n';
			console.log(strOut);
		}


	  UserPurchase();
	})
}

function runbamazon() {
    
   UserPurchase();

	Inventory();
}

runbamazon();
