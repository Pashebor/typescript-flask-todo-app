from flask import Flask, render_template, jsonify, json
from flask_sqlalchemy import SQLAlchemy
from classes.serializer import AlchemyEncoder

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:ltvmzyjd@localhost/test'
db = SQLAlchemy(app)


# 127.13.8.2:3306
# log: adminehnDfyk
# pass: tX911lSkRCAU
# db: myflaskapp2





class Users(db.Model):
    __tablename__ = 'users'

    id = db.Column('id', db.Integer, primary_key=True)
    first_name = db.Column('first_name', db.VARCHAR(30))
    last_name = db.Column('last_name', db.VARCHAR(30))

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name


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


@app.route('/test')
def test():
    return render_template('test.html')


if __name__ == '__main__':
    app.run(debug=True)
