
while True:
    operator = input("Enter an operator(+ - * /) : ")
    num1 = float(input("Enter a 1st number: "))
    num2 =float(input('Enter a 2nd number: '))


    def sum():
        result = num1 + num2
        print(f"{num1}+{num2}= {result}")


    def subtraction():
        result = num1 - num2
        print(f"{num1}-{num2}= {result}")


    def multiplication():
        result = num1 * num2
        print(f"{num1}*{num2}= {result}")


    def deviation():
        result = num1 / num2
        print(f"{num1}/{num2}={result}")

    if operator == "+":
        sum()
    elif operator =="-":
        subtraction()
    elif operator =="*":
        multiplication()
    elif operator =="/":
        deviation()
    else:
        print(f"{operator} is invalid")













