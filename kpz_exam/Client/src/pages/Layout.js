import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="navbar">
        <ul className="nav-links">
          
            <Link to="/clothes">Clothes</Link>
           
        </ul>
      </div>

      <Outlet />
    </>
  )
};

export default Layout;