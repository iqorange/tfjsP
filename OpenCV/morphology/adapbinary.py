import cv2
import numpy as np 

img = cv2.imread('./images/math.png')
img1 = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
dstt = cv2.adaptiveThreshold(img1, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 3, 0)
dst = cv2.medianBlur(dstt, 5)
cv2.imshow('dst', dst)

cv2.waitKey(0)