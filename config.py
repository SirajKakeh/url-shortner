import os


class Config(object):
    DB_URI = f'mongodb://{os.environ.get("DB_USERNAME")}:{os.environ.get("DB_PASSWORD")}@{os.environ.get("DB_HOSTNAME")}:27017'
    DB_NAME = os.environ.get("DB_NAME")
