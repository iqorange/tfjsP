import cv2   
import numpy as np 

back = cv2.imread('./images/back.jpeg')
smallCat = cv2.imread('./images/smallcat1.jpeg')

result = cv2.addWeighted(smallCat, 0.7, back, 0.3, 0)
cv2.imshow('add2', result)
cv2.waitKey(0)
