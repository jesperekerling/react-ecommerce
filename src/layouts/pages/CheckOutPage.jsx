import { ShoppingCart } from "../../components/ShoppingCart"

function CheckoutPage() {
  return (
    <div className="mt-5">
      <div className="rounded-lg overflow-hidden">
        <h1>Shopping Cart</h1>
        <ShoppingCart isCheckoutPage />
      </div>
    </div>
  )
}
export default CheckoutPage