import { Button } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/vehicles/vehicleActions';
import TabSection from './Body/TabSections/TabSection';
import ShimmerCard from './ShimmerCard';
import VehicleCard from './VehicleCard';

const VehicleList = ({ type }) => {
  const { vehicles, loading, error } = useSelector((state) => state.vehicles);
  const dispatch = useDispatch();
  const [filtterCars, setFillterCars] = useState([]);
  let searchValue = useRef(null);

  useEffect(() => {
    dispatch(getAllProducts({ type }));
  }, [dispatch, type]);

  useEffect(() => {
    !loading && setFillterCars(vehicles);
  }, [loading, vehicles]);

  const searchClickHandler = (e) => {
    e.preventDefault();
    const filtterValue = searchValue.current.value;
    setFillterCars(
      vehicles.filter((car) =>
        car.title.toLowerCase().includes(filtterValue.toLowerCase())
      )
    );
  };

  if (error) return <p>{error}</p>;
  return (
    <section className='container mx-auto my-8 max-w-[1080px] w-[90%]'>
      <TabSection active={type} />
      <form className='flex justify-center gap-4 mb-8 items-center'>
        <input
          type='search'
          placeholder='Serach...'
          className='rounded-md grow max-w-sm'
          ref={searchValue}
        />

        <Button type='submit' onClick={searchClickHandler}>
          Search
        </Button>
      </form>
      <div className='grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4'>
        {!loading
          ? filtterCars.map((vehicle) => (
              <VehicleCard vehicle={vehicle} type={type} key={vehicle._id} />
            ))
          : [...'duhqweeiduhewddiuw'].map((_, i) => <ShimmerCard key={i} />)}
      </div>
    </section>
  );
};

export default VehicleList;
