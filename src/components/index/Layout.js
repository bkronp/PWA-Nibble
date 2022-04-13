import Navbar from "../index/navbar/Navbar";
import Fooder  from "../index/fooder/Fooder";

const Layout = ({children}) =>{
    return (
        <>
            <Navbar/>
            {children}
            <Fooder/>
        </>
    )
}

export default Layout;