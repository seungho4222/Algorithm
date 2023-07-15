from datetime import datetime, timezone, timedelta

now = datetime.now()

print(now)

print("{0}-{1:02}-{2:02} {3:02}:{4:02}:{5:02}".format(now.year, now.month, now.day, now.hour, now.minute, now.second))

fmt = "%Y{0} %m{1} %d{2} %H{3} %M{4} %S{5}"
print(now.strftime(fmt).format(*"년월일시분초"))
