import React from 'react';
import Footer from './Footer';
import Header from './Header';

function ResourcesPage() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100vh',
            color: '#000',
            textAlign: 'center'
        }}>
            <Header style={{backgroundColor: '#f0f8ff'}}/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexGrow: 1
            }}>
                <div style={{
                    backgroundColor: '#d3d3d3',
                    padding: '2rem',
                    width: '10.5%',
                    marginRight: '1rem'
                }}>
                    <p style={{fontSize: '1rem', textAlign: 'left'}}>Sort By:</p>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <div>
                            <input type='checkbox' id='questions' name='questions'/>
                            <label htmlFor='questions'>Questions</label>
                        </div>
                        <div>
                            <input type='checkbox' id='textbooks' name='textbooks'/>
                            <label htmlFor='textbooks'>Textbooks</label>
                        </div>
                        <div>
                            <input type='checkbox' id='videos' name='videos'/>
                            <label htmlFor='videos'>Videos</label>
                        </div>
                        <div>
                            <input type='checkbox' id='worksheets' name='worksheets'/>
                            <label htmlFor='worksheets'>Worksheets</label>
                        </div>
                    </div>
                    <p style={{fontSize: '1rem', textAlign: 'left', marginTop: '1rem'}}>Sort By (genre):</p>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <div>
                            <input type='checkbox' id='calculus' name='calculus'/>
                            <label htmlFor='calculus'>Calculus</label>
                        </div>
                        <div>
                            <input type='checkbox' id='algebra' name='algebra'/>
                            <label htmlFor='algebra'>Algebra</label>
                        </div>
                        <div>
                            <input type='checkbox' id='probability' name='probability'/>
                            <label htmlFor='probability'>Probability</label>
                        </div>
                        <div>
                            <input type='checkbox' id='geometry' name='geometry'/>
                            <label htmlFor='geometry'>Geometry</label>
                        </div>
                        <div>
                            <input type='checkbox' id='arithmetic' name='arithmetic'/>
                            <label htmlFor='arithmetic'>Arithmetic</label>
                        </div>
                        <div>
                            <input type='checkbox' id='statistics' name='statistics'/>
                            <label htmlFor='statistics'>Statistics</label>
                        </div>
                    </div>
                    <p style={{fontSize: '1rem', textAlign: 'left', marginTop: '1rem'}}>Sort By (difficulty):</p>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <div>
                            <input type='checkbox' id='easy' name='easy'/>
                            <label htmlFor='easy'>Easy</label>
                        </div>
                        <div>
                            <input type='checkbox' id='medium' name='medium'/>
                            <label htmlFor='medium'>Medium</label>
                        </div>
                        <div>
                            <input type='checkbox' id='hard' name='hard'/>
                            <label htmlFor='hard'>Hard</label>
                        </div>
                    </div>
                </div>
                <div style={{
                    backgroundColor: '#ADD8E6',
                    padding: '2rem',
                    flexGrow: 1
                }}>
                    <table style={{
                        width: '100%',
                        textAlign: 'center',
                        borderCollapse: 'collapse'
                    }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Resource Type</th>
                                <th>Difficulty level</th>
                                <th>Genre</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Here will be the list of resources */}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ResourcesPage;
