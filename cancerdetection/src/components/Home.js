import React from "react";
import './Home.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
//import './style.css';


export default function Home() {
    return (
        <div class = "MASTER">
        <div class = "topLeft">
      <svg>
        <rect class = "imageBox"> 
          <h3 class = "imageText">Insert image of scan here</h3>
        </rect>
      </svg>
    </div>
    
    <div class = "navBar">
    	<ul>
      	<button>Home</button>
        <button>Back</button>
        <Link to = "recentnews">
          <button>Recent news</button>
        </Link>
        <Link to = "aboutourmodel">
            <button>About our model</button>
        </Link>
      </ul>
    </div>
    
    <div class = "toolBar">
    	<ul>
      	<button>Zoom In</button>
        <button>Zoom Out</button>
        <button>Annotate</button>
      </ul>
    </div>
    
    <div class = "information">
      <svg>
        <rect class = "infoBox">
        	<div class = "infoText">
            <h3>Type of cancer: </h3>
            <h3>Malignant/benign? </h3>
            <h3>Certainty of analysis: </h3>
            <h3>Chance of recurrence: </h3>
          </div>
        </rect>
      </svg>
    </div>
    
    <div class = "resourcesBox">
    	<svg>
      	<rect class = "boxOfResources">
        	<div class = "resourcesText">
            <h3>What makes this a tumor(brief description of what makes 						this malignant/benign): </h3>
            <h3>Next steps: button to learn more</h3>
          </div>
        </rect>
      </svg>
    	
    </div>
    
    <div class = "zoomedIn">
    	<svg>
      	<circle class = "zoomCircle">
        </circle>
      </svg>    
      
    </div>
    </div>

    );
}

export const FileUploader = ({}) => {
    const [files, setFiles] = useState([]);
    const onInputChange = (e) => {
        setFiles(e.target.files)
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();

        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        axios.post('//localhost:8000/upload', data)
            .then((e) => {
                console.log('Success')
            })
            .catch((e) => {
                console.error('Error', e)
            })
    };

    return (
        <form method="post" action="#" id="#" onSubmit={onSubmit}>
            <div class="form-group files">
                <label>Upload Your Image </label>
                <input type="image"
                        onChange = {onInputChange}
                        className="form-control"
                        multiple/>
            </div>
            <button></button>
          </form>
    )
};
