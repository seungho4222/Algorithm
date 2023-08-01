# flatten
import sys

sys.stdin = open('input.txt', 'r')

# flatten

T = 10
for tc in range(1,T+1):
    dump = int(input())
    box_heights = list(map(int, input().split()))

    max_height = 1
    min_height = 100
    for width in range(100):
        for height in box_heights: # 박스 높이

            if max_height < height:
                max_height = height
        
            if min_height > height:
                min_height = height
            
    
        while dump == 0 or max_height == min_height :
            max_height -= 1
            min_height += 1
            dump -= 1

    print(f'#{tc} {max_height - min_height}') 
    
for i in range(10):
    T = int(input())
    box_list = list(map(int, input().split()))
    box_list.sort()
    for j in range(T):
        box_list[-1] -= 1
        box_list[0] += 1
        box_list.sort()
    print(f"#{i+1} {box_list[-1]-box_list[0]}")