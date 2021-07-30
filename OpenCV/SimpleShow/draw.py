import cv2
import numpy as np 

img = np.zeros((480, 640, 3), np.uint8)
# cv2.line(img, (10, 20), (300, 400), (255, 136, 83), 5, 16)
# cv2.rectangle(img, (10, 10), (100, 100), (255, 136, 83), -1)
cv2.circle(img, (320, 240), 100, (255, 136, 83))
cv2.circle(img, (320, 240), 5, (255, 136, 83), -1, 16)
cv2.ellipse(img, (320, 240), (100, 50), 15, 0, 360, (255, 136, 83))
pts = np.array([(300, 10), (150, 100), (450, 100)], np.int32)
cv2.polylines(img, [pts], True, (255, 136, 83))
cv2.fillPoly(img, [pts], (255, 136, 83))
cv2.putText(img, "Hello OpenCV~", (10, 400), cv2.FONT_HERSHEY_PLAIN, 3, (255, 136, 83))

cv2.imshow('draw', img)
cv2.waitKey(0)
cv2.destroyAllWindows()
