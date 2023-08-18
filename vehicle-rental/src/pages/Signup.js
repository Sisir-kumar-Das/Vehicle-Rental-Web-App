import { Button, Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { signUp } from '../features/user/userActions';
import { useEffect } from 'react';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      dispatch(signUp(data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
      toast.success('Logged in successfully');
    }
  }, [userInfo, navigate]);

  return (
    <div className='container mx-auto max-w-[1080px] w-[90%] min-h-[70vh] flex justify-center items-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='block w-full space-y-4 mx-auto my-8 max-w-[480px]'
      >
        <h1 className=' text-3xl font-semibold'>Create an account</h1>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='name' value='Your name' />
          </div>
          <TextInput
            id='name'
            type='text'
            {...register('name', { required: true, maxLength: 32 })}
            placeholder='i.e. Ram Das'
          />
          {errors?.name?.type === 'required' && (
            <p role='alert' className='text-red-600 text-sm mt-2'>
              Name is required
            </p>
          )}
          {errors?.name?.type === 'maxLength' && (
            <p role='alert' className='text-red-600 text-sm mt-2'>
              Name must be within 32 characters
            </p>
          )}
        </div>
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

        <Button type='submit'>
          <p>Create account </p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5 ml-2'
          >
            <path
              fillRule='evenodd'
              d='M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z'
              clipRule='evenodd'
            />
          </svg>
        </Button>
        <p>
          Already registered?{' '}
          <Link to='/login' className='text-blue-600'>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
