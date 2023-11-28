import React, { useEffect, useState } from 'react'
import {InputField} from '@enact/sandstone/Input';
import Button from '@enact/sandstone/Button';
import Checkbox from '@enact/sandstone/Checkbox';
import BodyText from '@enact/sandstone/BodyText';
import Image from '@enact/sandstone/Image';
import { apiLogin } from '../../services/apis/auths/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGlobalContext } from '../../utils/contexts/GlobalContext';
import BgLogin from '../../assets/images/auths/Logins/svg-login.svg';
import css from './Login.module.less'



const Login = () => {
  const { userInfo } = useGlobalContext()

  const navigate = useNavigate()
  const [remember, setRemember] = useState(false)
  const [formValues , setFormValues] = useState({
    username : "",
    password : ""
  })

  const checkIsLogin = () => {
    if (userInfo) {
      navigate('/home')
    }
  }


  // const { register, control ,handleSubmit , formState : { errors } } = useForm()

  const onSubmit = async (data) => {
    window?.localStorage.removeItem('userWebRtc');
    if (data?.username === "" | data?.password === "") {
      toast.warning('Please complete all information!', {
        position: toast.POSITION.TOP_RIGHT,
        className: 'foo-bar'
      });
      return;
    }
    try {
      const user = await apiLogin(data);
      const role = user?.data?.roles?.toString();
      // if (role !== "ROLE_DEVICE") {
      //   // Check role "ROLE_SUPER_ADMIN" || "ROLE_ADMIN"
      //   toast.error('You do not have access to the system!', {
      //     position: toast.POSITION.TOP_RIGHT,
      //     className: 'foo-bar'
      //   });
      //   return;
      // }
      window?.localStorage.setItem('userWebRtc', JSON.stringify(user?.data))
      toast.success(`Logged in successfully!!`, {
        position: toast.POSITION.TOP_RIGHT,
        className: 'foo-bar'
      });
      setTimeout(() => {
        window.location.reload()
        // navigate('/');
      }, 500);
    } catch (error) {
      toast.error(error?.response?.data?.message, {
        position: toast.POSITION.TOP_RIGHT,
        className: 'foo-bar'
      });
    }
  };

  useEffect(() => {
    checkIsLogin()
  }, [userInfo])


  return (
      <Image style={{width : '100%', height : '100%' , display : 'flex'}} className="bg-cover bg-bottom bg-no-repeat h-full w-full"  src={{
        'hd': BgLogin,
        'fhd': BgLogin,
        'uhd': BgLogin
      }}>
        <form className="w-[40%] h-[60%] flex flex-col justify-center py-4 rounded-lg mx-4 my-auto bg-[#F5F5F5]/70 px-[20px] pb-8 backdrop-blur-xl">
          <h2 className="font-[900] text-4xl w-full my-4 text-center text-[#003F51]">
            Welcome to BzCall
          </h2>
          <div className='flex flex-col gap-2 my-2'>
            <label className='pl-3 my-1 text-[#003F51]/70' htmlFor="username">Username1</label>
            <InputField
              className={`bg-white rounded`}
              style={{color : 'black'}}
              autoFocus={true}
              onChange={(e) => setFormValues({
                ...formValues,
                username : e?.value
              })}
              placeholder='Username...'
              size="small"
              type="text"
            />
          </div>
          <div className='flex flex-col gap-2 my-2'>
            <label className='pl-3 my-1 text-[#003F51]/70' htmlFor="username">Password1</label>
            <InputField
              className={`bg-white rounded`}
              style={{color : 'black'}}
              autoFocus={true}
              onChange={(e) => setFormValues({
                ...formValues,
                password : e?.value
              })}
              placeholder='Password...'
              size="small"
              type="password"
            />
          </div>
          <div className='flex justify-start items-center gap-2 ml-4 my-2'>
            <Checkbox
              indeterminateIcon="minus"
              onToggle={() => setRemember(!remember)}
              value={remember}
            >
            </Checkbox>
            <span className='ml-4'>
              <BodyText
                style={{ margin : 0, color : '#003F51'}}
                className='body-text-login'
                // css={css}
                size="small"
              >
                Remember me
              </BodyText>
            </span>
          </div>
          <div className='pt-2'>
            <Button
              className=''
              type='submit'
              backgroundOpacity='opaque'
              size="small"
              onClick={() => onSubmit(formValues)}
              >
                Log in
              </Button>
          </div>
        </form>
        </Image>
  )
}

export default Login