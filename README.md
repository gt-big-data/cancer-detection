# ML for Cancer Detection

Cancer continues to plague our world and take the lives of our loved ones, and it is imperative that we strive to help those affected by cancer. We can look to advances in the machine learning field to guide doctors in their decisions, especially since it can catch things that the human eye often could miss. 

Our main goal will be to create a system that can help entry-level doctors or doctors with less experience/resources make more informed decisions. We have chosen to focus on breast cancer as this is one of the most prevalent forms of cancer. 

This system will determine the stage and severity of a tumor, and further provide resources to help users understand the diagnosis and formulate appropriate next steps. Equipped with support from an ML system, doctors can feel more comfortable in their diagnoses and treatment plans which means that more people can get the proper care they need.

# Team Members
Project Lead: Eshani Chauk

Analysis: Harsika Gelivi, Ronak Agarwal

Data Viz: Aryan Shah, Rama Khabbaz, Anthony Nguyen

Platform: Tae Sung Uhm, Saksham Purbey

# Subteam breakdown
## Analysis
Responsible for brainstorming, creating, and experimenting with ML models. The model takes in an image of a breast cancer tumor and predicts whether it is cancerous or not. We implement image segmentation as a first model to create a mask between the tumor and the background, then we created a second model to feed the masked image into to predict the tumor type. We completed extensive research on other approaches to this problem, and we believe that our solution is an innovative approach by utilizing CNNs with image segmentation and ANNs. All work is done in Python with Tensorflow, NumPy, and Keras. We are currently at an accuracy of 75%, and we will experiment with different hyperparameters to increase our accuracy to at least 90%.

## Data Viz
Responsible for designing and building an interactive website for users. We first prototyped a web design that is easily accessible and conveys all the information we want. It is simple for users to upload a tumor image and press a button to run the ML model so that the website can display the tumor and its severity/type prediction. Then, there is a section for further resources as one of our biggest goals is to build an educative platform. This can helps doctors decide the best next steps, especially if they are unsure or uneducated about what is the appropriate action. This team works in HTML, CSS, and Javascript and have created a React app that hosts out website and connects to a pre-trained version of the prediction model.

## Platform
Responsible for collecting and hosting data that is used in training the ML model. We have completed extensive research into the best sources for our data and have settled on the National Cancer Institute since they provide access to tumor images. This team is especially important because we need a large abundance of clean, labelled data to build and train the most accurate model. We are in the process of writing Python scripts to call into the NCI's API for this data, and we want to create our own API that is a conglomeration of different data sources. We have created an API via MongoDB and will pool all of our images into there, and then allow the Analysis team to call into this API to access all tumor images.
