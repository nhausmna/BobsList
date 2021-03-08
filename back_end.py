from flask import Flask
from flask import request
from flask import jsonify
import json
from mongo import *
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

listings = {
   'listings_list': [ ]
}

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/login', methods=['POST'])
def login():
    credentials = request.get_json()
    username = credentials['username']
    password = credentials['password']

    verify_login = Credentials().verify_login(username, password)
    if verify_login:
        return 'True'
    return 'False'

@app.route('/register', methods=['POST'])
def register():
    credentialToAdd = request.get_json()
    newCredential = Credentials(credentialToAdd)
    newCredential.save()
    resp = jsonify(newCredential), 201
    return resp

@app.route('/inbox', methods=['GET'])
def inbox():
    search_from = request.args.get('from')
    search_to = request.args.get('to')
    messages = []
    if search_from:
        messages += Messages().search_from_user(search_from)
    if search_to:
        messages += Messages().search_to_user(search_to)
    if not search_to and not search_from:
        messages = Messages().find_all_messages()
    return {'messages_list': messages}

@app.route('/inbox/<id>', methods = ['DELETE'])
def delete_message(id):
        deleteMessage = Messages({"_id":id})
        deleteMessage.remove()
        resp = jsonify(deleteMessage), 201
        return resp

@app.route('/send_message', methods=['POST'])
def send_message():
    messageData = request.get_json()
    newMessage = Messages(messageData)
    newMessage.save()
    resp = jsonify(newMessage), 201
    return resp

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
        newListing['price'] = float(newListing['price'])
        newListing.save()
        resp = jsonify(newListing), 201
        return resp

@app.route('/listings/sort', methods=['GET'])
def sort_listing():
        if request.method == 'GET':
            sort_t = request.args.get('type')
            if sort_t == 'distance':
                listings = Listing().sort_by_distance()
            elif sort_t == 'price':
                listings = Listing().sort_by_price()
            else:
                listings = Listing().find_all()
            return {'listings_list': listings}

@app.route('/listings/buy', methods=['DELETE'])
def buy_listing():
    if request.method == 'DELETE':
        listing = listings({"_id": id})
        resp = listing.remove()
        if resp['n'] == 1:
            return ('', 204)
        else:
            return jsonify({"error": "User not found"}), 404

