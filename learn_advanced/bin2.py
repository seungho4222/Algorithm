import sys

sys.stdin = open('input.txt', 'r')


T = int(input())
for tc in range(1, T+1):
    N = float(input())
    # 2진법 변경 저장
    trans_bin = ''
    # 자릿수마다 카운트
    count = 0
    # 12자리까지
    while len(trans_bin) <= 12:
        # 2로 곱해주기 !!
        N *= 2
        # 소수점으로 스플릿 (ex: N = 1.2 => ['1', '2'])
        s = str(N).split('.')
        # 앞자리 저장
        trans_bin += s[0]
        # 자릿수 카운트
        count += 1
        # 뒷자리 0이면 2진변 변경 완료
        if s[1] == '0':
            break
        # 소수 만들어주고 순회
        N = float('0.' + s[1])

    if count > 12:
        print(f'#{tc} overflow')
    else:
        print(f'#{tc}', trans_bin) 


# # 10 정수 n을 2진수로 변환
# def dec2bin_int(n: int) -> str:
#     bin = ""
#     while n > 0:
#         bin = str(n % 2) + bin
#         n //= 2

#     return bin


# # 1보다 작은 10진 소수를 2진수 변환
# def dec2bin_float(f: float) -> str:
#     bin = ""
#     # 소수점 이하 최대 12자리 까지만 계산
#     while len(bin) <= 12:
#         f *= 2
#         s = str(f).split(".")
#         bin += s[0]

#         if s[1] == "0":
#             return bin

#         f = float("0." + s[1])

#     return bin


# # dec2bin_int() + dec2bin_float(n) 를 이용하여 10진수 실수 n을 2진수로 변환
# def dec2bin(num: float) -> str:
#     digits = str(num).split(".")
#     n = int(digits[0])
#     f = float("0." + str(digits[1]))

#     return dec2bin_int(n) + "." + dec2bin_float(f)


# print(dec2bin(4.625))
# print(dec2bin(15.125))
# print(dec2bin(3.1))