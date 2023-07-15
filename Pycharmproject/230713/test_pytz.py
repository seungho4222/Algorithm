from datetime import datetime
from pytz import common_timezones, timezone, utc

# 타임존 정보 출력
for tz in list(common_timezones):
    if tz.lower().find("paris") >= 0:
        print(tz)

tz_utc = timezone(utc.zone)
tz_seoul = timezone("Asia/Seoul")
tz_pacific = timezone("US/Pacific")
tz_paris = timezone("Europe/Paris")
fmt = "%Y-%m-%d %H:%M:%S %Z%z"

# UTC 현재 시각
now_utc = datetime.now(tz_utc)
print(now_utc.strftime(fmt))

# Asia/Seoul 타임존
now_seoul = now_utc.astimezone(tz_seoul)
print(now_seoul.strftime(fmt))

# US/Pacific 타임존
now_pacific = now_seoul.astimezone(tz_pacific)
print(now_pacific.strftime(fmt))

# Europe/Paris 타임존
now_paris = now_pacific.astimezone(tz_paris)
print(now_paris.strftime(fmt))
