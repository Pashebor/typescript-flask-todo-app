from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from json import j

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:ltvmzyjd@localhost/house_electric'
db = SQLAlchemy(app)


class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column('id', db.Integer, primary_key=True)
    first_name = db.Column('first_name', db.String)
    last_name = db.Column('last_name', db.String)
    date_created = db.Column('date_created', db.DateTime)
    is_admin = db.Column('is_admin', db.Boolean)
    num_points = db.Column('num_points', db.Integer)

    def __init__(self, first_name, last_name, date_created, is_admin, num_points):
        self.first_name = first_name
        self.last_name = last_name
        self.date_created = date_created
        self.is_admin = is_admin
        self.num_points = num_points


@app.route('/', methods=['GET'])
def hi():
    users = Users.query.all()
    rows = []
    for user in users:
        rows.append(user)

        print(rows[0])
    return render_template('hi.html')


@app.route('/test')
def test():
    return render_template('test.html')


@app.route('/register')
def register_page():
    return 0


if __name__ == '__main__':
    app.run()
