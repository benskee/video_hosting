import os
import schedule
import time
import pathlib
from shutil import copy as copy


def save_files():
    pathlib.Path("./src/code_files").mkdir(exist_ok=True)
    t = (len(os.listdir("./src/code_files")))
    dir_name = f"./src/code_files/time_stamp_{t}"
    os.mkdir(dir_name)

    for (root, dirnames, filenames) in os.walk('src/components/code_tutorial'):
        for file in filenames:
            copy(f'src/components/code_tutorial/{file}', f"{dir_name}/{file}")


schedule.every(3).seconds.do(save_files)

while True:
    schedule.run_pending()
    time.sleep(1)
