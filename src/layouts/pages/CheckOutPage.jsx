import { ShoppingCart } from "../../components/ShoppingCart"

function CheckoutPage() {
  return (
    <div className="mt-10">
      <div className="rounded-lg overflow-hidden">
        <ShoppingCart isCheckoutPage />
      </div>
    </div>
  )
}
export default CheckoutPage