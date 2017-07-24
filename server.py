from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://adminehnDfyk:tX911lSkRCAU@127.13.8.2/myflaskapp2'
db = SQLAlchemy(app)


# 127.13.8.2:3306
# log: adminehnDfyk
# pass: tX911lSkRCAU
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
