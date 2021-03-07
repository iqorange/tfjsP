import requests
import json

from lxml import etree
url="https://s.weibo.com/top/summary?Refer=top_hot&topnav=1&wvr=6"
header={'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36'}

def main():
    html=etree.HTML(requests.get(url,headers=header).text)
    rank=html.xpath('//td[@class="td-01 ranktop"]/text()')
    affair=html.xpath('//td[@class="td-02"]/a/text()')
    view = html.xpath('//td[@class="td-02"]/span/text()')
    # top=affair[0]
    # affair=affair[1:11]
    # print('{0:<10}\t{1:<40}'.format("top",top))
    # for i in range(0, len(affair)):
    #     print("{0:<10}\t{1:{3}<30}\t{2:{3}>20}".format(rank[i],affair[i],view[i],chr(12288)))
    filename = 'hots.json'
    with open(filename, 'w', encoding='utf-8') as file_obj:
        json.dump(affair, file_obj, ensure_ascii=False)

if __name__ == "__main__":
    main()