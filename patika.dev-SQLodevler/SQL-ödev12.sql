SELECT COUNT(*) FROM film WHERE length > 
(
SELECT AVG(length) FROM film
);

---------------------------------------------------------------------------
SELECT COUNT(*) FROM film 
WHERE rental_rate = 
(
SELECT MAX(rental_rate) FROM film
)
--------------------------------------------------------------------------
SELECT * FROM film 
WHERE rental_rate = 
(
SELECT MIN(rental_rate) FROM film
)
AND replacement_cost = 
(
SELECT MIN(replacement_cost) FROM film
)
ORDER BY title ;

---------------------------------------------------------------------------
SELECT customer.first_name,customer.last_name,COUNT(customer.first_name)
FROM payment
JOIN customer ON payment.customer_id = customer.customer_id
GROUP BY customer.first_name ,customer.last_name
HAVING  COUNT(*) = ANY
(
SELECT COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) desc LIMIT 1
) ;
