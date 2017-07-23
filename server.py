from flask import Flask, render_template
from db_connect import connection

app = Flask(__name__)


@app.route('/')
def hi():
    return render_template('hi.html')


@app.route('/test')
def test():
    return render_template('test.html')


@app.route('/register')
def register_page():
    if connection() is not True:
        return 'ok'
    else:
        return 'not ok'


if __name__ == '__main__':
    app.run()
