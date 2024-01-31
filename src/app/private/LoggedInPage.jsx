import { useAuth } from '../../contexts/authContext';
import DisplayUserOrders from '../../components/DisplayUserOrders'
import { Link } from 'react-router-dom';

function LoggedInPage() {
  const { token } = useAuth();
  
  if (!token) {
    return <p>You must be <Link to='/login' className='font-bold'>logged in</Link> to view this page.</p>;
  }

  return (
    <div>
      <h1 className='m-10'>Welcome in, user!</h1>
      <h2 className='mb-10 font-bold text-xl'>My Orders</h2>
      <DisplayUserOrders />
    </div>
  );
}

export default LoggedInPage