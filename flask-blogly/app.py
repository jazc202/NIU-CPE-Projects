"""Blogly application."""

from flask import Flask, render_template, redirect, request
from models import db, connect_db, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)

@app.route('/')
def show_db():
    db.create_all()

    return redirect('/users')

    
    # db.session(user)
    # db.session.commit()

@app.route('/users')
def list_users():
    users = User.query.all()
    return render_template('user_list.html', users=users)

@app.route('/users/<id>')
def user_details(id):
    user = db.session.get(User, id)
    return render_template('user_details.html', user=user)

@app.route('/users/new')
def new_user():
    return render_template('new_user.html')

@app.post('/users/new')
def create_user():
    firstname = request.form.get('fname').strip()
    lastname = request.form.get('lname').strip()
    image = request.form.get('img_url').strip()
    added_user = User()
    added_user.firstname = firstname
    added_user.lastname = lastname
    added_user.image_url = image
    db.session.add(added_user)
    db.session.commit()
    return redirect('/users')

@app.route('/users/<id>/edit')
def edit_user(id):
    user = db.session.get(User, id)
    return render_template('edit_user.html', user=user)

@app.post('/users/<id>/edit')
def edited_user(id):
    new_firstname = request.form.get('fname').strip()
    new_lastname = request.form.get('lname').strip()
    new_image = request.form.get('img_url').strip()
    user = db.session.get(User, id)
    user.firstname = new_firstname
    user.lastname = new_lastname
    user.image_url = new_image
    db.session.commit()
    return redirect('/users')

@app.route('/users/<id>/delete')
def delete_user(id):
    user = db.session.get(User, id)
    db.session.delete(user)
    db.session.commit()
    return redirect('/users')