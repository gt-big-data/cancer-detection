# from flask import Flask, jsonify

from flask import Flask, request, Response, jsonify
from flask_cors import CORS

import torch
from torch import nn
import torchvision.transforms as transforms
import torch.nn.functional as F
import numpy as np
import joblib

app = Flask(__name__)

@app.route("/predict", methods=['POST'])
def predict():
    return jsonify({'class_id': 'IMAGE_NET_XXX', 'class_name': 'Cat'})


loadedRf = joblib.load("./rfModel.joblib")
loadedRf.predict(Xtest)


def clean(): 
    #data processing
    rootdir = Path('/content/cancer-detection/Dataset_BUSI_with_GT')
    images = []
    labels = []

    #os.walk to traverse files in python

    for subdir, dirs, files in os.walk(rootdir):
    #subdirectory, directory, file partition in the root directory
        for file in files:
            #traversing through each file
            if file.endswith(').png'):
                #the parantheses to just get the scans, not the masks
                full_path = os.path.join(subdir, file)

                #create image from full path, size is 150 by 150
                img = PILImage.create(full_path)

                #resize and grayscale
                img = img.resize((150,150))
                grayImg = ImageOps.grayscale(img)

                #flatten images to 1d array, add to images array
                images.append(np.array(grayImg).flatten()/255)

                #add respective label

                if 'benign' in full_path:
                    labels.append(0)
                elif 'malignant' in full_path:
                    labels.append(1)
                elif 'normal' in full_path:
                    labels.append(2)

    cancerImages = np.array(images)
if __name__ == "__main__":
    app.run(debug=True)
    
    
