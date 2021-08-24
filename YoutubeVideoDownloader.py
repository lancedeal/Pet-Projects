from pytube import YouTube

while True:
    videoType=input("Do you want to save the video as both audio and video (1), just video (2), or just audio (3)? ")
    if videoType == "1" or videoType == "2" or videoType == "3":
        break
    else:
        print("Please enter 1, 2, or 3.\n")
        
videoUrl=input("Video Url: ")
videoName=input("Save video as: ")
videoPath=input("Save to : ")
yt=YouTube(videoUrl)
if videoType=="3":
    stream=yt.streams.filter(only_audio=True) 
elif videoType=="2":
    stream=yt.streams.filter(only_video=True)
elif videoType=="1":
    stream=yt.streams.filter()
stream.first().download(videoPath,videoName)