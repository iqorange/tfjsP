# encoding: UTF-8
import threading
import requests
from bs4 import BeautifulSoup
import time
import json

def get_topic():
    headers = {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36',
        'Host': 's.weibo.com'
    }
    topic_list = []
    link = 'https://s.weibo.com/top/summary'
    request = requests.get(link,headers = headers,timeout = 10)
    soup = BeautifulSoup(request.text,"lxml")
    td_list = soup.find_all('td',class_ = 'td-02')
    for each in td_list:
        a_object = each.a
        topic = a_object.text.strip()
        topic_list.append([topic,"https://s.weibo.com"+a_object.get('href')])
    return topic_list

def run():
    print('run!')
    filename = 'hotLink.json'
    with open(filename, 'w', encoding='utf-8') as file_obj:
        json.dump(get_topic(), file_obj, ensure_ascii=False)
    timer = threading.Timer(13, run)
    timer.start()

if __name__ == "__main__":
    run()