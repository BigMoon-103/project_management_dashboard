import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'user'
  });
  const { login } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
    navigate('/dashboard');
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '0 auto', 
      padding: '2rem',
      background: '#fff5e6',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(255, 165, 0, 0.2)',
      marginTop: '50px'
    }}>
      <h1 style={{
        fontFamily: '"Bungee", cursive',
        color: '#ff8c00',
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '2rem',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
      }}>PROJECT PULSE</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            color: '#ff8c00',
            fontWeight: 'bold'
          }}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '8px',
              border: '2px solid #ff8c00',
              fontSize: '1rem'
            }}
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            color: '#ff8c00',
            fontWeight: 'bold'
          }}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '8px',
              border: '2px solid #ff8c00',
              fontSize: '1rem'
            }}
          />
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            color: '#ff8c00',
            fontWeight: 'bold'
          }}>Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '8px',
              border: '2px solid #ff8c00',
              fontSize: '1rem',
              backgroundColor: 'white'
            }}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#ff8c00',
            color: 'white',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            ':hover': {
              backgroundColor: '#e67300',
              transform: 'translateY(-2px)'
            }
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e67300'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff8c00'}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;