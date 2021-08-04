import cv2   
import numpy as np

dog = cv2.imread('./images/dog.jpeg')
logo = np.zeros((200, 200, 3), np.uint8)
mask = np.zeros((200, 200), np.uint8)

logo[20:120, 20:120] = [0, 0, 255]
logo[80:180, 80:180] = [0, 255, 0]

mask[20:120, 20:120] = 255
mask[80:180, 80:180] = 255

m = cv2.bitwise_not(mask)
roi = dog[0:200, 0:200]

temp = cv2.bitwise_and(roi, roi, mask = m)
dst = cv2.add(temp, logo)
# cv2.imshow('temp', temp)
# cv2.imshow('m', m)
# cv2.imshow('mask', mask)
# cv2.imshow('logo', logo)
# cv2.imshow('dst', dst)
dog[0:200, 0:200] = dst
cv2.imshow('dog', dog)
cv2.waitKey(0)