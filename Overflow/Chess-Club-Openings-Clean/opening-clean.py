import csv
opens = []
oid = 1
lineclean = []
linenames = []
dump = []
runs = 0

with open('openings.csv', 'r') as read:
    reader = csv.reader(read)
    for row in reader:
      if len(row) == 3:
          row.insert(0, oid)
          opens.append(row)
          oid += 1
read.close()

with open('open-clean.csv', 'w', newline='') as write:
    writer = csv.writer(write)
    for r in opens:
      writer.writerow(r)
write.close()

for line in opens:
  runs += 1
  if runs == 1:
    linenames.append(line)
  else:
    l = linenames[-1]
    if (not(line[2] == l[2])):
      linenames.append(line)  

print(linenames)   

with open('open-names.csv', 'w', newline='') as write:
    writer = csv.writer(write)
    for r in linenames:
      row = [r[0],r[2]]
      writer.writerow(row)
write.close()
 
with open('open-eco.csv', 'w', newline='') as write:
    writer = csv.writer(write)
    for r in opens:
      row = [r[0],r[1]]
      writer.writerow(row)
write.close()

print("done")