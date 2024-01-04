"""Blogly application."""

from flask import Flask, render_template, redirect, request, url_for
from models import db, connect_db, User, Post
import datetime

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
    posts = db.session.query(Post).filter(Post.created_by == id)
    return render_template('user_details.html', user=user, user_posts=posts)

@app.route('/users/new')
def new_user():
    return render_template('new_user.html')

@app.route('/users/<id>/posts/new')
def post_form(id): 
    return render_template('new_post.html')

@app.post('/users/<id>/posts/new')
def create_post(id): 
    post_title = request.form.get('title').strip()
    post_content = request.form.get('content').strip()
    post_date = datetime.datetime.now()
    added_post = Post()
    added_post.title = post_title
    added_post.content = post_content
    added_post.created_at = post_date
    added_post.created_by = id
    db.session.add(added_post)
    db.session.commit()
    return redirect('/users/<id>')

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

@app.route('/posts/<post_id>')
def showPost(post_id):
    post = db.session.get(Post, post_id)
    return render_template('show_post.html', post=post)

@app.route('/posts/<post_id>/edit')
def editPost(post_id):
    post = db.session.get(Post, post_id)
    return render_template('edit_post.html', post=post)

@app.post('/posts/<post_id>/edit')
def post_edit(post_id):
    new_title = request.form.get('title').strip()
    new_content = request.form.get('content').strip()
    new_date = datetime.datetime.now()
    post = db.session.get(Post, post_id)
    post.title = new_title
    post.content = new_content
    post.created_at = new_date
    db.session.commit()
    return redirect(url_for(endpoint='showPost', post_id=post_id))

@app.route('/posts/<post_id>/delete')
def delete_post(post_id):
    post = db.session.get(Post, post_id)
    db.session.delete(post)
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