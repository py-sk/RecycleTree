from fastai.vision import *
import fastai
from urllib.request import urlretrieve
from os import path
from fastai.learner import load_learner
from fastai.vision.core import PILImage
import gc

material_num_name_dict = {
  "metal": "Metal",
  "glass": "Glass",
  "paper": "Paper",
  "plastic": "Plastic",
  "others": "Others",
}
plastic_item_num_dict = {
  "cd": "CD Disk",
  "drinking_straw": "Straw",
  "plastic_bag": "Plastic Bag",
  "plastic_clothes_hanger": "Clothes Hanger",
  "plastic_container_or_bottle": "Plastic Container or Bottle",
  "plastic_disposable": "Disposable Cutlery",
  "plastic_packaging": "Plastic Packaging",
  "plastic_packaging_with_foil": "Plastic Packaging With Foil",
  "styrofoam": "Styrofoam",
}
glass_item_num_dict = {
  "ceramic": "Ceramic",
  "glassware": "Glassware",
  "lightbulb": "Lightbulb"
}
metal_item_num_dict = {
  "aerosol_can": "Aerosol Can",
  "aluminum_tray_foil": "Aluminium Foil or Tray",
  "metal_can_or_container": "Metal Can or Container",
}
others_item_num_dict = {
  "battery": "Battery",
  "electronic_waste": "Electronic Waste",
  "stationery": "Stationery",
}
paper_item_num_dict = {
  "beverage_carton": "Beverage Carton",
  "cardboard": "Cardboard",
  "chopsticks": "Chopsticks",
  "disposables": "Disposables",
  "paper_bag": "Paper Bag",
  "paper_packaging": "Paper Packaging",
  "paper_product": "Paper Product",
  "paper_receipt": "Receipt",
  "paper_roll": "Paper Roll",
  "paper_sheet": "Paper Sheet",
  "tissue_box": "Tissue Box",
  "tissue_paper": "Tissue Paper",
}

class ModelPredict():
    def __init__(self, filename):
        self.filename = filename
        self.download_model()
        self.mat_learner = load_learner("materials.pkl")
        self.metal_learner = load_learner("metal.pkl")
        self.paper_learner = load_learner("paper.pkl")
        self.plastic_learner = load_learner("plastic.pkl")
        self.glass_learner = load_learner("glass.pkl")
        self.others_learner = load_learner("others.pkl")

    def download_model(self):
        if path.exists('materials.pkl') == False:
            url = 'https://dl.dropboxusercontent.com/s/gtoj1x2sntjy3ue/materials.pkl'
            filename = 'materials.pkl'
            urlretrieve(url,filename)

        if path.exists('glass.pkl') == False:
          url = 'https://dl.dropboxusercontent.com/s/c8znfcmnf7zcn64/glass.pkl'
          filename = 'glass.pkl'
          urlretrieve(url,filename)

        if path.exists('paper.pkl') == False:
          url = 'https://dl.dropboxusercontent.com/s/5lvjwt0md5wne8a/paper.pkl'
          filename = 'paper.pkl'
          urlretrieve(url,filename)

        if path.exists('plastic.pkl') == False:
          url = 'https://dl.dropboxusercontent.com/s/tsi1i0ibp3ycuvf/plastic.pkl'
          filename = 'plastic.pkl'
          urlretrieve(url,filename)

        if path.exists('metal.pkl') == False:
            url = 'https://dl.dropboxusercontent.com/s/cp7v8fj3kfoqeax/metal.pkl'
            filename = 'metal.pkl'
            urlretrieve(url,filename)

        if path.exists('others.pkl') == False:
          url = 'https://dl.dropboxusercontent.com/s/ck61n85wtlyqvhs/others.pkl'
          filename = 'others.pkl'
          urlretrieve(url,filename)

    def predict(self):
        img = PILImage.create(self.filename)
        mat_pred_class , mat_pred_idx, mat_outputs = self.mat_learner.predict(img)
        metal_pred_class , _, _ = self.metal_learner.predict(img)
        paper_pred_class , _, _ = self.paper_learner.predict(img)
        plastic_pred_class , _, _ = self.plastic_learner.predict(img)
        glass_pred_class , _, _ = self.glass_learner.predict(img)
        others_pred_class , _, _ = self.others_learner.predict(img)
        gc.collect()
        return [str(material_num_name_dict[mat_pred_class]), str(metal_item_num_dict[metal_pred_class]), str(plastic_item_num_dict[plastic_pred_class]), str(paper_item_num_dict[paper_pred_class]), str(glass_item_num_dict[glass_pred_class]), str(others_item_num_dict[others_pred_class])]

if __name__=='__main__':
    print(1)
