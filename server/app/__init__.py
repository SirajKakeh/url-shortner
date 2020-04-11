from flask import Flask
from pymongo import MongoClient
import os

from config import Config

app = Flask(__name__)

app.config.from_object(Config)

client = MongoClient(os.environ.get("url_shortner_db_string"))

db = client[os.environ.get("url_shortner_db_name")]

from app import routes
