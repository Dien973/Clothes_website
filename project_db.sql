/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

SET SQL_SAFE_UPDATES = 0;
create database project_db;
/*drop database project_db;*/
use project_db;

create table users(
	user_id int primary key auto_increment,
	user_name varchar(255) unique NOT NULL,
	user_email varchar(255) unique not null,
	user_password varchar(255) not null,
	user_gender enum('Male','Female','Other') default 'Other' not null,
	user_birthday date not null,
	user_address varchar(255) not null,
	user_created_at date not null,
	user_role enum('admin', 'user') DEFAULT 'user' not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
select * from users;


create table products(
	product_id int primary key auto_increment,
    product_name varchar(255) not null,
    product_type enum('Shirt','Trousers','Dresses/Skirts','Accessories') not null,
    product_unit_price DECIMAL(10, 3) NOT NULL,
    product_description TEXT,
    product_image varchar(255) not null,
    product_size varchar(50),
    product_stock INT DEFAULT 0 not null,
    product_created_at date not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
select * from products;

create table cart(
	cart_id	int primary key auto_increment,
    user_id int not null,
    product_id int not null,
	cart_quantity	int not null,
    
    foreign key (user_id) references users(user_id),
    foreign key (product_id) references products(product_id)
);
select * from cart;
SELECT COUNT(*) FROM cart;

