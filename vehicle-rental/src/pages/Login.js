import { Button, Label, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';
import { login } from '../features/user/userActions';

const Login = () => {
  const { userInfo, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      dispatch(login(data));
    } catch (err) {
      console.log(err);
    }
  };

  const onGuestLogin = async (data) => {
    setValue('email', 'ram@gmail.com');
    setValue('password', '12345');
    dispatch(login(data));
  };

  useEffect(() => {
    if (userInfo && userInfo.role === 'admin') {
      toast.success('Logged in successfully');
      navigate('/admin');
    } else if (userInfo && userInfo.role === 'user') {
      toast.success('Logged in successfully');
      navigate('/');
    }
  }, [userInfo, navigate]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  return (
    <>
      <div className='container mx-auto max-w-[1080px] w-[90%] min-h-[90vh] flex justify-center items-center'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='block w-full space-y-4 mx-auto my-8 max-w-[480px]'
        >
          <h1 className=' text-3xl font-semibold'>Login</h1>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='email' value='Your email' />
            </div>
            <TextInput
              id='email'
              type='email'
              placeholder='i.e. ram@gmail.com'
              {...register('email', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            {errors?.email?.type === 'required' && (
              <p role='alert' className='text-red-600 text-sm mt-2'>
                Email is required
              </p>
            )}
            {errors?.email?.type === 'pattern' && (
              <p role='alert' className='text-red-600 text-sm mt-2'>
                Email is not valid
              </p>
            )}
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='password' value='Your password' />
            </div>
            <TextInput
              id='password'
              placeholder='Enter your password'
              type='password'
              {...register('password', {
                required: true,
              })}
            />
            {errors?.password?.type === 'required' && (
              <p role='alert' className='text-red-600 text-sm mt-2'>
                Password is required
              </p>
            )}
          </div>
          <div className='flex gap-4 justify-between items-center'>
            <Button type='submit' className='basis-1/2' isProcessing={loading}>
              <p>Login </p>
              <ArrowLongRightIcon className='w-6 h-6 ml-2' />
            </Button>
            <Button
              type='submit'
              className='basis-1/2'
              outline={true}
              onClick={onGuestLogin}
            >
              <p>Login as a guest </p>
              <ArrowLongRightIcon className='w-6 h-6 ml-2' />
            </Button>
          </div>
          <p>
            Not registered yet?{' '}
            <Link to='/signup' className='text-blue-600'>
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
