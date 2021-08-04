import cv2
import numpy as np

dog = cv2.imread('./images/dog.jpeg')
new = cv2.rotate(dog, cv2.ROTATE_90_CLOCKWISE)
cv2.imshow('dog', dog)
cv2.imshow('new', new)

cv2.waitKey(0)