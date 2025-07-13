import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Navbar = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '1rem 2rem',
      backgroundColor: '#ff8c00',
      color: 'white',
      boxShadow: '0 2px 10px rgba(255, 140, 0, 0.3)',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link 
          to="/dashboard" 
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            fontWeight: 'bold',
            ':hover': { textDecoration: 'underline' }
          }}
        >
          Dashboard
        </Link>
        <Link 
          to="/profile" 
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            fontWeight: 'bold',
            ':hover': { textDecoration: 'underline' }
          }}
        >
          Profile
        </Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <span style={{ fontWeight: 'bold' }}>{user?.email}</span>
        <button 
          onClick={handleLogout}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: 'white',
            color: '#ff8c00',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            ':hover': {
              backgroundColor: '#ffe6cc',
              transform: 'translateY(-1px)'
            }
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;