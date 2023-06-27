import React from 'react';
import Footer from './Footer';

function ResourcesPage() {
    return (
        <div style={{textAlign: 'center'}}>
            <div style={{
                backgroundColor: '#f0f8ff',
                padding: '2rem',
                margin: '2rem',
                borderRadius: '5px'
            }}>
                <p style={{fontSize: '1.25rem'}}>
                    This is the resources page. It will display math resources here soon.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default ResourcesPage;
