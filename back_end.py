from flask import Flask
from flask import request
from flask import jsonify
import json
from mongo import Listing

app = Flask(__name__)

listings = {
   'listings_list': [ ]
}

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/listings', methods=['GET', 'POST'])
def get_listings():
    if request.method == 'GET':
        distance = request.args.get('distance')
        seller = request.args.get('seller')
        if distance:
            listings = Listing().find_by_distance(distance)
        elif seller:
            listings = Listing().find_by_name(seller)
        else:
            listings = Listing().find_all()
        return {'listings_list': listings}
    elif request.method == 'POST':
        listingToAdd = request.get_json()
        newListing = Listing(listingToAdd)
        newListing.save()
        resp = jsonify(newListing), 201
        return resp

@app.route('/listings/buy', methods=['DElETE'])
def buy_listing():
    if request.method == 'DELETE':
        listing = listings({"_id": id})
        resp = listing.remove()
        if resp['n'] == 1:
            return ('', 204)
        else:
            return jsonify({"error": "User not found"}), 404

