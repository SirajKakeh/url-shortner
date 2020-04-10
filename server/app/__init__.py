from flask import Flask

app = Flask(__name__, template_folder="../../url-shortner-view/build")

from app import routes