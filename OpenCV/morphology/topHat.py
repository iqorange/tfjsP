import cv2 
import numpy as np 
img = cv2.imread('./images/tophat.png')

kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (19, 19))
dst = cv2.morphologyEx(img, cv2.MORPH_TOPHAT, kernel)

cv2.imshow('dst', dst)
cv2.waitKey(0)