import cv2
import numpy as np 

img = cv2.imread('./images/contours1.jpeg')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
ret, binary = cv2.threshold(gray, 150, 255, cv2.THRESH_BINARY)
contours, hierarchy = cv2.findContours(binary, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
cv2.drawContours(img, contours, -1, (255, 138, 83), 1)

area = cv2.contourArea(contours[1])
print("area=%d"%(area))
len = cv2.arcLength(contours[1], True)
print("len=%d"%(len))

# cv2.imshow('img', img)
# cv2.waitKey(0)
