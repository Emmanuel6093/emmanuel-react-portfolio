import React from 'react'; 
import HeroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
    return ( 
    <div name='home'>
        <div>
            <div>
                <h2>
                    I'm a Full Stack Developer
                </h2>
                <p>
                    My name is Emmanuel, I love coding. 
                </p>

                <div>
                    <button>
                        Portfolio
                        <span>
                            <MdOutlineKeyboardArrowRight />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    );
}; 

export default Home;