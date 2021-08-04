import cv2
import numpy as np 

dog = cv2.imread('./images/dog.jpeg')
# print(dog.shape)
img = np.ones(dog.shape, np.uint8) * 61
result = cv2.add(dog, img)
cv2.imshow('orig', dog)
cv2.imshow('result', result)
orig_1 = cv2.subtract(result, img)
cv2.imshow('orig_1', orig_1)
cv2.waitKey(0)
cv2.destroyAllWindows()
