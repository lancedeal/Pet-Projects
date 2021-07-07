str=input("What is the word? ")
print("\n"*10)
dlocate={}
pos=1
unknown="_"*len(str)
mistakes=0
failed=[]
win=True

def the_man(mistakes):
    stages=[
            """
        ------
        |    |
        |    
        |   
        |   
        |
     -------    
    """
    ,
            """
        ------
        |    |
        |    O
        |   
        |   
        |
     -------    
    """
    ,
            """
        ------
        |    |
        |    O
        |    |
        |   
        |
     -------    
    """
    ,
            """
        ------
        |    |
        |    O
        |   /|
        |    
        |
     -------    
    """
    ,
            """
        ------
        |    |
        |    O
        |   /|
        |   / 
        |
     -------    
    """
    ,
            """
        ------
        |    |
        |    O
        |   /|\\
        |   / 
        |
     -------    
    """
    ,
        """
        ------
        |    |
        |    O
        |   /|\\
        |   / \\
        |
     -------    
    """
    ,
    ]
    print(stages[mistakes])
    


for dm in str:
    dlocate[pos]=dlocate.get(pos,dm)    # this creates a dictionary with numbers in key to hold the location of letters
    pos+=1

while "_" in unknown and mistakes<6:
    guess=input("guess your letter: ")
    if guess in str and guess not in unknown:
        for i in unknown:
            if i != "_":
                continue
            if i == "_":
                for looper in str:
                    if looper != guess and looper not in unknown:
                        unknown=unknown.replace(i,"-",1)
                    if looper == guess:
                        unknown=unknown.replace(i,guess,1)
                    
        for x in unknown:
            if x != "-":
                continue
            if x == "-":
                unknown=unknown.replace("-","_")
        print(unknown)
    if guess not in str:
        if guess not in failed:
            mistakes +=1
            failed.append(guess)
        else:
            print("You already guessed ",guess)
        if mistakes<6:
            the_man(mistakes)
            print("Guessed Letters: ",failed,"     Tries: ",(6-mistakes))
            print(unknown)
        if mistakes==6:
            win=False
if win==False:
    the_man(6)
    print("\nGAME OVER")
if win==True:
    print("\nYou Win!")

    