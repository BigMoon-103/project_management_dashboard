import { useParams } from 'react-router-dom';

// We'll reuse the same projects array from Dashboard
const projects = [
  { id: 1, title: 'Website Redesign', description: 'Redesign company website with modern look', details: 'This project involves updating the website to use React and improve user experience.' },
  { id: 2, title: 'Mobile App Development', description: 'Build a cross-platform mobile application', details: 'The app will be developed using React Native and should support both iOS and Android.' },
  { id: 3, title: 'Database Migration', description: 'Migrate from MySQL to PostgreSQL', details: 'This is a critical migration that needs to be completed with zero downtime.' },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{project.title}</h1>
      <h3>{project.description}</h3>
      <p>{project.details}</p>
    </div>
  );
};

export default ProjectDetails;