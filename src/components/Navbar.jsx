import { ShoppingBag, User, Search, Menu } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ cartCount, onOpenCart, onOpenLogin, onOpenSignup }) {
  return (
    <nav className="navbar glass">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Zwiggy<span className="logo-dot">.</span></span>
        </div>
        
        <div className="navbar-search hidden-mobile">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={18} />
            <input type="text" placeholder="Search for restaurant, cuisine or a dish" className="search-input" />
          </div>
        </div>

        <div className="navbar-actions">
          <button className="nav-btn hidden-mobile" onClick={onOpenLogin}>
            <User size={20} />
            <span>Log In</span>
          </button>
          
          <button className="btn btn-primary hidden-mobile" onClick={onOpenSignup} style={{ padding: '0.5rem 1.25rem' }}>
            Sign Up
          </button>
          
          <button className="nav-btn cart-btn" onClick={onOpenCart}>
            <ShoppingBag size={20} />
            <span>Cart</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <button className="nav-btn mobile-only">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
