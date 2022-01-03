import csv
from gifpgn import CreateGifFromPGN
morning = '#cdc2ba'
day = '#dfb995'
night = '#2b2729'

colors = [morning,day,night]

def find_pgn(c):
  with open('open-clean.csv', 'r') as read:
    reader = csv.reader(read)
    for row in reader:
        print(row)
        notes = row[3]
        ECO = row[1]
        print(notes)
        gif = CreateGifFromPGN(notes)
        gif.bs_color = (c)
        gif.ws_color = ('#F8F8FF')
        #gif.enable_evaluation()
        path = 'gifs/opening'+ECO+str(l)+'.gif'
        gif.generate(path)
  read.close()

l = 0
for time in colors:
    l += 1
    find_pgn(time)
    
    


