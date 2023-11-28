/* eslint-disable */
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { io } from 'socket.io-client';
import { isAuthenticate } from "../cookies/GetCookies";
import { createBrowserHistory } from "history";
import { apiCheckUserInfo } from "../../services/apis/auths/auth";

const GlobalContext = createContext()

const FncGlobalContext = ({ children }) => {
  const token = isAuthenticate()
  const location = useLocation();
  let history = createBrowserHistory();
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState(null)
  const [roleUser, setRoleUser] = useState('');
  const [socket, setSocket] = useState(null);
  const [stream, setStream] = useState(null);

  const checkLogin = async () => {
    if (token?.accessToken) {
      try {
        const user = await apiCheckUserInfo({ accessToken: token?.accessToken })
        setUserInfo(user?.data);
        checkRole(user?.data)
        connectSocket(user?.data)
      } catch (error) {
        navigate('/')
        setUserInfo(null)
        setSocket(null)
      }
    }
    else {
      setUserInfo(null)
    }
  }
  
  const connectSocket = async (user) => {
    const socket = io(process.env.REACT_APP_API_SOCKET, {
      "transports": ['websocket'],
      "auth": {
        "callerId": user?.id.toString(),
        "type": "web",
      }
    });
    socket.on("loggedUser", (logged) => {
      if (logged) {
        socket.destroy();
        logOut({message : "This account is logging in somewhere else!"});
      }
    });
    setSocket(socket);
    // Sử dụng lại socket đã lưu trữ để khôi phục kết nối
  }

  const checkRole = (userInfo) => {
    setRoleUser(userInfo?.roles?.toString());
  }

  const logOut = async (data) => {
    await localStorage.removeItem('userWebRtc');
    window.location.reload
    (data?.message ? toast.warning : toast.success)(data?.message ? data?.message : "Sign out successful!", {
      position: toast.POSITION.TOP_RIGHT,
      className: `foo-bar`
    });
    setUserInfo(null)
    socket?.destroy();
    setSocket(null)
  };

  const changeStream = (value) => {
    setStream(value)
  }

  // const handleRemoteControl = (ev) => {
  //   console.log(ev.keyCode);
  //   switch (ev.keyCode) {
  //     case 27: // Mã cho nút back
  //       break;

  //     case 37: // Mã cho nút trái
  //       break;

  //     case 38: // Mã cho nút lên
  //       break;

  //     case 39: // Mã cho nút phải
  //       break;

  //     case 40: // Mã cho nút xuống
  //       break;

  //     case 13: // Mã cho nút Enter
  //       break;
  //   }
  // }
  
  // useEffect(() => {
  //   document.addEventListener('keydown', handleRemoteControl);
  //   return () => {
  //     document.removeEventListener('keydown', handleRemoteControl);
  //   };
  // }, []);
  
  useEffect(() => {
    if (!userInfo) {
      navigate('/')
    }
  }, [userInfo])

  useEffect(() => {
    checkLogin()
  }, [])


  
  return (
    <GlobalContext.Provider value={{ userInfo, roleUser, socket, token, stream, changeStream, checkLogin, logOut }}>
      {children}
    </GlobalContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(GlobalContext);
}
export { FncGlobalContext }
/* eslint-disable */