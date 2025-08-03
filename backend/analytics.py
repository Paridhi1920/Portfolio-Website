from datetime import datetime
import csv

def log_download(ip, user_agent):
    with open("download_log.csv", mode="a", newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow([datetime.now(), ip, user_agent])
