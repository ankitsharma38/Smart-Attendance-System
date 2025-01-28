import React, { useEffect, useRef, useState } from "react";

const CameraFeed = () => {
  const [cameraStream, setCameraStream] = useState(null);
  const videoRef = useRef(null); // Use a ref for the video element

  useEffect(() => {
    // Access the user's webcam
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        setCameraStream(stream);

        // Assign the stream to the video element
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error("Error accessing camera:", err));

    // Cleanup the stream on component unmount
    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [cameraStream]); // Run when `cameraStream` changes

  return (
    <div>
      <video
        ref={videoRef} // Attach the ref to the video element
        autoPlay
        width="640"
        height="480"
      />
    </div>
  );
};

export default CameraFeed;
