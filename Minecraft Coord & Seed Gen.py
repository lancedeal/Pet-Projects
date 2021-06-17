from tkinter import *
from random import *

root=Tk()

root.title("MC Coord & Seed Generator")

MCseed=''
max=5000

def findSeed():
    e.delete(0,END)
    global MCseed
    MCseed=''
    seedrange=randrange(6,16)
    for i in range(seedrange):
        MCseed=MCseed+str(randrange(seedrange))
    e.delete(0,END)
    e.insert(0,MCseed)

def clear():
    e.delete(0,END)

def findCoords():
    global max
    e.delete(0,END)
    max=int(max)
    x=randrange(-max,max)
    z=randrange(-max,max)
    e.insert(0,"X Coordinates: "+str(x)+"   Z Coordinates: "+str(z))

def setMaxRange():
    global max
    max=r.get()
    r.delete(0,END)

#top entry
e=Entry(root,width=60,borderwidth=8)
e.grid(row=0,column=0,columnspan=2,padx=5,pady=5)

#range
r=Entry(root,width=12,borderwidth=8)
r.grid(row=2,column=0)

seedbutton=Button(root,text="Random Seed",command=findSeed,bg="#fff683")
coordbutton=Button(root,text="Random Coordinates",command=findCoords,bg="#fff683")
clearbutton=Button(root,text="Clear",command=clear,bg="#fff683")
maxrangeB=Button(root,text="Set Max Range",command=setMaxRange,bg="#fff683")
#fseedbutton=Button(root,text="Favorite Seed",command=favSeed)
#fcoordbutton=Button(root,text="Favorite Coordinates",command=favCoords)
seedbutton.grid(row=1,column=1,padx=30,pady=8)
coordbutton.grid(row=1,column=0,padx=30,pady=8)
maxrangeB.grid(row=3,column=0,padx=30,pady=8)
clearbutton.grid(row=3,column=1,columnspan=2,padx=30,pady=8)
#fseedbutton.grid(row=3,column=0,padx=30,pady=10)
#fcoordbutton.grid(row=3,column=1,padx=30,pady=10)

root.mainloop()