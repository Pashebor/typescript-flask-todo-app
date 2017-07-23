import mysql.connector

def connection():
    conn = mysql.connector.connect(host='127.13.8.2:3306', user='adminehnDfyk', password='tX911lSkRCAU', database='myflaskapp2')
    c = conn.cursor()
    return c, conn
