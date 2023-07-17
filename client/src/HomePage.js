import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import heroImage from './heroimage.png'; 

function HomePage() {
    return (
        <div style={{textAlign: 'center'}}>
            <Header />

            <div style={{
                position: 'relative',
                textAlign: 'center',
                color: 'white',
                backgroundImage: `url(${heroImage})`,
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundSize: 'cover'
            }}>
                <h1 style={{fontSize: '2.5rem', textShadow: '2px 2px 4px #000000'}}>
                    Discover, Share, and Rate Math Resources
                </h1>
                <p style={{fontSize: '1.25rem', textShadow: '1px 1px 2px #000000'}}>
                    Welcome to Math Resources! We provide a platform where you can find and rate various Math resources. 
                    Whether you're searching for textbooks, worksheets, or video tutorials, we've got you covered!
                </p>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '1rem'}}>
                {["Textbooks", "Worksheets", "Video Tutorials"].map((category, index) => (
                    <Link to="/resources" key={index} style={{width: '200px', textDecoration: 'none', color: 'inherit'}}>
                        <div style={{
                            backgroundColor: '#f0f8ff',
                            padding: '20px',
                            margin: '1rem',
                            borderRadius: '5px',
                            textAlign: 'center',
                            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
                        }}>
                            <h3>{category}</h3>
                            <p>Browse through our collection of {category.toLowerCase()}.</p>
                        </div>
                    </Link>
                ))}
            </div>

            <Footer/>
        </div>
    );
}

export default HomePage;
