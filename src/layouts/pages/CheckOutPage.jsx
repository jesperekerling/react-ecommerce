import { ShoppingCart } from "../../components/ShoppingCart"

function CheckOutPage() {
  return (
    <div className="mt-5">
      <div className="rounded-lg overflow-hidden">
        <h1 className="mt-5 mb-10">Shopping Cart</h1>
        <ShoppingCart isCheckOutPage />
      </div>
    </div>
  )
}
export default CheckOutPage