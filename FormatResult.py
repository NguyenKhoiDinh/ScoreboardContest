import csv
import json

exerciseScore = [2, 1, 2, 1, 2, 2]
class Contestants:
    def __init__(self, name, status):
        self.name = name
        self.status = status

def convertErr(s):
    if len(s) == 4:
        return s
    for c in s:
        if c == 'D' or c == 'C':
            return '0.00'
        elif c == 'K':
            return '-1'

contestantDay1 = []
contestantDay2 = []
mark = []
contestant = []
f = open("linkUrl.txt", "r")
lines = f.readlines()
dict = {}
for line in lines:
    name, link = map(str, line.strip().split())
    dict[name] = link
with open('Result1.csv', mode='r')as file:
    # reading the CSV file
    csvFile = csv.reader(file)

    # displaying the contents of the CSV file
    for lines in csvFile:
        if lines[1] == 'WC1':
            continue
        name = lines[0]
        status = []
        for i in range(1, 4):
            status.append(convertErr(lines[i]))
        for i in range(3):
            status.append('-1')
        contestantDay1.append(Contestants(name, status))
        mark.append(True)

with open('Result2.csv', mode='r')as file:
    # reading the CSV file
    csvFile = csv.reader(file)

    # displaying the contents of the CSV file
    for lines in csvFile:
        if lines[1] == 'WC4':
            continue
        name = lines[0]
        status = ['-1', '-1', '-1']
        for i in range(len(contestantDay1)):
            player = contestantDay1[i]
            if name == player.name:
                mark[i] = False
                for j in range(3):
                    status[j] = player.status[j]
                break
        for i in range(1, 4):
            status.append(convertErr(lines[i]))
        contestantDay2.append(Contestants(name, status))
for i in range(len(contestantDay1)):
    if mark[i] == True:
        contestant.append(contestantDay1[i])
for i in range(len(contestantDay2)):
    contestant.append(contestantDay2[i])
for con in contestant:
    con.totalScore = 0
    con.grade = 11
    con.score = []
    con.award = "none"
    if not con.name in dict:
        con.linkUrl = "https://i.imgur.com/9cATnWK.png"
    else:
        con.linkUrl = dict[con.name]
    for i in range(len(exerciseScore)):
        partScore = []
        if con.status[i] == '-1':
            for j in range(exerciseScore[i]):
                partScore.append(-1)
        else:
            point = int(float(con.status[i]))
            for j in range(point):
                partScore.append(1)
            for j in range(exerciseScore[i] - point):
                partScore.append(0)
        con.score.append(partScore)
json_string = json.dumps([ob.__dict__ for ob in contestant])
print(json_string)