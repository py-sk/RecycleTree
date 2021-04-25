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
  "cd": ["CD Disk","Yes", "Nil"],
  "drinking_straw": ["Straw","No, dispose as general waste","Nil"],
  "plastic_bag": ["Plastic Bag","Yes, if they are not oxo- and bio- degradable bags", "Contaminated with food waste/liquid waste/other forms of waste "],
  "plastic_clothes_hanger": ["Clothes Hanger","Yes", "Made up of more than one plastic, if unsure, just dispose as normal waste "],
  "plastic_container_or_bottle": ["Plastic Container or Bottle","Yes", "When they are not emptied or not rinsed "],
  "plastic_disposable": ["Disposable Cutlery","No, dispose as general waste", "Nil"],
  "plastic_packaging": ["Plastic Packaging","Yes, for things like bubble wrap and egg tray but no if directly enclosing food like cling wrap", "Contaminated with food contents "],
  "plastic_packaging_with_foil": ["Plastic Packaging With Foil","No","Nil"],
  "styrofoam": ["Styrofoam","No, dispose as general waste","Nil"]
}
glass_item_num_dict = {
  "ceramic": ["Ceramic","No, donate if can be reused", "Nil"],
  "glassware": ["Glassware","Yes","If there is liquid/solid residue inside the glassware "],
  "lightbulb": ["Lightbulb", "Could be recycled at specific collection points which can be found on onemap.sg, under Lighting waste collection points", "Nil"]
}
metal_item_num_dict = {
  "aerosol_can": ["Aerosol Can","Yes","If there are any remaining contents in the can"],
  "aluminum_tray_foil": ["Aluminium Foil or Tray","Yes","If there is any residue "],
  "metal_can_or_container": ["Metal Can or Container","Yes","If there is any residue "]
}
others_item_num_dict = {
  "battery": ["Battery","No, rechargeable batteries can be recycled through specific collection points (e-waste collection)", "Nil"],
  "electronic_waste": ["Electronic Waste","Can be recycled through specific collection points (e-waste collection)"],
  "stationery": ["Stationery","No, donate if can be reused"]
}
paper_item_num_dict = {
  "beverage_carton": ["Beverage Carton","Yes, rinsed and flattened","Nil"],
  "cardboard": ["Cardboard","Yes","Remains of other materials such as tape, contaminated with other waste"],
  "chopsticks": ["Chopsticks","No, dispose as general waste ",],
  "disposables": ["Disposables","No, dispose as general waste ",],
  "paper_bag": ["Paper Bag","Yes","Contaminated with food waste or other waste "],
  "paper_packaging": ["Paper Packaging","Yes","Made up of more than one material or contaminated with food waste"],
  "paper_product": ["Paper Product","Yes","Contaminated with other waste"],
  "paper_receipt": ["Receipt","Yes","Contaminated with other waste"],
  "paper_roll": ["Paper Roll","Yes","Contaminated with other waste"],
  "paper_sheet": ["Paper Sheet","Yes","Contaminated with other waste "],
  "tissue_box": ["Tissue Box","Yes","Plastic liners not removed or contaminated with other waste "],
  "tissue_paper": ["Tissue Paper","No, dispose as general waste","Nil"]
}

class ModelPredictTwo():
	def __init__(self, filename):
		self.filename = filename
		self.download_model()
		self.mat_learner = load_learner("materials.pkl")

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
		if mat_pred_class == 'metal':
			self.learner = load_learner("metal.pkl")
			pred_class , pred_idx, outputs = self.learner.predict(img)
			pred = metal_item_num_dict[pred_class]
		elif mat_pred_class == 'glass':
			self.learner = load_learner("glass.pkl")
			pred_class , pred_idx, outputs = self.learner.predict(img)
			pred = glass_item_num_dict[pred_class]
		elif mat_pred_class == 'paper':
			self.learner = load_learner("paper.pkl")
			pred_class , pred_idx, outputs = self.learner.predict(img)
			pred = paper_item_num_dict[pred_class]
		elif mat_pred_class == 'plastic':
			self.learner = load_learner("plastic.pkl")
			pred_class , pred_idx, outputs = self.learner.predict(img)
			pred = plastic_item_num_dict[pred_class]
		elif mat_pred_class == 'others':
			self.learner = load_learner("others.pkl")
			pred_class , pred_idx, outputs = self.learner.predict(img)
			pred = others_item_num_dict[pred_class]
		gc.collect()
		return [material_num_name_dict[str(mat_pred_class)], pred[0], pred[1], pred[2]]


if __name__=='__main__':
	print(1)

