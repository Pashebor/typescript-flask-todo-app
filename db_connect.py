import MySQLdb


def connection():
    conn = MySQLdb.connect(host='localhost', user='adminehnDfyk', passwd='tX911lSkRCAU', db='myflaskapp2')
    c = conn.cursor()
    return c, conn
