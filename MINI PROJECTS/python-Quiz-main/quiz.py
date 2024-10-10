print("Welcome To Quiz")
user_input = input("You want to Cotinue or Quite Press(c/q) \n").lower()
if user_input != "c":
    quit()

print("Game is Starting")
score = 0
answer = input("What is the full form upsc \n")
if answer.lower() == "union of public service commission":
    print('You are correct')
    score += 1
else:
    print("you lost")


answer = input("what is full from html \n")
if answer.lower() == "hypertext markup language":
    print('You are Correct')
    score += 1
else:
    print("you lost")


answer = input("which is capital city of india \n")
if answer.lower() == "new delhi":
    print('You are Correct')
    score += 1
else:
    print("you lost")


answer = input("what is full from of css \n")
if answer.lower() == "cascading style sheets":
    print('You are Correct')
    score += 1
else:
    print("you lost")

print("Your score " + str(score) + "questions correct!")
print("You got " + str((score / 4) * 100) + "%.")
print("Thanks For Playing........")


