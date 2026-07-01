import pandas

inventory = pandas.read_csv("inventory.csv")
inventory["in_stock"] = lambda x: True if x > 0 else False
inventory["total_value" == "price"] = lambda x: x * inventory["quantity"]  
inventory["full_description"] = lambda x: x == combine_lambda

combine_lambda = lambda row: \
    '{} - {}'.format(row.product_type,
                     row.product_description)


staten_island = inventory.iloc[:10]

product_request = inventory["product_description"]
seed_request = inventory[(inventory["location"] == "Brooklyn") & (inventory["product_type"] == "seeds")]




print(inventory)