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

class Post(db.Model):
    __tablename__ = 'posts'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(500),
                      nullable=False,
                      unique=False)
    content = db.Column(db.Text(),
                      nullable=False,
                      unique=False)
    created_at = db.Column(db.DateTime())
    created_by = db.Column(db.Integer, db.ForeignKey('user.id'))