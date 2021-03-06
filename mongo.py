import pymongo
from bson import ObjectId

class Model(dict):
    __getattr__ = dict.get
    __delattr__ = dict.__delitem__
    __setattr__ = dict.__setitem__

    def save(self):
        if not self._id:
            self.collection.insert(self)
        else:
            self.collection.update(
                {"_id": ObjectId(self._id)}, self)
        self._id = str(self._id)

    def reload(self):
        if self._id:
            result = self.collection.find_one({"_id": ObjectId(self._id)})
            if result:
                self.update(result)
                self._id = str(self._id)
                return True
        return False
    
    def remove(self):
        if self._id:
            resp = self.collection.remove({"_id": ObjectId(self._id)})
            self.clear()
            return resp

class Listing(Model):
    client = pymongo.MongoClient("mongodb+srv://TESTUSER:2YLaGpU5qPKyW57K@cluster0.sm94a.mongodb.net/BobsListDB?retryWrites=true&w=majority")
    collection = client['BobsListDB']['listings']

    def find_all(self):
        listings = list(self.collection.find())
        for listing in listings:
            listing["_id"] = str(listing["_id"])
        return listings

    def find_by_name(self, name):
        listings = list(self.collection.find({"name": name}))
        for listing in listings:
            listing["_id"] = str(listing["_id"])
        return listings

    def find_by_distance(self, dist):
        listings = list(self.collection.find( {"distance": {"$lte": dist}}))
        for listing in listings:
            listing["_id"] = str(listing["_id"])
        return listings

    def find_by_price(self, price):
        listings = list(self.collection.find( {"price": {"$lte": price}}))
        for listing in listings:
            listing["_id"] = str(listing["_id"])
        return listings

    def sort_by_distance(self):
        listings = list(self.collection.find().sort([("distance", 1)]))
        for listing in listings:
            listing["_id"] = str(listing["_id"])
        return listings

    def sort_by_price(self):
        listings = list(self.collection.find().sort([("price", 1)]))
        for listing in listings:
            listing["_id"] = str(listing["_id"])
        return listings

class Credentials(Model):
    client = pymongo.MongoClient("mongodb+srv://TESTUSER:2YLaGpU5qPKyW57K@cluster0.sm94a.mongodb.net/BobsListDB?retryWrites=true&w=majority")
    collection = client['BobsListDB']['user_credentials']

    def verify_login(self, username, password):
        credentials = list(self.collection.find( {"username": username} ))
        print(credentials)
        for u in credentials: 
            if str(password) == str(u["password"]):
                return True   
        return False

class Messages(Model):
    client = pymongo.MongoClient("mongodb+srv://TESTUSER:2YLaGpU5qPKyW57K@cluster0.sm94a.mongodb.net/BobsListDB?retryWrites=true&w=majority")
    collection = client['BobsListDB']['messages']

    def find_all_messages(self):
        messages = list(self.collection.find())
        for message in messages:
            message["_id"] = str(message["_id"])
        return messages
    
    def search_to_user(self, username):
        messages = list(self.collection.find( {"to": username}))
        for m in messages:
            m["_id"] = str(m["_id"])
        return messages

    def search_from_user(self, username):
        messages = list(self.collection.find( {"from": username}))
        for m in messages:
            m["_id"] = str(m["_id"])
        return messages