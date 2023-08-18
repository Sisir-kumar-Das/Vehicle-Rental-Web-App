import React from 'react';
import BikeData from './BikeData';
import CarBody from '../Car/CarBody';
import BicycleData from './BicycleData';
import TabSection from './TabSection';

const AllData = () => {
  return (
    <>
      <TabSection active='all' />
      <CarBody />
      <BikeData />
      <BicycleData />
    </>
  );
};

export default AllData;
