import { Link } from 'react-router-dom';

const TabSection = ({ active }) => {
  return (
    <>
      <section className='my-8'>
        <div className='flex justify-center gap-4 items-center'>
          <Link
            to='/vehicles/all'
            className={
              '' + active === 'all'
                ? 'p-3 px-6 rounded-md  bg-blue-600 text-white'
                : 'p-3 px-6 rounded-md bg-gray-100'
            }
          >
            <h5>All</h5>
          </Link>
          <Link
            to='/vehicles/cars'
            className={
              active === 'car'
                ? 'p-3 px-6 rounded-md  bg-blue-600 text-white'
                : 'p-3 px-6 rounded-md bg-gray-100 '
            }
          >
            <h5>Cars</h5>
          </Link>
          <Link
            to='/vehicles/bikes'
            className={
              active === 'bike'
                ? 'p-3 px-6 rounded-md  bg-blue-600 text-white'
                : 'p-3 px-6 rounded-md bg-gray-100 '
            }
          >
            <h5>Bikes</h5>
          </Link>
          <Link
            to='/vehicles/cycles'
            className={
              active === 'cycle'
                ? 'p-3 px-6 rounded-md  bg-blue-600 text-white'
                : 'p-3 px-6 rounded-md bg-gray-100 '
            }
          >
            <h5>Cycle</h5>
          </Link>
        </div>
      </section>
    </>
  );
};

export default TabSection;
