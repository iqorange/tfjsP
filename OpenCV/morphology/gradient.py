import cv2 
import numpy as np 
img = cv2.imread('./images/j.png')

kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3, 3))
dst = cv2.morphologyEx(img, cv2.MORPH_GRADIENT, kernel)

cv2.imshow('dst', dst)
cv2.waitKey(0)