import React from 'react';

const CoreValues = () => {
  return (
     
    <div style={styles.container}>
      <h2 style={styles.heading}>
        <span style={styles.highlight}>CORE</span> VALUES
      </h2>
      <p style={styles.subtext}>Trust, Integrity, Teamwork, and Inclusive Growth</p>

      <div style={styles.circleContainer}>
        <div style={styles.circle}>Trust</div>
        <div style={styles.circle}>Integrity</div>
        <div style={styles.circle}>Teamwork</div>
        <div style={styles.circle}>Inclusive Growth</div>
      </div>
    </div>

  );
};

// Inline styles
// Inline styles
const styles = {
  container: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  highlight: {
    color: '#4682B4', // Steel Blue
  },
  subtext: {
    color: '#6B7280', // Gray-600
    marginBottom: '1.5rem',
  },
  circleContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4682B4', // Steel Blue
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: 'medium',
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    textAlign: 'center',
  },
  // Responsive styles for smaller devices
  '@media (max-width: 640px)': {
    circle: {
      width: '80px',
      height: '80px',
      fontSize: '0.75rem',
    },
  },
}

export default CoreValues;
