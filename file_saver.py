import os
import schedule
import time
from shutil import copy as copy


def save_files():
    t = (len(os.listdir("src/codeFiles/")))
    dir_name = f"src/codeFiles/time_stamp_{t}"
    os.mkdir(dir_name)
    # (root, dirnames, filenames) = next(os.walk('src/codeFiles/stamp3/'))
    # print(filenames)
    # for file in os.listdir("src/codeFiles/stamp3/"):
    # for file in filenames:
    #     copy(f"src/codeFiles/stamp3/{file}", f"{dir_name}/{file}")
    for (root, dirnames, filenames) in os.walk('src/codeFiles/time_stamp_{t}/'):
        for file in filenames:
            copy(f"src/codeFiles/time_stamp_{t}/{file}", f"{dir_name}/{file}")


schedule.every(3).seconds.do(save_files)

while True:
    schedule.run_pending()
    time.sleep(1)
