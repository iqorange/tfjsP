import cv2
import numpy as np

img = np.zeros((480, 640, 3), np.uint8)

b, g, r = cv2.split(img)

g[10:100, 10:100] = 136
r[10:100, 10:100] = 83
b[10:100, 10:100] = 255

img2 = cv2.merge((b, g, r))

cv2.imshow('img2', img2)

cv2.waitKey(0)