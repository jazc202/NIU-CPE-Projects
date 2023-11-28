"""Models for Blogly."""
from flask_sqlalchemy import SQLAlchemy  # type: ignore

db = SQLAlchemy()


def connect_db(app):
    """Connect to database."""
    db.app = app
    db.init_app(app)


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    firstname = db.Column(db.String(500),
                     nullable=False,
                     unique=False)
    lastname = db.Column(db.String(500),
                     nullable=False,
                     unique=False)
    image_url = db.Column(db.String(500),
                     unique=False)