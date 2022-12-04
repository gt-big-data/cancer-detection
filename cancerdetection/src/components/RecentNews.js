import React from 'react';
import { Link } from 'react-router-dom';
import './RecentNews.css';

export default function RecentNews() {
    return(
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
    );
}