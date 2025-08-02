from datetime import datetime
import csv

def log_download(ip):
    with open("download_log.csv", mode="a", newline='') as file:
        writer = csv.writer(file)
        writer.writerow([datetime.now(), ip])
