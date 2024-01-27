import dynamic from 'next/dynamic';
import { auth } from '../auth';

const Sidebar = dynamic(() => import('../ui/dashboard/sidebar/Sidebar'));
const Navbar = dynamic(() => import('../ui/dashboard/navbar/navbar'));
const Footer = dynamic(() => import('../ui/dashboard/footer/footer'));

const Layout = async ({ children }) => {
  const {user} = await auth()
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 bg-[var(--bgSoft)] p-5 min-h-screen">
        <Sidebar user={user}/>
      </div>
      <div className="w-full md:w-3/4 p-5">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;