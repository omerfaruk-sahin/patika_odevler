SELECT city.city,country.country FROM city 
INNER JOIN country ON city.country_id=country.country_id ;

SELECT customer.first_name,customer.last_name,payment.payment_id FROM payment 
INNER JOIN customer ON customer.customer_id=payment.customer_id ;

SELECT customer.first_name,customer.last_name,rental.rental_id FROM rental 
INNER JOIN customer ON customer.customer_id=rental.customer_id ;
