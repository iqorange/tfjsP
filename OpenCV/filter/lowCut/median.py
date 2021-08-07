import cv2 
import numpy as np 

img = cv2.imread('./images/papper.png')

dst = cv2.medianBlur(img, 5)

cv2.imshow('dst', dst)  
cv2.waitKey(0)