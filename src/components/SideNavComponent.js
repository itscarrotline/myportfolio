import React from "react";
import "../sidebar.css";
import { SideNavData } from './SideNavData';

function NavBar() {
  return (
    <div className="Sidenav col text-right"> 
      <ul className="SidenavLinks">
        {SideNavData.map((val, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                window.location.pathname = val.path;
              }}
              className={val.className}
            >
              <div>
                {val.title}
              </div>
            </li>
          );
        })}
        </ul>
    </div>
  );
}


export default NavBar;

// import { Nav, NavItem } from 'reactstrap';
// import { Link } from 'react-router-dom';

// const NavBar = () => (
//   <div className="container-fluid Sidenav">
//     <div className="col-2 offset-2 text-right flex">
//       <Nav vertical className="flex-column align-self-center">
//         <NavItem>
//           <Link to="/home">Home</Link>
//         </NavItem>
//         <NavItem>
//           <Link to="/about">About</Link>
//         </NavItem>
//         <NavItem>
//           <Link to="/fashiondesigns">Fashion</Link>
//         </NavItem>
//         <NavItem>
//           <Link to="/photography">Photography</Link>
//         </NavItem>
//       </Nav>
//     </div>
//   </div>
// );
