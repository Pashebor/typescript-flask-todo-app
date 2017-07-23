import mysql.connector


def connection():
    conn = mysql.connector.connect(host='localhost', user='root', password='ltvmzyjd',
                                   database='house_electric')
    conn.close()
