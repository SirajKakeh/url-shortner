from flask import Flask
from flask_pymongo import PyMongo
import os

from config import Config

app = Flask(
    __name__,
    template_folder="../../url-shortner-view/build",
    static_folder="../../url-shortner-view/build/static",
)

app.config.from_object(Config)

mongo = PyMongo(app)
db = mongo.db[os.environ.get('url_shortner_db_name')]

from app import routes
