# 딕셔녀리 데이터 가격 내림차순 정리

dict_data = {"TV": 2000000,
            "냉장고": 1500000,
            "책상": 350000,
            "노트북": 1200000,
            "가스레인지": 200000,
            "세탁기": 1000000,}

dict_desc = sorted(dict_data.items(), key=lambda x: x[1], reverse=True)

for i, j in dict_desc:
    print(f"{i}: {j}")