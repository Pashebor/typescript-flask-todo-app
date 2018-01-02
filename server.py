# coding=utf-8
import os
from flask import Flask, render_template, jsonify, json, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import update
from werkzeug.utils import secure_filename

from classes.serializer import AlchemyEncoder


app = Flask(__name__)
UPLOAD_FOLDER = app.root_path + '/static/uploads/'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:ltvmzyjd90@localhost/db_todo'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['ALLOWED_EXTENSIONS'] = set(['png', 'jpg', 'jpeg', 'gif'])
db = SQLAlchemy(app)


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in app.config['ALLOWED_EXTENSIONS']


# 127.13.8.2:3306
# log: adminehnDfyk
# pass: tX911lSkRCAU
# db: myflaskapp2


class Users(db.Model):
    __tablename__ = 'users'

    id = db.Column('id', db.Integer, primary_key=True)
    name = db.Column('name', db.VARCHAR(100))
    password = db.Column('password', db.VARCHAR(120))
    img = db.Column('img', db.VARCHAR(120))

    def __init__(self, name, password, image):
        self.name = name
        self.password = password
        self.img = image


class UserNotes(db.Model):
    __tablename__ = 'user_notes'

    id = db.Column('id', db.Integer, primary_key=True)
    user_name = db.Column('user_name', db.VARCHAR(100))
    title = db.Column('title', db.VARCHAR(120))
    note = db.Column('note', db.TEXT)

    def __init__(self, user_name, title, note):
        self.user_name = user_name
        self.title = title
        self.note = note


def addUser(user):
    db.session.add(user)
    db.session.commit()


def add_note(note):
    db.session.add(note)
    db.session.commit()
    return True


def update_notes(note):
    update = UserNotes.query.filter_by(id=note.id).update({'user_id': 1})


@app.route('/', defaults={'uri': ''})
@app.route('/<path:uri>')
def catch_all_uri(uri):
    if uri == 'register':
        users = Users.query.all()
        return render_template('todo.html')
    elif uri == 'login':
        return render_template('todo.html')


@app.route('/')
def start():
    return render_template('todo.html')


@app.route('/register-user', methods=['POST'])
def register_user():
    image = request.files['image']
    name = request.form.get('name')
    password = request.form.get('pass')
    image_name = secure_filename(image.filename)
    if image and allowed_file(image_name):
        user = Users(name, password, image_name)
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], image_name))
        addUser(user)
        return json.dumps({'name': name, 'password': password, 'image': image_name})
    return False


@app.route('/login-user', methods=['POST'])
def login_user(user_data=None):
    user_data
    users = Users.query.all()
    name = request.form.get('name')
    password = request.form.get('password')
    for user in users:
        if user.name == name and user.password == password:
            user_data = {'name': name, 'password': password, 'image': user.img}

    if user_data is None:
        return json.dumps({'response': 'Такого пользователя не существует'})
    else:
        return json.dumps(user_data)


@app.route('/user-notes', methods=['POST'])
def get_user_notes():
    user_notes = UserNotes.query.all()
    name = request.form.get('name')
    notes_array = []
    for note in user_notes:
        if note.user_name == name:
            notes_array.append({'id': note.id, 'title': note.title, 'note': note.note})
        else:
            return json.dumps({'response': 'nothing'})

    return json.dumps({'response': notes_array})


@app.route('/create-note', methods=['POST'])
def add_user_note():
    name = request.form.get('name')
    title = request.form.get('title')
    note = request.form.get('note')
    notes_array = []
    if add_note(UserNotes(name, title, note)) is True:
        notes = UserNotes.query.all()
        for note in notes:
            notes_array.append({'id': note.id, 'title': note.title, 'note': note.note})

        return json.dumps({'response': notes_array})
    else:
        return json.dumps({'response': 'no'})


@app.route('/edit-note', methods=['POST'])
def update_user_note():
    note = {
        'id': request.form.get('name'),
        'title': request.form.get('title'),
        'text': request.form.get('note')
    }
    return json.dumps({'response': 'yes'})


if __name__ == '__main__':
    app.run(debug=True)
