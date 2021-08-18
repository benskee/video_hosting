import os
import json

test = open("./src/code_files/time_stamp_0/Header.js", "r")
tab_dict = {}

stamps = os.listdir('src/code_files/')

for s in stamps:
    for (root, dirnames, filenames) in os.walk(f'src/code_files/{s}/'):
        for file in filenames:
            name = file.split('.')[0]
            ts = int(s[11:])*3
            try:
                tab_dict[name]
            except:
                tab_dict[name] = {
                    "title": file,
                    "start": ts
                }
            f = open(f'src/code_files/{s}/{file}', "r")
            tab_dict[name][ts] = f.read()


with open('./src/tab_dict.json', 'w', encoding='utf-8') as f:
    json.dump(tab_dict, f, ensure_ascii=False, indent=4)
