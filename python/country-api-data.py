import urllib.request
import json


def getCountries(s, p):
    url = 'https://jsonmock.hackerrank.com/api/countries/search?name=' + s
    conn = urllib.request.urlopen(url)
    j = json.loads(conn.read().decode("utf-8"))
    page = j['page']
    total_pages = j['total_pages']

    r = [x['name'] for x in j['data'] if x['population'] > p]
    print(r)

    while page < total_pages:
        page += 1
        conn = urllib.request.urlopen(url + '&page=' + page)
        j = json.loads(conn.read().decode("utf-8"))
        r.extend([x['name'] for x in j['data'] if x['population'] > p])
    return r


getCountries(s='un', p=1)
