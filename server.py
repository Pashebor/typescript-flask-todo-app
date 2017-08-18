import os
from collections import namedtuple

from flask import Flask, render_template, jsonify, json, request
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename

from classes.serializer import AlchemyEncoder

UPLOAD_FOLDER = 'static/uploads/'

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:ltvmzyjd@localhost/todoapp'
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


def addUser(user):
    db.session.add(user)
    db.session.commit()


@app.route('/', defaults={'uri': ''})
@app.route('/<path:uri>')
def catch_all_uri(uri):
    if uri == 'register':
        users = Users.query.all()
        print (json.dumps({'users': users}, cls=AlchemyEncoder))
        return render_template('todo.html')
    elif uri == 'login':
        return render_template('todo.html')


@app.route('/')
def start():
    return render_template('todo.html')


@app.route('/register-user', methods=['POST'])
def register_user():
    file = request.files['image']
    name = request.form.get('name')
    password = request.form.get('pass')
    filename = secure_filename(file.filename)
    if file and allowed_file(filename):
        user = Users(name, password, filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        addUser(user)
        return json.dumps({'name': name, 'password': password, 'image': 'static/uploads/' + filename})
    return False


@app.route('/login-user', methods=['POST'])
def login_user():
    users = Users.query.all()
    data = json.loads(request.data, object_hook=lambda d: namedtuple('X', d.keys())(*d.values()))
    for user in users:
        if user.first_name == data.name and user.last_name == data.password:
            print (data.name, data.password)
        else:
            print 'null'

    return request.data


if __name__ == '__main__':
    app.run(debug=True)
