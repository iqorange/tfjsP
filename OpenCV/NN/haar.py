import cv2 
import numpy as np 

facer = cv2.CascadeClassifier('./images/haarcascades/haarcascade_frontalface_default.xml')
eye = cv2.CascadeClassifier('./images/haarcascades/haarcascade_eye.xml')
img = cv2.imread('./images/p3.png')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

faces = facer.detectMultiScale(gray, 1.1, 5)
for (x, y, w, h) in faces:
    cv2.rectangle(img, (x, y), (x+w, y+h), (0, 0, 255), 2)
    roi_img = img[y:y+h, x:x+w]
    eyes = eye.detectMultiScale(roi_img, 1.1, 3)
    for (x, y, w, h) in eyes:
        cv2.rectangle(roi_img, (x, y), (x+w, y+h), (0, 255, 0), 2)

cv2.imshow('img', img)
cv2.waitKey(0)