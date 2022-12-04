import React from "react";
import './Home.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import cancerImage from "./cancerImage.png";


export default function Home() {
    return (
    
  <div class = "allBoxes">
      <div class = "imageBox">
        <svg>
          <rect> 
            <h3 class = "imageText">Insert image of scan here</h3>
          </rect>
        </svg>

        <div class = "toolBar">
          <ul>
            <button>Zoom In</button>
            <button>Zoom Out</button>
            <button>Annotate</button>
          </ul>
        </div>

        <div class = "image">
          <img src = {cancerImage} height = "190" width = "390"></img>
        </div>

      </div>

    <img src = "cancerImage.png"></img>

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
    
    <div class = "informationBox">
      <svg>
        <rect>
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
      	<rect>
        	<div class = "resourcesText">
            <h3>What makes this a tumor(brief description of what makes 						this malignant/benign): </h3>
            <h3>Next steps: button to learn more</h3>
          </div>
        </rect>
      </svg>
    </div>
    
    <div class = "zoomBox">
        <svg>
          <rect>
          </rect>
        </svg>    
    </div>

  </div>

  );
}

