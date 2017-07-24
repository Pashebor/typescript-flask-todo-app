from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:ltvmzyjd@localhost/test'
db = SQLAlchemy(app)


class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column('id', db.Integer, primary_key=True)
    first_name = db.Column('first_name', db.Unicode)
    last_name = db.Column('last_name', db.Unicode)


@app.route('/')
def hi():
    users = Users.query.all()
    row = []
    for user in users:
        row.append(user.first_name)

    print (row[0])
    return render_template('hi.html')


@app.route('/test')
def test():
    return render_template('test.html')

if __name__ == '__main__':
    app.run()
