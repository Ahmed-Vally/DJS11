import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function LandingPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/home'); // Navigate to the home page
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Pod-ify</h1>
      <p style={styles.description}>
        Pod-ify is the podcast web app that has all the podcasts that you could ever want and need.
      </p>
      <p style={styles.description}>
        We have a large variety of podcasts ranging from humorous to the most serious conversations you will ever listen to.
      </p>
      <button style={styles.button} onClick={handleNavigate}>
        Go to Home Page
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    padding: '0 20px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#fff', // Ensure text is visible on the GIF
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.25rem',
    color: '#fff', // Ensure text is visible on the GIF
    marginBottom: '40px',
  },
  button: {
    fontSize: '1rem',
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#2980b9',
  },
};

export default LandingPage;
