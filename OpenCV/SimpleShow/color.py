import cv2

def callback():
    pass
if __name__ == '__main__':
    
    cv2.namedWindow('color', cv2.WINDOW_NORMAL)

    img = cv2.imread('../images/lena.png')

    colorSpace = [cv2.COLOR_BAYER_BG2BGRA, cv2.COLOR_BAYER_BG2BGRA, cv2.COLOR_BAYER_BG2GRAY, cv2.COLOR_BGR2HSV_FULL, cv2.COLOR_BGR2YUV]
    cv2.createTrackbar('curcolor', 'color', 0, len(colorSpace), callback)
    while True:
        index = cv2.getTrackbarPos('curcolor', 'color')
        print(colorSpace[index])
        cvt_img = cv2.cvtColor(img, colorSpace[index])
        cv2.imshow('color', img)
        key = cv2.waitKey(10)
        if key & 0xFF == ord('q'):
            break

    cv2.destroyAllWindows()