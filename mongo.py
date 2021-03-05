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
    db_client = pymongo.MongoClient('localhost', 27017)
    collection = db_client["listings"]["listings_list"]

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
