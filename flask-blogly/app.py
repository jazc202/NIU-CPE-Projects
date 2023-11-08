"""Blogly application."""

from flask import Flask, render_template
from models import db, connect_db, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

with app.app_context():
    connect_db(app)
    db.create_all()

    user = User(firstname='J', lastname='C')
    db.session.add(user)
    db.session.commit()

    @app.route('/')
    def show_db():
        users = user.query(1)
        return render_template(users=users)






