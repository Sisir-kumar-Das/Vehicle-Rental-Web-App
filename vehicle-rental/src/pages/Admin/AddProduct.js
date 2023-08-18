import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Label, TextInput, Select } from 'flowbite-react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { addProduct } from '../../features/vehicles/vehicleActions';

const AddProduct = () => {
  const { userInfo, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [vehicleType, setVehicleType] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // dispatch(login(data));
      if (vehicleType !== '') {
        const formData = { ...getValues(), vehicleType };

        console.log(formData);

        const payload = { formData, userInfo };

        dispatch(addProduct(payload));
        navigate('/admin');
        toast.success('Vehicle added successfully');
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='block w-full space-y-4 my-8 max-w-[480px]'
    >
      {/* title */}
      <div>
        <Label htmlFor='title' value='Product title' className='mb-2 block' />
        <TextInput
          id='title'
          type='text'
          placeholder='i.e. Nissan GTR R35'
          {...register('title', {
            required: true,
          })}
        />
        {errors?.title?.type === 'required' && (
          <p role='alert' className='text-red-600 text-sm mt-2'>
            Product title is required
          </p>
        )}
      </div>
      {/* rating */}
      <div>
        <Label htmlFor='rating' value='Product rating' className='mb-2 block' />
        <TextInput
          id='rating'
          type='text'
          placeholder='i.e. 4.5'
          {...register('rating', {
            required: true,
            min: 0,
            max: 5,
          })}
        />
        {errors?.rating?.type === 'required' && (
          <p role='alert' className='text-red-600 text-sm mt-2'>
            Product rating is required
          </p>
        )}
        {errors?.rating?.type === 'min' && (
          <p role='alert' className='text-red-600 text-sm mt-2'>
            Rating can not be less than 0
          </p>
        )}
        {errors?.rating?.type === 'max' && (
          <p role='alert' className='text-red-600 text-sm mt-2'>
            Rating can not be more than 5
          </p>
        )}
      </div>
      {/* Image URL */}
      <div>
        <Label htmlFor='url' value='Product image URL' className='mb-2 block' />
        <TextInput
          id='url'
          type='text'
          placeholder='i.e. https://images.unsplash.com/photo-1538991383142'
          {...register('url', {
            required: true,
            pattern:
              /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi,
          })}
        />
        {errors?.url?.type === 'required' && (
          <p role='alert' className='text-red-600 text-sm mt-2'>
            Product image URL is required
          </p>
        )}
        {errors?.url?.type === 'pattern' && (
          <p role='alert' className='text-red-600 text-sm mt-2'>
            Value must be a valid URL
          </p>
        )}
      </div>
      {/* price per hour */}
      <div>
        <Label htmlFor='price' value='Price' className='mb-2 block' />
        <TextInput
          id='price'
          type='number'
          placeholder='Price per hour'
          {...register('price', {
            required: true,
            pattern:
              /^[+]?([1-9][0-9]*(?:[.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/,
          })}
        />
        {errors?.price?.type === 'required' && (
          <p role='alert' className='text-red-600 text-sm mt-2'>
            Product price is required
          </p>
        )}
        {errors?.price?.type === 'pattern' && (
          <p role='alert' className='text-red-600 text-sm mt-2'>
            Product price must be a positve number
          </p>
        )}
      </div>

      {/* type of vehicle  */}
      <div>
        <Label
          htmlFor='vehicleType'
          className='mb-2 block'
          value='Vehcile type'
        />

        <Select
          id='vehicleType'
          required={true}
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        >
          <option value=''>Select vehicle type</option>
          <option value='car'>Car</option>
          <option value='bike'>Bike</option>
          <option value='cycle'>Cycle</option>
        </Select>
        {vehicleType === '' && (
          <p role='alert' className='text-red-600 text-sm mt-2'>
            Vehicle type is required
          </p>
        )}
      </div>
      {vehicleType === 'car' && (
        <>
          {/* gas type - car */}
          <div>
            <Label
              htmlFor='gasType'
              className='mb-2 block'
              value='Select gas type'
            />

            <Select
              id='gasType'
              {...register('gasType', {
                required: true,
              })}
            >
              <option value='petrol'>Petrol</option>
              <option value='diesel'>Diesel</option>
            </Select>
            {errors?.gasType?.type === 'required' && (
              <p role='alert' className='text-red-600 text-sm mt-2'>
                Car gas type is required
              </p>
            )}
          </div>
          {/* car type - car */}
          <div>
            <Label
              htmlFor='carType'
              className='mb-2 block'
              value='Select gas type'
            />

            <Select
              id='carType'
              {...register('carType', {
                required: true,
              })}
            >
              <option value='automatic'>Automatic</option>
              <option value='manual'>Manual</option>
              <option value='hybrid'>Hybrid</option>
            </Select>
          </div>

          {/* seats - car */}
          <div>
            <Label
              htmlFor='seats'
              className='mb-2 block'
              value='Select number of seats'
            />

            <Select
              id='seats'
              {...register('seats', {
                required: true,
              })}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </Select>
          </div>
        </>
      )}

      <Button type='submit' className='basis-1/2' isProcessing={loading}>
        <p>Save </p>
        <ArrowLongRightIcon className='w-6 h-6 ml-2' />
      </Button>
    </form>
  );
};
export default AddProduct;
