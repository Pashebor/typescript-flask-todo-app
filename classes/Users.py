from server import db


class Users(db.Model):
    __tablename__ = 'users'

    id = db.Column('id', db.Integer, primary_key=True)
    first_name = db.Column('first_name', db.String)
    last_name = db.Column('last_name', db.String)

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name


def addUser(user):
    db.session.add(user)
    db.session.commit()

