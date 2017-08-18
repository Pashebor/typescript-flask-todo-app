from server import db


class Queries:
    def __init__(self, db_object):
        self.object_db = db_object

    def add(self):
        db.session.add(self.object_db)
        db.session.commit()
