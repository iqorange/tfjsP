import cv2 
import numpy as np 
img = cv2.imread('./images/dotinj.png')

kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (9, 9))
dst = cv2.morphologyEx(img, cv2.MORPH_CLOSE, kernel)

cv2.imshow('dst', dst)
cv2.waitKey(0)