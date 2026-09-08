import './Hero.css';

const heroCategories = [
  { name: 'Biryani', image: '/images/biryani_1786102325140.jpg' },
  { name: 'Pizza', image: '/images/pizza_1786102363129.jpg' },
  { name: 'Burger', image: '/images/burger_1786102375077.jpg' },
  { name: 'Noodles', image: '/images/noodles_1786102348703.jpg' },
  { name: 'Drinks', image: '/images/fresh_juice_1786102336871.jpg' }
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/images/hero_bg_1786102408547.jpg" alt="Fresh ingredients" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content animate-fade-in">
        <h1 className="hero-title">
          Discover the best food & drinks in <span className="highlight">your city</span>
        </h1>
        <p className="hero-subtitle">
          Get fresh, hot, and delicious food delivered directly to your doorstep in less than 30 minutes.
        </p>
        
        <div className="hero-search">
          <input 
            type="text" 
            placeholder="Search for restaurants, cuisine or a dish..." 
            className="hero-search-input"
          />
          <button className="btn btn-primary hero-search-btn">Search</button>
        </div>

        <div className="hero-inspiration">
          <h3>What's on your mind?</h3>
          <div className="inspiration-scroll">
            {heroCategories.map(cat => (
              <div key={cat.name} className="inspiration-item">
                <div className="inspiration-img-wrapper">
                  <img src={cat.image} alt={cat.name} />
                </div>
                <span>{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
