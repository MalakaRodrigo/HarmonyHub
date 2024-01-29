import React, { useRef, useEffect } from 'react';

const VideoCaptureComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const constraints = { video: true }; // Specify video as a constraint
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });

    return () => {
      // Clean up by stopping the stream when the component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <h2>Video Capture from Camera</h2>
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
};

export default VideoCaptureComponent;
