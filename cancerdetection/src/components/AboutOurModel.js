import React from 'react';
import { Link } from 'react-router-dom';
//import { EmbedModel } from './EmbedModel';
import './AboutOurModel.css';

export default function AboutOurModel() {
    return(
        <div>
            <div class = "message">
            <svg>
                <rect class = "messageBox">
                    <h2 class = "randomText">Hi</h2>
                </rect>
            </svg>
        </div>
        
        <div>
            <div>HI</div>

            <div class = "navBar">
                <ul>
                    <Link to = "/">
                        <button>Home</button>
                    </Link>

                    <Link to = "/">
                        <button>Back</button>
                    </Link>

                    <Link to = "recentnews">
                        <button>Recent news</button>
                    </Link>

                    <Link to = "aboutourmodel">
                        <button>About our model</button>
                    </Link>
                </ul>
            </div>
            
        </div>

        </div>
        
    );
}
