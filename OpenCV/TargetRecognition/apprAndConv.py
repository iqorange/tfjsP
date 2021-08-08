import cv2
import numpy as np 

def drawShape(src, points):
    i=0
    while i < len(points):
        if i == len(points) - 1:
            x, y = points[i][0]
            x1, y1 = points[0][0]
            cv2.line(src, (x, y), (x1, y1),(255, 138, 83), 3)
        else:
            x, y = points[i][0]
            x1, y1 = points[i+1][0]
            cv2.line(src, (x, y), (x1, y1),(255, 138, 83), 3)
        i = i + 1
img = cv2.imread('./images/hand.png')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
ret, binary = cv2.threshold(gray, 150, 255, cv2.THRESH_BINARY)
contours, hierarchy = cv2.findContours(binary, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
cv2.drawContours(img, contours, 0, (255, 138, 83), 1)

e = 20
# approx = cv2.approxPolyDP(contours[0], e, True)
# drawShape(img, approx)
hull = cv2.convexHull(contours[0])
drawShape(img, hull)
cv2.imshow('img', img)
cv2.waitKey(0)
