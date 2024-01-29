import React, { useRef, useEffect } from 'react';
import { uplaodVideoFeed } from '../../store/routines';
import { useDispatch } from 'react-redux';

const VideoCaptureComponent = () => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);

  useEffect(() => {
    const constraints = { video: true };
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          // Capture and send frames at a fixed interval
          const interval = setInterval(() => {
            const canvas = document.createElement('canvas');
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
            const frameData = canvas.toDataURL('image/jpeg'); // Convert frame to base64

            // Send frameData to the backend using HTTP POST
            dispatch(uplaodVideoFeed(frameData))
          }, 1000);

          return () => {
            clearInterval(interval);
            stream.getTracks().forEach(track => track.stop());
          };
        }
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  }, [dispatch]);

  return (
    <div>
      <h2>Video Capture from Camera</h2>
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
};

export default VideoCaptureComponent;
