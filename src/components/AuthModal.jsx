import { useState, useEffect } from 'react';
import { X, Mail, Lock, User } from 'lucide-react';
import './AuthModal.css';

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');

  useEffect(() => {
    if (isOpen) {
      setIsLogin(initialMode === 'login');
    }
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container glass animate-fade-in">
        <button className="close-btn modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-header">
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p>{isLogin ? 'Sign in to continue ordering' : 'Sign up to get started'}</p>
        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="input-group">
              <User className="input-icon" size={18} />
              <input type="text" placeholder="Full Name" required />
            </div>
          )}
          
          <div className="input-group">
            <Mail className="input-icon" size={18} />
            <input type="email" placeholder="Email Address" required />
          </div>
          
          <div className="input-group">
            <Lock className="input-icon" size={18} />
            <input type="password" placeholder="Password" required />
          </div>

          {isLogin && <a href="#" className="forgot-password">Forgot password?</a>}
          
          <button type="submit" className="btn btn-primary auth-btn">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="auth-switch">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Sign up' : 'Sign in'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
