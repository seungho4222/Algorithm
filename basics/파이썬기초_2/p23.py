url = input() # http://www.example.com/test?p=1&q=2

www = url.find("www")
com = url.find("com")

print(f'protocol: {url[:4]}')
print(f'host: {url[www:com+3]}')
print(f'others: {url[com+4:]}')