import { Outlet } from "react-router-dom"
import { Navbar } from "../components/NavBar"
import Providers from "../components/Providers"

function RootLayout() {
  return (
    <Providers>
        <Navbar />
        <main className="container mx-auto text-center">
          <Outlet />
        </main> 
    </Providers>
  )
}
export default RootLayout