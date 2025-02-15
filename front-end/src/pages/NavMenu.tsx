import { Link } from "react-router-dom"

function NavMenu() {
  return (
    <div className="w-full p-4 bg-white shadow shadow-lg flex justify-between">
        <div>
            <Link to={"/dashboard"} className="text-xl font-bold p-4">Dashboard</Link>
        </div>
        <div className="p-2 bg-yellow-200 border-2 border-yellow-300 rounded font-semibod shadow-lg px-4 hover:border-yellow-400">
            <Link to={"/"} className="font-semibold text-gray-800">Login</Link>
        </div>
    </div>
   
  
  )
}

export default NavMenu