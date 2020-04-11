from flask import make_response, request
from flask_expects_json import expects_json
from urllib.parse import urlparse
import re
import datetime

from app import app, db
from app.helper import generateShortUrl


post_url_schema = {
    "type": "object",
    "properties": {"url": {"type": "string"}},
    "required": ["url"],
}


@app.route("/")
@app.route("/index")
def index():
    return make_response(
        {
            "status": "working",
            "sys_time": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        }
    )


@app.route("/api/url", methods=["POST"])
@expects_json(post_url_schema)
def encode_url():
    url = request.json["url"]
    short_url = generateShortUrl()
    base_url = request.base_url
    base_url = urlparse(base_url).scheme + "://" + urlparse(base_url).netloc + "/url"

    short_url_id = db.insert_one({"url": url, "short_url": short_url}).inserted_id

    return make_response(
        {"id": str(short_url_id), "short_url": base_url + "/" + short_url}, 201
    )
