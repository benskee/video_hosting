import os
import schedule
import time
from shutil import copy as copy


def save_files():
    t = (len(os.listdir("./src/code_files")))
    dir_name = f"./src/code_files/time_stamp_{t}"
    os.mkdir(dir_name)

    for (root, dirnames, filenames) in os.walk('src/components'):
        for file in filenames:
            copy(f'src/components/{file}', f"{dir_name}/{file}")


schedule.every(3).seconds.do(save_files)

while True:
    schedule.run_pending()
    time.sleep(1)