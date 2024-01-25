import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "@/app/ui/dashboard/sidebar/sidebar.jsx"
import Footer from "../ui/dashboard/footer/footer"

const Layout = ({children}) => {
  return (
    <div className="flex flex-col md:flex-row">
    <div className="w-full md:w-1/4 bg-[var(--bgSoft)] p-5 min-h-screen">
      <Sidebar />
    </div>
    <div className="w-full md:w-3/4 p-5">
      <Navbar />
      {children}
      <Footer />
    </div>
  </div>
  )
}

export default Layout