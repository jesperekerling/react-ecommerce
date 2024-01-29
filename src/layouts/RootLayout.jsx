import { Outlet } from "react-router-dom"
import { Navbar } from "../components/NavBar"
import Providers from "../components/Providers"

function RootLayout() {
  return (
    <Providers>
        <Navbar />
        <main>
          
          <Outlet />
          
        </main> 
    </Providers>
  )
}
export default RootLayout