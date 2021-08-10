import cv2
from cv2 import dnn 
import numpy as np 

config = "./images/model/bvlc_googlenet.prototxt"
model = "./images/model/bvlc_googlenet.caffemodel"
net = dnn.readNetFromCaffe(config, model)
img = cv2.imread('./images/smallcat.jpeg')
blob = dnn.blobFromImage(img, 1.0, (224, 224), (104, 117, 123))
net.setInput(blob)
r = net.forward()
classes = []
path = './images/model/synset_words.txt'
with open(path, 'rt') as f:
    classes = [x [x.find(" ")+1:]for x in f]

order = sorted(r[0], reverse=True)
z = list(range(3))
for i in range(0, 3):
    z[i] = np.where(r[0]==order[i])[0][0]
    print('第', i+1, '项，匹配：', classes[z[i]], end='')
    print('类所在行：', z[i]+1, ' ', '可能性：', order[i])
