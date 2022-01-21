from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
import json

import requests


app = Flask(__name__)
api = Api(app)
CORS(app)

todos = {}


class Api(Resource):
    def get(self):

        data = request.json

        res = requests.get(
            "https://6u3td6zfza.execute-api.us-east-2.amazonaws.com/prod/user/transactions")

        return res.json()

    def post(self):
        data = request.json

        res = requests.post(
            "https://6u3td6zfza.execute-api.us-east-2.amazonaws.com/prod/user/login", json=data)
        if res.ok:
            return {"authenticated": True}

        return {"authenticated": False}

    def put(self):
        with open("canceled_transactions.txt", 'a') as f:
            f.write(json.dumps(request.json)+"\n")
        return {"canceled": True}

    # def options (self):
    #     return {"Allow" : '*/*' }, 200, \
    # { "Access-Control-Allow-Origin": "*", \
    #   "Access-Control-Allow-Methods" : "*" }


api.add_resource(Api, '/')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
