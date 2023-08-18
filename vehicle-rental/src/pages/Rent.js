import { Button } from 'flowbite-react';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProduct, rentProduct } from '../features/vehicles/vehicleActions';
import toast from 'react-hot-toast';

const Rent = () => {
  const { id, type } = useParams();
  const { userInfo } = useSelector((state) => state.user);
  const { currentProduct, loading } = useSelector((state) => state.vehicles);
  const dispatch = useDispatch();
  const fromRef = useRef();
  const toRef = useRef();
  const locationRef = useRef();
  const navigate = useNavigate();

  const onRent = async (e) => {
    e.preventDefault();

    try {
      const data = {
        from: fromRef.current.value,
        to: toRef.current.value,
        location: locationRef.current.value,
      };
      if (data.from && data.from && data.to) {
        const payload = { data, userInfo, currentProduct };
        dispatch(rentProduct(payload));
        toast.success('Rented successfully');
        navigate('/my-rents');
      } else {
        console.log('All fields are required!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(currentProduct);

  useEffect(() => {
    dispatch(getProduct({ id }));
  }, [id, dispatch]);

  if (loading) {
    return (
      <div className='container mx-auto max-w-[1080px] w-[90%] marker:shadow rounded-md p-4 my-8'>
        <div className='animate-pulse flex '>
          <div className='bg-gray-200 min-h-[80vh] basis-2/4 w-full'></div>
          <div className='flex-1 space-y-6 p-8 basis-2/4'>
            <div className='h-2 bg-gray-200 rounded'></div>
            <div className='space-y-3'>
              <div className='grid grid-cols-3 gap-4'>
                <div className='h-2 bg-gray-200 rounded col-span-2'></div>
                <div className='h-2 bg-gray-200 rounded col-span-1'></div>
              </div>
              <div className='h-2 bg-gray-200 rounded'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='container mx-auto max-w-[1080px] w-[90%] marker:shadow rounded-md p-4 my-8'>
        <div className='block md:flex gap-8 '>
          <img
            src={currentProduct?.url}
            alt=''
            className='w-full basis-2/4 aspect-auto max-w-[480px] rounded-lg'
          />

          <div className='grow'>
            <h3 className='text-2xl capitalize my-2 font-bold'>
              {currentProduct?.title}
            </h3>
            <h4>Details:</h4>

            <button type='button' className='btn btn-success'>
              ⭐ {currentProduct?.rating}
            </button>
            <h5>
              <b>Price :</b> {currentProduct?.price}
            </h5>

            <h5>
              <b>Type :</b> {currentProduct?.vehicleType}
            </h5>
            {type === 'car' && (
              <h5>
                <b>Seats :</b> {currentProduct?.seats}
              </h5>
            )}
            <form onSubmit={onRent} className='w-full max-w-[360px] block'>
              <select ref={locationRef} className='w-full my-4 rounded-md'>
                <option defaultValue>SET YOUR LOCATION</option>
                <option value='delhi'>Delhi</option>
                <option value='bangalore'>Bangalore</option>
                <option value='kolkata'>Kolkata</option>
                <option value='hyderabad'>Hyderabad</option>
                <option value='chennai'>Chennai</option>
              </select>

              <h6 className='mb-2 text-xl font-bold'>Select a time:</h6>

              <div className='flex items-center gap-4'>
                <label htmlFor='from' className='basis-1/3'>
                  FROM
                </label>
                <input
                  ref={fromRef}
                  type='date'
                  id='from'
                  name='from'
                  className='w-full rounded-md'
                />
              </div>
              <div className='flex mt-4 items-center gap-4'>
                <label htmlFor='To' className='basis-1/3'>
                  TO
                </label>
                <input
                  type='date'
                  ref={toRef}
                  id='To'
                  name='To'
                  className='w-full  rounded-md'
                />
              </div>

              <Button
                type='submit'
                className='w-full md:w-fit text-center bg-blue-600 p-2 px-4 rounded-md inline-block my-4 text-white'
              >
                RENT THE VEHICLE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Rent;
