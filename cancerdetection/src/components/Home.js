import React from "react";
import './Home.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import cancerImage from "./cancerImage.png";
import zoomedCancer from "./zoomedCancer.png";


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

        <div class = "cancerImage">
          <img src = {cancerImage} height = "190" width = "390"></img>
        </div>

      </div>

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
    
    <div class = "informationBox">
      <svg>
        <rect>
        </rect>
      </svg>

      <div class = "infoText">
            <h3>Type of cancer: </h3>
            <h3>Malignant/benign? </h3>
            <h3>Certainty of analysis: </h3>
            <h3>Chance of recurrence: </h3>
          </div>
    </div>

    <div class = "resourcesBox">
    	<svg>
      	<rect>
        </rect>
      </svg>

      <div class = "resourcesText">
            <h3>What makes this a tumor(brief description of what makes this malignant/benign): </h3>
            <h3>Next steps: button to learn more</h3>
      </div>
      
    </div>
    
    <div class = "zoomBox">
        <svg>
          <rect>
          </rect>
        </svg>    

        <div class = "zoomedCancer">
          <img src = {zoomedCancer} height = "190" width = "390"></img>
        </div>

    </div>
    


  </div>

  );
}

