import React from 'react';
import Header from '../components/Header';
import HomePhoto from '../assets/img/home.jpg';
import Music from '../components/Music';
import About from '../components/About';
import Gigs from '../components/Gigs';



class Home extends React.Component {
    
    render() {


        const bannerStyles = {
            backgroundImage: `url('${HomePhoto}')`,
            boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.2)',
            height: '100vh',
            width: '100%',
            backgroundSize: 'cover'
        };

        const contentStyles = { 
            margin: `00px auto`, 
            maxWidth: '70vw', 
            padding: `0 1rem` 
        }

        return (
            <div>

                
                <div>
                    <div style={bannerStyles}>
                        <Header />
                    </div>
                    <div style={contentStyles}>
                        <Music />
                        <hr/>
                        <About />
                        <hr/>
                        <h1>Gigs</h1>
                        <Gigs />
                    </div>
                    
                </div>
            </div>

        );
    }
}

export default Home;