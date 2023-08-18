import { Button, Label, Textarea, TextInput } from 'flowbite-react';

const ContactUs = () => {
  return (
    <>
      <div className='container mx-auto max-w-[1080px] min-h-[60vh] flex justify-center items-center'>
        <form className='block w-full space-y-4 mx-auto my-8 max-w-[480px]'>
          <h1 className='text-center text-3xl font-semibold'>Get in touch!</h1>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='name' value='Your name' />
            </div>
            <TextInput
              id='name'
              type='text'
              placeholder='Ram Das'
              required={true}
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='email' value='Your email' />
            </div>
            <TextInput
              id='email'
              placeholder='ram@gmail.com'
              type='email'
              required={true}
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='large' value='Your message' />
            </div>
            <Textarea
              id='large'
              type='text'
              placeholder='Please write something...'
              className='lg'
            />
          </div>
          <Button type='submit'>
            <p>Send </p>
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
        </form>
      </div>
    </>
  );
};

export default ContactUs;
