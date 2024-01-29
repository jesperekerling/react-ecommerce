import { Outlet } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import Providers from "../components/Providers"

function RootLayout() {
  return (
    <Providers>
      <div className="bg-slate-700 min-h-screen">
        <NavBar />
        <div className="container m-auto">
          <Outlet />
        </div>
      </div>
    </Providers>
  )
}
export default RootLayout