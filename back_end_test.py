import pytest
import back_end

def test_get_listings():
    expected = {
        "listings_list": [
            {
            "_id": "602cc42ae04d5011230f8848", 
            "description": "edjeauhdeiuadeuadheuahdiehaduiehadueiaud", 
            "distance": "5", 
            "name": "Edwin", 
            "p_name": "iPhone", 
            "price": "$10.00"
            }, 
            {
            "_id": "602d7ffbe04d5011230f8849", 
            "description": "edjeauhdeiuadeuadheuahdiehaduiehadueiaud", 
            "distance": "6", 
            "name": "Jaxon", 
            "p_name": "TV", 
            "price": "$100.00"
            }, 
            {
            "_id": "602d805fe04d5011230f884a", 
            "description": "edjeauhdeiuadeuadheuahdiehaduiehadueiaud", 
            "distance": "3", 
            "name": "Nick", 
            "p_name": "Shoes", 
            "price": "$25.00"
            }
        ]
    }   
    assert back_end.get_listings() == expected

    def test_get_listings_name():
    expected = {
        "listings_list": [
            {
            "_id": "602cc42ae04d5011230f8848", 
            "description": "edjeauhdeiuadeuadheuahdiehaduiehadueiaud", 
            "distance": "5", 
            "name": "Edwin", 
            "p_name": "iPhone", 
            "price": "$10.00"
            }, 
        ]
    }   
    assert back_end.get_listings("seller=Edwin") == expected
