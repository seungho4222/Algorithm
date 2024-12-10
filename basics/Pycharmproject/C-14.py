def determine_winner(player1, player2):
    if player1 == player2:
        return "무승부입니다!"

    if (player1 == "가위" and player2 == "보") or (player1 == "바위" and player2 == "가위") or (player1 == "보" and player2 == "바위"):
        return player1 + "가 이겼습니다!"
    else:
        return player2 + "가 이겼습니다!"

# 사용자 이름과 가위, 바위, 보 입력 받기
player1_name = input()
player2_name = input()
player1_choice = input()
player2_choice = input()

# 승자 결정
result = determine_winner(player1_choice, player2_choice)

# 결과 출력
print(result)