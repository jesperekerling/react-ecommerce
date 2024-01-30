import { Outlet } from "react-router-dom"
import { Navbar } from "../components/NavBar"
import Providers from "../components/Providers"
import Footer from "../components/Footer"

function RootLayout() {
  return (
    <Providers>
        <Navbar />
        <main>
          
          <Outlet />
          
        </main>
        <Footer />
    </Providers>
  )
}
export default RootLayout