# Question 3

Write a SQL query that returns all the user_cart rows that added item with barcode X on the last day (one row per cart!)

    mysql:

    SELECT * 
    FROM user_cart
    WHERE cart_id IN (
        SELECT cart_id
        FROM cart_items
        WHERE barcode = "PUT_BARCODE_HERE" 
        AND DATE(added_at) > SUBDATE(NOW(), 1)
    )


Write a SQL query that returns all the items of the first 10 carts the took item with barcode X in the last week

    mysql:

    SELECT *
    FROM cart_items
    WHERE cart_id IN (
        SELECT DISTINCT cart_id
        FROM cart_items
        WHERE ( item_name = "PUT_ITEM_NAME_HERE"
        AND DATE(added_at) > SUBDATE(NOW(), 7)
    )
    SORT BY added_at
    LIMIT 10
