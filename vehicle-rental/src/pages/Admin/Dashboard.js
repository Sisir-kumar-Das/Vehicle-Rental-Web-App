import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { getClassname } from '../../Components/Utils/getClassName';

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div className='container mx-auto max-w-[1080px] w-[95%] min-h-[90vh]'>
      <h1 className='text-2xl my-4'>
        Welcome, {userInfo.name} <small>({userInfo.role})</small>
      </h1>

      <div className='sticky top-0 bg-white z-50 flex my-4 border-b border-blue-100 items-center'>
        <NavLink
          to='/admin'
          className={({ isActive }) => {
            return getClassname(isActive);
          }}
          end
        >
          Products
        </NavLink>
        <NavLink
          to='/admin/add'
          className={({ isActive }) => {
            return getClassname(isActive);
          }}
        >
          Add Product
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
export default Dashboard;
