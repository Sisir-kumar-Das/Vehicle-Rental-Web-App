import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API } from '../backend';

const MyRents = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const [rents, setRents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(!userInfo);
    if (!userInfo) {
      navigate('/login');
    }
  }, [userInfo, navigate]);

  useEffect(() => {
    const getRentsOfUser = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${API}/rents/${userInfo._id}`);

        // console.log(res.data);
        setRents(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.response);
        setIsLoading(false);
      }
    };
    userInfo && getRentsOfUser();
  }, [userInfo]);

  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
    <div className='container mx-auto max-w-[1080px] w-[90%] marker:shadow rounded-md p-4 my-8'>
      <div className='block md:flex gap-8 '>
        {rents.length !== 0 ? (
          rents.map((rent) => (
            <div
              className='flex gap-8 p-4 bg-gray-100 rounded-md'
              key={rent._id}
            >
              <div className='basis-1/5'>
                <img
                  src={rent?.vehicle.url}
                  alt={rent?.vehicle.title}
                  className='block w-full rounded-md'
                />
              </div>
              <div className='basis-4/5'>
                <h3 className='text-xl'>{rent?.vehicle.title}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>You have not rented any vehicle</p>
        )}
      </div>
    </div>
  );
};
export default MyRents;
