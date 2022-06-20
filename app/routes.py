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


@app.route("/url", methods=["POST"])
@expects_json(post_url_schema)
def encode_url():
    full_url = request.json["url"]
    req_url = request.base_url
    short_url = generateShortUrl()
    new_url = f"{urlparse(req_url).scheme}://{urlparse(req_url).netloc}/{short_url}"

    app.logger.info(f"Requested URL: {full_url}")

    short_url_id = db.url.insert_one(
        {"url": full_url, "short_url": short_url}
    ).inserted_id

    app.logger.debug(
        f"Successfully inserted {short_url} into db\nDocument ID: {str(short_url_id)}"
    )

    return make_response({"id": str(short_url_id), "short_url": new_url}, 201)


@app.route("/<url>", methods=["GET"])
def get_url(url):
    full_url = db.url.find_one({"short_url": url})
    if full_url is not None:
        app.logger.debug(f"Requested full URL for {url}")

        return redirect(full_url["url"])
    else:
        app.logger.error(f"Error: could not find {url} in DB!")

        return make_response({"error": "No match found"}, 404)
