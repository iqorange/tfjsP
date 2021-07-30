import cv2
import numpy as np 

if __name__ == '__main__':
    curShape = 0
    startpos = (0, 0)
    img = np.zeros((480, 640, 3), np.uint8)

    def mouse_callback(event, x, y, flags, userdata):
        global curShape, startpos
        if(event & cv2.EVENT_LBUTTONDOWN == cv2.EVENT_LBUTTONDOWN):
            startpos = (x, y)
        elif(event & cv2.EVENT_LBUTTONUP == cv2.EVENT_LBUTTONUP):
            if curShape == 0:
                cv2.line(img, startpos, (x, y), (255, 138, 83))
            elif curShape == 1:
                cv2.rectangle(img, startpos, (x, y), (255, 138, 83))
            elif curShape == 2:
                a = (x - startpos[0])
                b = (y - startpos[1])
                r = int((a**2+b**2)**0.5)
                cv2.circle(img, startpos, r,  (255, 138, 83))
            else:
                print('error: no shape')

    cv2.namedWindow('drawShape', cv2.WINDOW_NORMAL)
    cv2.setMouseCallback('drawShape', mouse_callback)
    
    while True:
        cv2.imshow('drawShape', img)
        key = cv2.waitKey(1) & 0xFF
        if key == ord('q'):
            break
        elif key == ord('l'):
            curShape = 0
        elif key == ord('r'):
            curShape = 1
        elif key == ord('c'):
            curShape = 2

    cv2.destroyAllWindows()
