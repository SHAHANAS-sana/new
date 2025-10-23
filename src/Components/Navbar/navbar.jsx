import { House } from 'lucide-react';
import { Info } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="main-nav">
        <div className="navbar">
          <img src="icon-img.png" className="logo" />
          <div className="board">
            <h1 className="alr">Alrams</h1>
            <h4>Furniture & Interior</h4>
          </div>
          <div className="rigth">
            <Link className="nav" to="/">
              <House className='nav-icon' /> Home
            </Link>
            <Link className="nav" to="/about">
             <Info className='nav-icon'/> About
            </Link>
             <Link className="nav" to="/products">
             <ShoppingCart className='nav-icon' /> Products
            </Link>
          </div>
        </div>
        <div className="line">
          <></>
        </div>
        <div className="rooms">
          <Link className="nav" to="/livingroom">
            Living Room
          </Link>
          <Link className="nav" to="/bedroom">
            Bed Room
          </Link>
          <Link className="nav" to="/diningroom">
            Dining Room
          </Link>
          <Link className="nav" to="/homeoffice">
            Home Office
          </Link>
          <Link className="nav" to="/kidsfurnitures">
            Kids Furnitures
          </Link>
          <Link className="nav" to="/plastichairs">
            Plastic Chairs
          </Link>
          <Link className="nav" to="/utility">
            Utility
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
