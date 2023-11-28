import React, {
    useContext,
    useEffect,
    useState,
    useRef,
    createContext,
  } from "react";
  import { useGlobalContext } from "./GlobalContext";
import { isAuthenticate } from "../cookies/GetCookies";
  
  const RtcContextApp = createContext();
  
  const RtcContext = ({ children }) => {
    const { socket, stream, changeStream } = useGlobalContext();
    const token = isAuthenticate();
    const myVideo = useRef();
    const userVideo = useRef();
  
    // Constraint on camera and microphone
    const constraints = {
      audio: true,
      video: true,
    };
  
    // STUN/TURN server configuration
    const configuration = {
      iceServers: [
        {
          urls: "stun:a.relay.metered.ca:80",
        },
        {
          urls: "turn:a.relay.metered.ca:80",
          username: "36503787eef4333ea00e024c",
          credential: "jbQmtdddSap7G38n",
        },
        {
          urls: "turn:a.relay.metered.ca:80?transport=tcp",
          username: "36503787eef4333ea00e024c",
          credential: "jbQmtdddSap7G38n",
        },
        {
          urls: "turn:a.relay.metered.ca:443",
          username: "36503787eef4333ea00e024c",
          credential: "jbQmtdddSap7G38n",
        },
        {
          urls: "turn:a.relay.metered.ca:443?transport=tcp",
          username: "36503787eef4333ea00e024c",
          credential: "jbQmtdddSap7G38n",
        },
      ],
    };
  
    useEffect(() => {
      if (socket !== null && token?.roles?.toString() === "ROLE_DEVICE") {
        init();
      } else {
        stream?.getTracks().forEach((track) => {
          track.stop();
        });
      }
    }, [socket]);
  
    const init = async () => {
      let localStream = await initUserMedia();
    //   let peerConnection = await initPeerConnection(localStream);
    };
  
    // Initialize user's media device (camera and microphone)
    const initUserMedia = async () => {
      try {
        const localStream = await window.navigator?.mediaDevices.getUserMedia(
          constraints
        );
        changeStream(localStream);
        handleSuccess(localStream);
        return localStream;
      } catch (e) {
        console.log(e);
      }
    }

    const handleSuccess = (localStream) => {
        if (myVideo.current !== null) {
          myVideo.current.srcObject = localStream;
        }
      };

    
    const toggleCamera = async (streams) => {
      // on, off camera
      let videoTrack = streams?.getTracks().find(track => track?.kind === 'video')
  
      if (videoTrack?.enabled) {
        videoTrack.enabled = false
      } else {
        videoTrack.enabled = true
      }
      socket.emit('constraints',)
    }
  
    const toggleMic = async (streams) => {
      //on, off mic
      let audioTrack = streams?.getTracks().find(track => track?.kind === 'audio')
      if (audioTrack?.enabled) {
        audioTrack.enabled = false;
      } else {
        audioTrack.enabled = true
      }
    }
  
  
    return (
      <RtcContextApp.Provider
        value={{  myVideo, userVideo, toggleMic, toggleCamera }}
      >
        {children}
      </RtcContextApp.Provider>
    );
  };
  
  export const useRtcContext = () => {
    return useContext(RtcContextApp);
  };
  
  export { RtcContext };
  