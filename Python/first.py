from math import sqrt
print(sqrt(24))


name ="Bhushan"
age= 24

is_adult =True
print(name)
print(is_adult)

print(name.upper())
print(name.find('n'))
print(name.replace("Bhushan","Nishtha"))
print("h"in name)

print(5/2)
print(5//2)
print(5**2) #5 to the power 2

print(not 2>3 or 2<3)
print(2<3 and 3>2)

#name =input("Your name? :")
#print(name + "  Des hpande")

#old_age = input("enter your old age: ")
#new_age = int(old_age) + 2
#print(new_age)

age = 2

if age >= 18:
    print("you are an adult")
    print("you can vote")

elif age< 18 and age>3:
    print("You are in school")

else:
    print("you are a child")

#Calculator
"""
first =input("enter first number: ")
operator = input("enter operators: ")
second = input("enter second number: ")

first =int(first)
second =int(second)

if operator == "+":
    print(first + second)

elif operator == "-":
    print(first - second)

elif operator == "*":
    print(first * second)

elif operator == "/":
    print(first / second)

else:
    print("invalid operation")

"""

numbers =range(5)
print(numbers)


i=5

while i >= 0:
   print(i * "*")
   i=i - 1

for item in range(5):
    print(item)

marks = [89,98,99,"maths"]
print(marks)
print(marks[-2])
print(marks[0:2])

for score in marks:
    print(score)

tmp =input()
marks.append(tmp)
print(marks)

marks.append(93)
print(marks)

marks.insert(1,88)
print(marks)

print(93 in marks)

print(len(marks))

i=0
while i < len(marks):
    print(marks[i])
    i= i + 1

marks.clear()

print(marks)

players = ["Rohit", "Kishan", "Gill", "Virat", "Jadeja"]

for player in players:
    if player == "Kishan":
        continue
    print(player)

#tuple: can't be changed

marks= (87, 89, 90, 89, 87)
print("count of marks : " + str(marks.count(89)))
print(marks.index(87))

# []--->list
# ()--->tuple  though () are not compulsory
# {}--->set    indexes doesn't exist

marks = {78, 98, 97, 78, 89, 97}
print(marks)

# Dictionary ::: key and value

marks ={"english" : 98, "maths" : 99}
print(marks["maths"])
marks["physics"] = 97
print(marks)

marks["maths"] = 100
print(marks)


#Functions

def add(number1, number2 = 8):
    print(number1 + number2)

add(4)

