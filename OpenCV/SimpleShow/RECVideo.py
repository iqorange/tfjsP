import cv2

fourcc = cv2.VideoWriter_fourcc(*'MPEG')
vw = cv2.VideoWriter('./out.mp4', fourcc, 25, (1280, 720))

if __name__ == '__main__':
    cv2.namedWindow('video', cv2.WINDOW_NORMAL)
    cv2.resizeWindow('video', 640, 360)
    cap = cv2.VideoCapture(0)
    while cap.isOpened():
        ret, frame = cap.read()

        if ret == True:
            cv2.imshow('video', frame)
            cv2.resizeWindow('video', 640, 360)

            vw.write(frame)

            key = cv2.waitKey(40)
            if key & 0xFF == ord('q'):
                break
        else:
            break

    cap.release()
    vw.release()
    cv2.destroyAllWindows()
