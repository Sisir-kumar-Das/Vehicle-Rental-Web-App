import { Button } from 'flowbite-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../features/vehicles/vehicleActions';

const ProductList = () => {
  const { vehicles, error, loading } = useSelector((state) => state.vehicles);
  const dispatch = useDispatch();

  console.log(vehicles);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <table className='table-auto border border-collapse w-full'>
      <thead className='border'>
        <tr className=''>
          <th className='text-center basis-1/4 py-2'>No.</th>
          <th className='text-center basis-1/4 py-2'>Title</th>
          <th className='text-center basis-1/4 py-2'>Type</th>
          <th className='text-center basis-1/4 py-2'>Price</th>
          <th className='text-center basis-1/4 py-2'>Image</th>
          <th className='text-center basis-1/4 py-2'>Edit</th>
          <th className='text-center basis-1/4 py-2'>Delete</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((v, i) => (
          <tr className='border text-center'>
            <td className='py-2'>{i + 1}</td>
            <td>{v.title}</td>
            <td>{v.vehicleType}</td>
            <td>{v.price}</td>
            <td>
              <img
                src={v.url}
                alt={v.title}
                className='block w-16 h-12 mx-auto'
              />
            </td>
            <td className='py-2'>
              <Button color='success' size='sm' className='mx-auto'>
                Edit
              </Button>
            </td>
            <td className='py-2'>
              <Button color='failure' size='sm' className='mx-auto'>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ProductList;
