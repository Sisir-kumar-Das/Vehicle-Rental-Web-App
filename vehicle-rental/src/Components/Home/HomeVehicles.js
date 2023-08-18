import { Button } from 'flowbite-react';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../features/vehicles/vehicleActions';
import ShimmerCard from '../ShimmerCard';
import VehicleCard from '../VehicleCard';

const HomeVehicles = () => {
  const { vehicles, loading, error } = useSelector((state) => state.vehicles);
  const dispatch = useDispatch();
  const [filtterCars, setFillterCars] = useState([]);
  let searchValue = useRef(null);

  useEffect(() => {
    dispatch(getAllProducts({ type: '' }));
  }, [dispatch]);

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
    <>
      <section className='container mx-auto my-8 max-w-[1080px] w-[90%]'>
        <h4 className='text-2xl text-center my-4 mt-8 font-bold'>
          All Vehicles
        </h4>

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
                <VehicleCard vehicle={vehicle} key={vehicle._id} />
              ))
            : [...'duhqweeiduhewddiuw'].map((_, i) => <ShimmerCard key={i} />)}
        </div>

        <Link
          className='bg-green-600 mt-10 block max-w-[180px] text-center mx-auto text-white hover:bg-green-800 hover:text-white hover:border-green-800 p-2 px-4 border-2 rounded-md border-green-600 hover:scale-105 transition-all ease-in'
          to='/vehicles/all'
        >
          View more
        </Link>
      </section>
    </>
  );
};

export default HomeVehicles;
