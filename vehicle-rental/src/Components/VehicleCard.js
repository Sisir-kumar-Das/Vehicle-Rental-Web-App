import React from 'react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const VehicleCard = ({ vehicle }) => {
  return (
    <Link to={`/rent/${vehicle.vehicleType}/${vehicle._id}`} key={vehicle._id}>
      <div className='rounded-md aspect-video my-4'>
        <img
          src={vehicle?.url}
          alt=''
          className='sm:48 md:h-60 w-full rounded-md'
        />
        <h2 className='text-2xl my-2 font-bold tracking-tight text-gray-900 dark:text-white'>
          {vehicle?.title}
        </h2>
        <h6 className='font-bold mb-2'>⭐{vehicle?.rating}</h6>
        <p className='font-normal text-gray-700 dark:text-gray-400 capitalize'>
          {vehicle?.vehicleType} • {vehicle?.gasType} • {vehicle?.seats} Seats
        </p>
        <p>
          Price : <b>{vehicle?.price}</b>
        </p>
        <Button className='mt-4'>RENT THIS CAR</Button>
      </div>
    </Link>
  );
};

export default VehicleCard;
