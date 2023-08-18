import React from 'react';
import CycleCard from '../Cycle/CycleCard';
import { useState, useEffect, useRef } from 'react';
import { Button } from 'flowbite-react';
import TabSection from './TabSection';
import ShimmerCard from '../../Utils/ShimmerCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../features/vehicles/vehicleActions';

const BicycleData = () => {
  const { vehicles, loading, error } = useSelector((state) => state.vehicles);
  const dispatch = useDispatch();
  const [filtterCycles, setFillterCycles] = useState([]);
  let searchValue = useRef(null);

  useEffect(() => {
    dispatch(getAllProducts({ type: 'cycle' }));
  }, [dispatch]);

  useEffect(() => {
    !loading && setFillterCycles(vehicles);
  }, [loading, vehicles]);

  const searchClickHandler = (e) => {
    e.preventDefault();
    const filtterValue = searchValue.current.value;
    setFillterCycles(
      vehicles.filter((car) =>
        car.title.toLowerCase().includes(filtterValue.toLowerCase())
      )
    );
  };

  if (error) return <p>{error}</p>;

  return (
    <>
      <section className='container mx-auto my-8 max-w-[1080px] w-[90%]'>
        <TabSection active='cycles' />

        <form
          onSubmit={searchClickHandler}
          className='flex justify-center gap-4 mb-8 items-center'
        >
          <input
            type='search'
            placeholder='Serach...'
            className='rounded-md grow max-w-sm'
            ref={searchValue}
          />

          <Button type='submit'>Search</Button>
        </form>

        <div className='grid grid-rows-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4'>
          {!loading
            ? filtterCycles.map((cycle) => (
                <CycleCard cycle={cycle} key={cycle._id} />
              ))
            : [...'duhqweeiduhewddiuw'].map((_, i) => <ShimmerCard key={i} />)}
        </div>
      </section>
    </>
  );
};

export default BicycleData;
