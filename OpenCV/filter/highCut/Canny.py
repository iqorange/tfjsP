import cv2
import numpy as np

img = cv2.imread('./images/lena.png')
dst = cv2.Canny(img, 150, 220)

cv2.imshow('dst', dst)
cv2.waitKey(0)