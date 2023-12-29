def custom_solution(N, input_list):
    result = []
    stack = []

    for i in range(N):
        value, flag = input_list[i]

        if flag == 1:
            stack.append(value)
        elif flag == 0:

            while stack:
                top = stack.pop()
                diff = top - value
                if(top == value):
                    value = 0
                    break
                if diff > 0:
                    value = 0
                    stack.append(diff)
                    break
                else:
                    value -= top
            if(value > 0):
                result.append([value, 0])

    while stack:
        top = stack.pop()
        result.append([top, 1])

    return result


print(custom_solution(3,[[39,0],[39,1],[30,0]]))