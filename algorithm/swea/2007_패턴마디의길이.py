T = int(input())
for tc in range(1, T+1):
    # 입력 패턴
    string = input()
    # 마디 찾을 저장소
    temp = ''
    for i in range(30):
        # 패턴에서 문자 하나씩 추가
        temp += string[i]
        # 마디의 길이
        l = len(temp)
        # 패턴의 0번에서 i번까지의 문자열과 패턴의 i번에서 저장소 길이만큼의 문자열 비교
        # 같으면 마디 찾음
        if temp == string[i+1:i+l+1]:
            break
    print(f'#{tc} {l}')

'''
3
KOREAKOREAKOREAKOREAKOREAKOREA
SAMSUNGSAMSUNGSAMSUNGSAMSUNGSA
GALAXYGALAXYGALAXYGALAXYGALAXY

'''