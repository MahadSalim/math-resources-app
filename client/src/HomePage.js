import React from 'react';
import Footer from './Footer';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div style={{textAlign: 'center'}}>
            <div style={{
                backgroundColor: '#f0f8ff',
                padding: '2rem',
                margin: '2rem',
                borderRadius: '5px'
            }}>
                <p style={{fontSize: '1.25rem'}}>
                    Welcome to Math Resources! We provide a platform where you can find and rate various Math resources. 
                    Whether you're searching for textbooks, worksheets, or video tutorials, we've got you covered!
                </p>
            </div>
            <p style={{fontSize: '1.1rem'}}>Click below to get started:</p>
            <Link to="/resources">
                <div style={{
                    backgroundColor: '#ffe4b5',
                    padding: '1px 50px',
                    margin: '1rem',
                    borderRadius: '5px',
                    display: 'inline-block',
                    cursor: 'pointer'
                }}>
                    <h3>RATE</h3>
                </div>
            </Link>
            <Footer/>
        </div>
        
    );
}

export default HomePage;
