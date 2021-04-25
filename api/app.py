from typing import Optional
import pandas as pd
from math import cos, asin, sqrt
import yaml
from fastapi import FastAPI, Request, File, UploadFile
from firebase_admin import credentials, firestore, initialize_app
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from predict import ModelPredict
from os import remove
from predictFake import ModelPredictFake
from predict2 import ModelPredictTwo

# Initialize Firestore DB
cred = credentials.Certificate('key.json')
default_app = initialize_app(cred)
db = firestore.client()
todo_ref = db.collection('reviews')

# Load recycling bin data
coordinateList = []
with open('coordinatesList.txt', 'r') as filehandle:
    for line in filehandle:
        coordinateList.append(yaml.load(line))

# Haversine formula to calculate distance using lat and lon values
def distance(lat1, lon1, lat2, lon2):
    p = 0.017453292519943295
    a = 0.5 - cos((lat2-lat1)*p)/2 + cos(lat1*p)*cos(lat2*p) * (1-cos((lon2-lon1)*p)) / 2
    return 12742 * asin(sqrt(a))

# Used to iterate through all the bins, find the bins within the radius from location, narrow down to 5 nearest bins, add metadata to the dict and return it.
def nearestBins(radius,current):
    dic = []
    for i in coordinateList:
        dist = distance(current[0], current[1], i['lat'], i['lon'])*1000
        if dist < radius:
            parsedAddress = ""
            if i['BlockHouseNumber']:
                parsedAddress += i['BlockHouseNumber']
            if i['StreetName']:
                parsedAddress += ' '
                parsedAddress += i['StreetName']
            dic.append({int(dist):{'Address': parsedAddress,'PostalCode': i['PostalCode'],'lat':i['lat'], 'lon':i['lon']}})
    dic = sorted(dic, key=lambda d: list(d.keys()))
    if len(dic) > 5:
        dic = dic[:5]
    binId = 0
    for d in dic:
        dist = list(d.keys())[0]
        value_dict = d[dist]
        parsedAddress = value_dict['Address']
        todo = todo_ref.document(parsedAddress).get().to_dict()
        value_dict['num_ratings'] = todo['num_ratings']
        value_dict['yes'] = todo['yes']
        value_dict['no'] = todo['no']
        value_dict['ratings'] = todo['ratings']
        value_dict['id'] = binId
        binId += 1
        d[dist] = value_dict
    return sorted(dic, key=lambda d: list(d.keys()))

app = FastAPI()
origins = [
    "*",
]

# Handle CORS. Since this is just a school project, we will allow all origins and headers and methods.
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Expected data model for /radius post method
class RadiusData(BaseModel):
    radius: int
    lat: float
    lon: float

# Expected data model for /star and /yesNo
class Metadata(BaseModel):
    metadata: dict

@app.get("/")
def read_root():
    return "<h1>RecycleTree API</p>"

# Used to fetch nearest bins from user
@app.post("/radius")
def nearestBinss(data: RadiusData):
    data = data.dict()
    response = ({'bins':nearestBins(data['radius'],[data['lat'],data['lon']])})
    return (response)

# Used for updating of existence votes
@app.post("/yesNo")
def yesNo(data: Metadata):
    data = data.dict()
    data = data['metadata']
    try:
        address = data['Address']
        todo_ref.document(address).update({'yes': data['yes'], 'no':data['no'], 'num_ratings':data['num_ratings'], 'ratings':data['ratings']})
        return '200'
    except Exception as e:
        return f"An Error Occured: {e}"

# Used for updating of cleanliness ratings
@app.post("/star")
def star(data: Metadata):
    data = data.dict()
    data = data['metadata']
    try:
        address = data['Address']
        todo_ref.document(address).update({'yes': data['yes'], 'no':data['no'], 'num_ratings':data['num_ratings'], 'ratings':data['ratings']})
        return '200'
    except Exception as e:
        return f"An Error Occured: {e}"

# /predict returns a prediction of the material of the item in the image, and individual item type predictions for each of the materials.
# [str(material_num_name_dict[mat_pred_class]), str(metal_item_num_dict[metal_pred_class]), str(plastic_item_num_dict[plastic_pred_class]), str(paper_item_num_dict[paper_pred_class]), str(glass_item_num_dict[glass_pred_class]), str(others_item_num_dict[others_pred_class])]
@app.post("/predict")
async def create_upload_file(file: UploadFile = File(...)):
    if 'image' in file.content_type:
        contents = await  file.read()
        filename = 'user_' + file.filename
        with open(filename, 'wb') as f:
            f.write(contents)
        m = ModelPredict(filename).predict()
        remove(filename)
        return {"Predict": m}
    else:
        return {"Error":'Not a Valid File - Please Upload Image'}

# /predictFake returns 'Metal', 'Metal Can or Container', "Yes", "If there is any residue." 
@app.post("/predictFake")
async def create_upload_file(file: UploadFile = File(...)):
    if 'image' in file.content_type:
        contents = await  file.read()
        filename = 'user_' + file.filename
        with open(filename, 'wb') as f:
            f.write(contents)
        m = ModelPredictFake(filename).predict()
        remove(filename)
        return {"Predict": m}
    else:
        return {"Error":'Not a Valid File - Please Upload Image'}

# /predictTwo returns [material, item_type, recyclability of item in general, situations when it cant be recycled, if any]
@app.post("/predictTwo")
async def create_upload_file(file: UploadFile = File(...)):
    if 'image' in file.content_type:
        contents = await  file.read()
        filename = 'user_' + file.filename
        with open(filename, 'wb') as f:
            f.write(contents)
        m = ModelPredictTwo(filename).predict()
        remove(filename)
        return {"Predict": m}
    else:
        return {"Error":'Not a Valid File - Please Upload Image'}

