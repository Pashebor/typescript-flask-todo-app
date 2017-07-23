import MySQLdb

def connection():
    conn = MySQLdb.connect(host='127.13.8.2:3306', user='adminehnDfyk', passwd='tX911lSkRCAU', db='myflaskapp2')
    c = conn.cursor()
    return c, conn
