# coding=utf-8
# requests  python的第三方库,需安装
import requests as rq
import re
import json
import sys
reload(sys)
sys.setdefaultencoding( "utf-8" )

print('start getting 1-10 page data,wait...............')
i = 0
rateContents = []
while(i<2):
	print('.................the   ' + bytes(i) + '   page starting...............')
	url= 'https://rate.tmall.com/list_detail_rate.htm?itemId=44236805503&spuId=323487692&sellerId=631228908&order=3&currentPage=' + bytes(i)
	result = rq.get(url)
	rateListStr = re.findall('\"rateList\":(.*)\,\"searchinfo\"',result.text)[0]
	rateList = json.loads(rateListStr,encoding='utf-8')
	print('the number of rate:',len(rateList))
	for v in rateList:
		rateContents.append(v['rateContent'])
	print('.................the   ' + bytes(i) + '   page ending...............')
	i+=1	
print('finish get data!')
contents = '\n'.join(rateContents)
print(contents)
target_file = open('D:/python/rate.txt', 'w')
try:
	target_file.write(contents)
finally:	
	target_file.close()

