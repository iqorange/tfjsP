import cv2
import numpy as np 

min_w = 90
min_h = 90
line_height = 560
cars = []
offset = 7
carno = 0

def center(x, y, w, h):
    x1 = int(w/2)
    y1 = int(h/2)
    cx = x + x1
    cy = y + y1
    return cx, cy

cap = cv2.VideoCapture('./images/video.mp4')

bgsubmog = cv2.bgsegm.createBackgroundSubtractorMOG()

kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5, 5))

while True:
    ret, frame = cap.read()

    if ret == True:
        cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        blur = cv2.GaussianBlur(frame, (3, 3), 5)
        mask = bgsubmog.apply(blur)
        erode = cv2.erode(mask, kernel)
        dilate = cv2.dilate(erode, kernel, iterations=3)
        close = cv2.morphologyEx(dilate, cv2.MORPH_CLOSE, kernel)
        close = cv2.morphologyEx(close, cv2.MORPH_CLOSE, kernel)
        cnts, h = cv2.findContours(close, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
        cv2.line(frame, (10, line_height), (1200, line_height), (255, 138, 83), 2)
        for (i, c) in enumerate(cnts):
            (x, y, w, h) = cv2.boundingRect(c)
            isValid = (w >= min_w) and (h >= min_h)
            if isValid:
                cv2.rectangle(frame, (x, y), (x+w, y+h), (83, 138, 255), 2)
                cpoint = center(x, y, w, h)
                cars.append(cpoint)
                
                for (x, y) in cars:
                    if(y > line_height - offset) and (y < line_height + offset):
                        carno += 1
                        cars.remove((x, y))

        cv2.putText(frame, 'Cars Count:' + str(carno), (500, 60), cv2.FONT_HERSHEY_SIMPLEX, 2, (138, 255, 83), 5)
        cv2.imshow('video', frame)
    
    key = cv2.waitKey(16)
    if key == 27:
        break

cap.release()
cv2.destroyAllWindows()
