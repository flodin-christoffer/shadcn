import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";

const MainLayout = ({children}: {children: React.ReactNode}) => {
    return ( <>
     <Navbar />
        <div className="flex">
          <div className="hidden md:block h-[100vh] w-[300px]">
            <Sidebar />
          </div>
          <div className="p-5 w-full md:max-w-[1140px]">{children}</div>
        </div>
        { children }
    </> );
}
 
export default MainLayout;