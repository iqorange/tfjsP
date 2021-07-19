import cv2

if __name__ == '__main__':
    cv2.namedWindow('img', cv2.WINDOW_NORMAL)
    img = cv2.imread('../images/perspective.jpeg')
    while True:
        cv2.imshow('img', img)
        key = cv2.waitKey(0)
        if key & 0xFF == ord('q'):
            print('quit')
            break
        elif key & 0xFF == ord('s'):
            print('save')
            cv2.imwrite('../images/123.png', img)
        else:
            print('other')

    cv2.destroyAllWindows()