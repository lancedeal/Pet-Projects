from time import sleep
from winsound import Beep
Hour=0
Min=0
Sec=0
print("\n")
greet=input("You will be asked to enter a timer by selecting hours, minutes, and seconds in order. Press enter to continue. ")
while Hour==0:
    h=input("Select Hours: ")
    if h==0:
        break
    if h.isdigit():
        Hour=int(h)
        print("\n")
        break
    else:
        print("Enter a number")

while Min==0:
    m=input("Select Minutes: ")
    if m==0:
        break
    if m.isdigit():
        Min=int(m)
        print("\n")
        break
    else:
        print("Enter a number")

while Sec==0:
    s=input("Select Seconds: ")
    if s==0:
        break
    if s.isdigit():
        Sec=int(s)
        print("\n")
        break
    else:
        print("Enter a number")

print(Hour,":",Min,":",Sec)
sleep(Hour*3600+Min*60+Sec)
print("Time's up\n")
Beep(1000,500)