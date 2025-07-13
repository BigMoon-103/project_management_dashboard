import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const projects = [
  { id: 1, title: 'Website Redesign', description: 'Redesign company website with modern look', details: 'This project involves updating the website to use React and improve user experience.' },
  { id: 2, title: 'Mobile App Development', description: 'Build a cross-platform mobile application', details: 'The app will be developed using React Native and should support both iOS and Android.' },
  { id: 3, title: 'Database Migration', description: 'Migrate from MySQL to PostgreSQL', details: 'This is a critical migration that needs to be completed with zero downtime.' },
];

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ 
        color: '#ff8c00',
        fontFamily: '"Bungee", cursive',
        marginBottom: '1.5rem'
      }}>
        Welcome back, {user?.name}!
      </h1>
      <h2 style={{ color: '#333', marginBottom: '1rem' }}>Your Projects</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {projects.map(project => (
          <div 
            key={project.id} 
            style={{ 
              border: '2px solid #ff8c00',
              padding: '1.5rem', 
              borderRadius: '12px',
              backgroundColor: '#fff5e6',
              transition: 'transform 0.2s ease',
              ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 5px 15px rgba(255, 140, 0, 0.2)'
              }
            }}
          >
            <h3 style={{ 
              color: '#ff8c00',
              marginTop: '0',
              marginBottom: '0.5rem'
            }}>
              {project.title}
            </h3>
            <p style={{ 
              color: '#666',
              marginBottom: '1rem'
            }}>
              {project.description}
            </p>
            <Link 
              to={`/projects/${project.id}`}
              style={{
                color: '#ff8c00',
                fontWeight: 'bold',
                textDecoration: 'none',
                ':hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;