import random 
password=''
total=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","&","-","_",
"1","2","3","4","5","6","7","8","9","0"]
abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
lit=[1,2]
count=0

# Goals of this Project
# 1. generate new passwords of custom lengths
# 2. create a seed system so they are never actually saved

size=int(input("How many characters would you like your password?"))

for i in range(size):
    count+=1
    x=random.choice(total)
    if count==1:
        x=random.choice(abc)
    if x.isalpha():
        x2=random.choice(lit)
        if x2==1:
            password=password + x
        if x2==2:
            x=x.upper()
            password=password+x
    else:
        password=password+x

print(password)