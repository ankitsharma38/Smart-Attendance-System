import React, { useState, useEffect } from 'react';

const CameraFeed = () => {
  const [cameraStream, setCameraStream] = useState(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        setCameraStream(stream);
      })
      .catch((err) => console.error("Error accessing camera: ", err));

    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [cameraStream]);

  return (
    <div>
      <video autoPlay width="640" height="480" ref={video => video && video.srcObject=cameraStream}/>
    </div>
  );
};

export default CameraFeed;
