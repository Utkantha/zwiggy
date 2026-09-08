import { useState } from 'react';
import { Star, Clock } from 'lucide-react';
import { foodItems, categories } from '../data';
import './FoodMenu.css';

export default function FoodMenu({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [vegOnly, setVegOnly] = useState(false);

  const filteredItems = foodItems.filter(item => {
    const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
    const vegMatch = !vegOnly || item.isVeg;
    return categoryMatch && vegMatch;
  });

  return (
    <section className="food-menu container">
      <div className="menu-header">
        <h2 className="menu-title">Explore our Best Menu</h2>
      </div>

      <div className="filter-container">
        <div className="category-filter">
          {categories.map((cat) => (
            <button 
              key={cat}
              className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="veg-toggle-container">
          <span className="veg-label">Veg Only</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={vegOnly} 
              onChange={(e) => setVegOnly(e.target.checked)} 
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className="food-grid">
        {filteredItems.map((item, index) => (
          <div 
            key={item.id} 
            className={`food-card animate-fade-in`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="food-img-wrapper">
              <img src={item.image} alt={item.name} className="food-img" />
              <div className="food-time">
                <Clock size={14} />
                <span>{item.time}</span>
              </div>
            </div>
            
            <div className="food-content">
              <div className="food-header">
                <div className="food-name-container">
                  <div className={`diet-icon ${item.isVeg ? 'veg' : 'non-veg'}`}>
                    <div className="diet-dot"></div>
                  </div>
                  <h3 className="food-name">{item.name}</h3>
                </div>
                <div className="food-rating">
                  <Star size={16} fill="currentColor" />
                  <span>{item.rating}</span>
                </div>
              </div>
              
              <p className="food-desc">{item.description}</p>
              
              <div className="food-footer">
                <span className="food-price">₹{item.price.toFixed(2)}</span>
                <button className="btn btn-primary add-btn" onClick={() => onAddToCart(item)}>
                  Add +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
