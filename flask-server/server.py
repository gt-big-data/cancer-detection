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

@app.route("/test", )
@app.route("/predict", methods=['POST'])
def predict():
    if request.method == 'POST':
        # we will get the file from the request
        file = request.files['file']
        # convert that to bytes
        img_bytes = file.read()
        class_id, class_name = get_prediction(image_bytes=img_bytes)
        return jsonify({'class_id': class_id, 'class_name': class_name})


model = joblib.dump("./rfModel.joblib")
loadedRf = joblib.load("./rfModel.joblib")
loadedRf.predict(Xtext)


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
    return cancerImages
if __name__ == "__main__":
    app.run(debug=True)
    
    
