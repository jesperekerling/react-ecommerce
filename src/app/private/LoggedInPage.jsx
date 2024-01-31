
import DisplayUserOrders from '../../components/DisplayUserOrders'

function LoggedInPage() {
  return (
    <div>
        <h1 className='mb-10'>Welcome in, user!</h1>

        <h3 className='mb-10'>My Orders</h3>

        <DisplayUserOrders />

        

    </div>
  )
}

export default LoggedInPage