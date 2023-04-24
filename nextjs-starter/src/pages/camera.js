// Code taken from https://blog.openreplay.com/capture-real-time-images-and-videos-with-react-webcam/
// with some slight modifications for our use in our tech share


import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";

function WebcamImage() {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);

  return (
    <div className="Container">
      <div className="CameraContainer">
        <Webcam
          ref={webcamRef}
          videoConstraints={videoConstraints}
          screenshotFormat="image/png"
        />
        <button onClick={capture}>Capture photo</button> 
      </div>
      {img && (
          <img src={img} alt="capturedPhoto"/>
      )}
    </div> 
  );
}


export default WebcamImage;