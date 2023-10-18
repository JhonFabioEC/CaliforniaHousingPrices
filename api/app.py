from flask import Flask,request,jsonify 
import numpy as np
import pandas as pd
import joblib
from flask_cors import CORS

app=Flask(__name__)
CORS(app)

@app.route('/',methods=['POST'])
def index():
    longitude=float(request.form['longitude'])    
    latitude=float(request.form['latitude'])  
    housing_median_age=float(request.form['housing_median_age'])  
    total_rooms=float(request.form['total_rooms']) 
    total_bedrooms=float(request.form['total_bedrooms'])  
    population=float(request.form['population']) 
    households= float(request.form['households'])
    median_income=float(request.form['median_income'])  
    ocean_proximity=str(request.form['ocean_proximity'])
    bed_rooms_per_room = (total_rooms / total_bedrooms)
    
    claves=['longitude', 'latitude', 'housing_median_age', 'total_rooms', 'total_bedrooms', 'population', 'households', 'median_income', 'ocean_proximity', 'bed_rooms_per_room']
    valores=[longitude, latitude, housing_median_age, total_rooms, total_bedrooms, population, households, median_income, ocean_proximity, bed_rooms_per_room]
    #valores_test = [-121.88, 37.46, 5.0, 1819.0, 245.0, 802.0, 228.0, 10.9722, '<1H OCEAN', 0.13468938977460143]

    df=pd.DataFrame([valores], columns=claves)

    path="forestCalifornia.model"
    model_forest_reg=joblib.load(path)
    predict=model_forest_reg.predict(df)

    return str(round(predict[0], 2))