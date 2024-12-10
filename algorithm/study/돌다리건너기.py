# 마법 문자열
word = list(input())
wn = len(word)
# 악마의 돌다리, 천사의 돌다리
bridge1 = list(input())
bridge2 = list(input())
bn = len(bridge1)
# 출력값 카운트
cnt = 0
# x = 마법문자열 확인용 인덱스, b1/b2 = 돌다리, k = 돌다리 문자 확인용 인덱스
def bridge_pass(x, b1, b2, k):
    global cnt
    # 마법문자열 길이만큼 확인했으면 카운트
    if x == wn:
        cnt += 1
        return
    # 돌다리 문자 확인
    for i in range(k, bn):
        # 돌다리 문자와 마법문자열 일치하면 진행
        if b1[i] == word[x]:
            # 다음 마법 문자열, 돌다리는 바꿔서
            # 돌다리 확인 문자열은 i+1번째 부터
            bridge_pass(x+1,b2,b1,i+1)

bridge_pass(0,bridge1,bridge2,0)
bridge_pass(0,bridge2,bridge1,0)

print(cnt)


'''
RGS
RINGSR
GRGGNS

'''