
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Halo 1', 60, 423),
		('Madden 19', 60, 140),
		('Ipod mini', 75, 19),
		('Levis Jeans', 20, 1000),
		('Phillies hat',  10, 380),
		('Band Tshirt',  32, 250),
		('Crayola markers', 5, 867),
		('Vans Shoes', 45, 209),
		('Nike Shoes', 100, 963),
		('Macbook pro', 1200, 783),

