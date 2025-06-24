import React from 'react';

export default function SiteUnavailable() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    textAlign: 'center',
    padding: '20px',
  };

  const boxStyle = {
    maxWidth: '600px',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#ff4c4c',
    marginBottom: '1rem',
  };

  const textStyle = {
    fontSize: '1.1rem',
    marginBottom: '1rem',
  };

  const reasonStyle = {
    fontSize: '0.9rem',
    color: '#cccccc',
    fontStyle: 'italic',
    marginBottom: '1.5rem',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#ff4c4c',
    color: '#ffffff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '500',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={titleStyle}>Site Unavailable</h1>
        <p style={textStyle}>
          This website is currently inaccessible. Please contact the administrator for more information.
        </p>
        <p style={reasonStyle}>Reason: Payment not received from the client.</p>
        <a href="mailto:admin@example.com" style={buttonStyle}>Contact Admin</a>
      </div>
    </div>
  );
}
