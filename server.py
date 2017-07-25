from flask import Flask, render_template, send_from_directory
from flask_sqlalchemy import SQLAlchemy
# ad
app = Flask(__name__, static_folder='dist')
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://adminehnDfyk:tX911lSkRCAU@127.13.8.2:3306/myflaskapp2'
db = SQLAlchemy(app)


# 127.13.8.2:3306
# log: adminehnDfyk
# pass: tX911lSkRCAU
# db: myflaskapp2
class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column('id', db.Integer, primary_key=True)
    first_name = db.Column('first_name', db.Unicode)
    last_name = db.Column('last_name', db.Unicode)


@app.route('/', defaults={'uri': ''})
@app.route('/<path:uri>')
def catch_all_uri(uri):
    if uri == 'register':
        return render_template('todo.html')
    elif uri == 'login':
        return render_template('todo.html')


# @app.route('/<path:filename>')
# def serve_static(filename):
#     return send_from_directory('static', filename, as_attachment=True)


@app.route('/')
def start():
    return render_template('todo.html')


@app.route('/test')
def test():
    return render_template('test.html')


if __name__ == '__main__':
    app.run(debug=True)
