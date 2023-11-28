/* eslint-disable */
import React, { useRef, useState } from 'react'
import {InputField} from '@enact/sandstone/Input';
import Button from '@enact/sandstone/Button';
import Checkbox from '@enact/sandstone/Checkbox';
import BodyText from '@enact/sandstone/BodyText';
import CheckboxItem from '@enact/sandstone/CheckboxItem';
import css from './Login.module.less'
import { useForm, Controller  } from 'react-hook-form';

const Login = () => {
  const [viewPass, setViewPass] = useState(false)
  const [remember, setRemember] = useState(false)
  const [validate, setValidate] = useState({
    username: "",
    password : ""
  })
  const [formValues , setFormValues] = useState({
    username : "",
    password : ""
  })
  const formRef = useRef(null)
  const { register, control ,handleSubmit , formState : { errors } } = useForm()

  const onSubmit = (data) => {
    // if ( !formValues?.username || !formValues?.password) {
    //   setValidate({
    //     username: formValues?.username,
    //     password : formValues?.password
    //   })
    //   return;
    // }
    console.log(data);
  }
  return (
    <div
      className="h-full w-full bg-gray-600 flex flex-col justify-center"
    >
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="w-[40%] py-4">
          <div className='flex flex-col gap-2'>
            <label className='pl-3 my-2' htmlFor="username">Username</label>
            <Controller
              name="username"
              control={control}
              render={( field ) => <InputField
                {...field}
                className={`${!validate?.username ? "ring-4 ring-red-500" : ""} bg-black rounded`}
                autoFocus={true}
                placeholder='Username...'
                size="small"
                type="text"
              />}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='pl-3 my-2' htmlFor="username">Password</label>
            <Controller
              name="password"
              control={control}
              render={( field ) => <InputField
                // {...field}
                className={`${!validate?.username ? "ring-4 ring-red-500" : ""} bg-black rounded`}
                autoFocus={true}
                placeholder='Password...'
                size="small"
                type="password"
              />}
            />
          </div>
          <div className='flex justify-start items-center gap-2 ml-4 mt-2'>
            <Checkbox
              indeterminateIcon="minus"
              onToggle={() => setRemember(!remember)}
              value={remember}
            >
            </Checkbox>
            <span className='ml-4'>
              <BodyText
                style={{ margin : 0}}
                className='body-text-login'
                // css={css}
                size="small"
              >
                Remember me
              </BodyText>
            </span>
          </div>
          <div className='pt-2'>
            <button type='submit'>
              <Button
                type='submit'
                size="small"
                onClick={() => {
                }}
                >
                  Submit
                </Button>
            </button>
          </div>
        </form>
    </div>

  )
}

export default Login