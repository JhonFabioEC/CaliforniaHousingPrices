from flask import Blueprint, jsonify, request
import pandas as pd
import joblib

api_scope = Blueprint("api", __name__)

@api_scope.route('/',methods=['POST'])
def index():
    longitude=float(request.form['longitude'])    
    latitude=float(request.form['latitude'])  
    housing_median_age=int(request.form['housing_median_age'])  
    total_rooms=int(request.form['total_rooms']) 
    total_bedrooms=int(request.form['total_bedrooms'])  
    population=int(request.form['population']) 
    households= int(request.form['households'])
    median_income=float(request.form['median_income'])  
    ocean_proximity=str(request.form['ocean_proximity'])
    bed_rooms_per_room = (total_rooms / total_bedrooms)
    
    claves=['longitude', 'latitude', 'housing_median_age', 'total_rooms', 'total_bedrooms', 'population', 'households', 'median_income', 'ocean_proximity', 'bed_rooms_per_room']
    valores=[longitude, latitude, housing_median_age, total_rooms, total_bedrooms, population, households, median_income, ocean_proximity, bed_rooms_per_room]
    
    df=pd.DataFrame([valores], columns=claves)

    path="./app/resources/decisionTree.model"
    model=joblib.load(path)
    predict=model.predict(df)

    return str(round(predict[0], 2))