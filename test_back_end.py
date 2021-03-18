import pytest
import back_end

# All of our functions require an active connection to the database.
# This makes CI difficult without leaking those credentials to the internet.

def test_get_listings():
    expected = {
        "listings": [
            {
                {"_id":{"$oid":"604668d4b56497a90525b31b"},"distance":{"$numberLong":"8"},"imageLink":"https://i.pinimg.com/originals/38/d6/04/38d604baa084bd18baa9c744201fc4b4.jpg","name":"Edwin","price":547,"p_name":"thing","description":"1 or 2?"}
            }, 
            {
                {"_id":{"$oid":"6046699ab56497a90525b31c"},"distance":{"$numberLong":"43"},"imageLink":"https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg","name":"nick","price":5223,"p_name":"Bulb","description":"Light bulb"}
            }
        ]
    }   
    assert back_end.get_listings() == expected
    # the above code fails, because all of our functions require connections to the database
    #assert expected == expected

def test_get_listings_name():
    expected = {
        "listings": [
            {"_id":{"$oid":"604668d4b56497a90525b31b"},"distance":{"$numberLong":"8"},"imageLink":"https://i.pinimg.com/originals/38/d6/04/38d604baa084bd18baa9c744201fc4b4.jpg","name":"Edwin","price":547,"p_name":"thing","description":"1 or 2?"}
        ]
    }   
    assert back_end.get_listings(query_string={'seller': 'Edwin'}) == expected
    # the above code fails, because all of our functions require connections to the database
    #assert expected == expected

def test_get_listings_distance():
    expected = {
        "listings": [
            {"_id":{"$oid":"604668d4b56497a90525b31b"},"distance":{"$numberLong":"8"},"imageLink":"https://i.pinimg.com/originals/38/d6/04/38d604baa084bd18baa9c744201fc4b4.jpg","name":"Edwin","price":547,"p_name":"thing","description":"1 or 2?"}
        ]
    }
    assert back_end.get_listings(query_string={'distance': 10}) == expected
    # the above code fails, because all of our functions require connections to the database
    #assert expected == expected

def test_sort_distance(): 
    expected = {
        "listings": [
            {"_id":{"$oid":"604668d4b56497a90525b31b"},"distance":{"$numberLong":"8"},"imageLink":"https://i.pinimg.com/originals/38/d6/04/38d604baa084bd18baa9c744201fc4b4.jpg","name":"Edwin","price":547,"p_name":"thing","description":"1 or 2?"},
            {"_id":{"$oid":"6046699ab56497a90525b31c"},"distance":{"$numberLong":"43"},"imageLink":"https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg","name":"nick","price":5223,"p_name":"Bulb","description":"Light bulb"}
        ]
    }
    assert back_end.sort_listing(query_string={'sort_t': 'distance'}) == expected
    # the above code fails, because all of our functions require connections to the database
    #assert expected == expected

def test_sort_price(): 
    expected = {
        "listings": [
            {"_id":{"$oid":"604668d4b56497a90525b31b"},"distance":{"$numberLong":"8"},"imageLink":"https://i.pinimg.com/originals/38/d6/04/38d604baa084bd18baa9c744201fc4b4.jpg","name":"Edwin","price":547,"p_name":"thing","description":"1 or 2?"}, 
            {"_id":{"$oid":"6046699ab56497a90525b31c"},"distance":{"$numberLong":"43"},"imageLink":"https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg","name":"nick","price":5223,"p_name":"Bulb","description":"Light bulb"}
        ]
    }
    assert back_end.sort_listing(query_string={'type': 'price'}) == expected
    # the above code fails, because all of our functions require connections to the database
    #assert expected == expected

