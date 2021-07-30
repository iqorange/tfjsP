import cv2
import numpy as np

if __name__ == '__main__':
    img = np.zeros((480, 640), np.uint8)
    cv2.imshow('img', img)
    key = cv2.waitKey(0)
    if key & 0xFF == ord('q'):
        cv2.destroyAllWindows()
    cv2.destroyAllWindows()