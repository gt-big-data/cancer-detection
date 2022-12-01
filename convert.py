import pydicom as dicom
import os
import cv2
# make it True if you want in PNG format
PNG = False
# Specify the .dcm folder path
folder_path = "test/"
# Specify the output jpg/png folder path
jpg_folder_path = "./png/" 

n = 0
for root, _, files in os.walk('.'):
    for image in files:
        if ".dcm" not in image:
            continue
        print(os.path.join(jpg_folder_path, root, image))
        ds = dicom.dcmread(os.path.join(root, image))
        pixel_array_numpy = ds.pixel_array
        if PNG == False:
            image = image.replace('.dcm', '.jpg')
        else:
            image = image.replace('.dcm', '.png')
        os.makedirs(os.path.join(jpg_folder_path, root,), exist_ok=True)
        if not cv2.imwrite(os.path.join(jpg_folder_path, root, image), pixel_array_numpy):
            raise Exception("pls im tired")

        n += 1
        if n % 50 == 0:
            print('{} image converted'.format(n))

    