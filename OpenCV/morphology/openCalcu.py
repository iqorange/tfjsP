import cv2 
import numpy as np 
img = cv2.imread('./images/dotj.png')

kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (7, 7))
dst = cv2.morphologyEx(img, cv2.MORPH_OPEN, kernel)

cv2.imshow('dst', dst)
cv2.waitKey(0)