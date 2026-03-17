
n = int(input())
for i in range(n):
    try:
        a, b = list(map(int, input().split()))
        print(a//b)
    except Exception as e:
        print("Error Code:", e)