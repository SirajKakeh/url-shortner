from flask import Flask
from pymongo import MongoClient
from flask_cors import CORS
import os

from config import Config

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)

client = MongoClient(app.config["DB_URI"])
db = client[app.config["DB_NAME"]]

try:
    db.command("serverStatus")
except Exception as e:
    app.logger.error(e)
else:
    app.logger.debug("Connected to DB!")

from app import routes
