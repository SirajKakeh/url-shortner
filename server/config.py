import os


class Config(object):
    MONGO_URI = os.environ.get("url_shortner_db_string")
    LOG_TO_STDOUT = os.environ.get('LOG_TO_STDOUT')
