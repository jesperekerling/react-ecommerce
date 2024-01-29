import { Outlet } from "react-router-dom"
import { Navbar } from "../components/NavBar"
import Providers from "../components/Providers"

function RootLayout() {
  return (
    <Providers>
      <div className="bg-slate-700 min-h-screen">
        <Navbar />
        <div className="container m-auto">
          <Outlet />
        </div>
      </div>
    </Providers>
  )
}
export default RootLayout