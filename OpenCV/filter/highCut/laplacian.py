import cv2 
import numpy as np

img = cv2.imread('./images/chess.png')
# 拉普拉斯需要提前低通降噪
dst = cv2.Laplacian(img, cv2.cv2.CV_64F, ksize=5)
cv2.imshow('dst', dst)
cv2.waitKey(0)