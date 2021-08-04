import cv2 
import numpy as np

dog = cv2.imread('./images/dog.jpeg')
new = cv2.resize(dog, None, fx=0.3, fy=0.3, interpolation=cv2.INTER_AREA)

cv2.imshow('dog', dog)
cv2.imshow('new', new)

cv2.waitKey(0)