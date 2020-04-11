from flask import make_response, request, redirect
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
def index():
    return make_response(
        {
            "status": "working",
            "sys_time": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        }
    )


@app.route("/api/url/<url>", methods=["GET"])
def get_url(url):
    full_url = db.url.find_one({"short_url": url})
    if full_url is not None:
        return redirect(full_url['url'])
    else:
        return make_response({"error": "No match found"}, 404)


@app.route("/api/url", methods=["POST"])
@expects_json(post_url_schema)
def encode_url():
    url = request.json["url"]
    short_url = generateShortUrl()
    base_url = request.base_url
    base_url = (
        urlparse(base_url).scheme + "://" + urlparse(base_url).netloc + "/api/url"
    )

    short_url_id = db.url.insert_one({"url": url, "short_url": short_url}).inserted_id

    return make_response(
        {"id": str(short_url_id), "short_url": base_url + "/" + short_url}, 201
    )
