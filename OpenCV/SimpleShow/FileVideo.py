import cv2

if __name__ == '__main__':
    cv2.namedWindow('video', cv2.WINDOW_AUTOSIZE)
    cap = cv2.VideoCapture("/Users/flimorange/Downloads/t1.mp4")
    print(cap.isOpened())
    while True:
        ret, frame = cap.read()

        cv2.imshow('video', frame)
        key = cv2.waitKey(10)
        if key & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()
