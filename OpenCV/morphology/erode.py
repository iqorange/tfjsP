import cv2 
import numpy as np 
img = cv2.imread('./images/j.png')

# kernel = np.ones((3, 3), np.uint8)
kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
dst = cv2.erode(img, kernel, iterations=1)

cv2.imshow('dst', dst)
cv2.waitKey(0)