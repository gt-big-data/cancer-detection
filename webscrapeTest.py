from bs4 import BeautifulSoup as bs
import requests

print("What kind of cancer is it")
typeOfCancer = input()

link1 = "http://www.google.com/search?q=" + typeOfCancer

infoLink = link1.replace(" ", "+")

link2 = "http://www.google.com/search?q=next steps for doctor after " + typeOfCancer + " detection"

stepsLink = link2.replace(" ", "+")

infoResponse = requests.get(infoLink)
infoHtml = infoResponse.content
infoSoup = bs(infoHtml, 'lxml')

stepsResponse = requests.get(stepsLink)
stepsHtml = stepsResponse.content
stepsSoup = bs(stepsHtml, 'lxml')


infoLinks = []

stepsLinks = []


for a in infoSoup.findAll("a"):
    genLink = str(a['href'])
    if (genLink.find("html") != -1):
        infoLinks.append(genLink)

print("Here is some general info:")

for link in infoLinks:
    print(link)
    print("=-=-=-=-=-=-=")

for a in stepsSoup.findAll("a"):
    genLink = str(a['href'])
    if (genLink.find("html") != -1):
        stepsLinks.append(genLink)

print("Here are the next steps:")

for link in stepsLinks:
    print(link)
    print("=-=-=-=-=-=-=")




