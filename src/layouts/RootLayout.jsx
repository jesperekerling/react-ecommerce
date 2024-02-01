import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navigation/NavBar"
import Providers from "../components/Providers"
import Footer from "../components/Navigation/Footer"

function RootLayout() {
  return (
    <Providers>
        <Navbar />
        <main className="p-3">
          
          <Outlet />
          
        </main>
        <Footer />
    </Providers>
  )
}
export default RootLayout