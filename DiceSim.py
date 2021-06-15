from random import randrange 
import time

player_name=input("What is your name?")
print("Hello ",player_name,". Type 'roll' to cast your die.")
def roll():
    die=randrange(6)
    print("Rolling!")
    time.sleep(2)
    print(die)

while True:
    start=input("Ready. ")
    if start == "roll":
        roll()
    if start == "cancel":
        break
    if start != "roll" or start!="cancel":
        print('Enter "roll" to start or "cancel" to end game.')