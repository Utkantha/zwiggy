import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FoodMenu from './components/FoodMenu';
import Cart from './components/Cart';
import AuthModal from './components/AuthModal';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-container">
      <Navbar 
        cartCount={cartItemCount} 
        onOpenCart={() => setIsCartOpen(true)} 
        onOpenLogin={() => { setIsAuthOpen(true); setAuthMode('login'); }}
        onOpenSignup={() => { setIsAuthOpen(true); setAuthMode('signup'); }}
      />
      
      <main>
        <Hero />
        <FoodMenu onAddToCart={handleAddToCart} />
      </main>

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
      />
      
      <footer style={{ textAlign: 'center', padding: '2rem', color: '#6b7280', borderTop: '1px solid #e5e7eb' }}>
        <p>&copy; 2026 Zwiggy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
