# -*- coding: utf-8 -*-
"""
Created on Sun Jun 13 22:07:34 2021

@author: Maciej
"""

from flask import Flask 
from flask_sqlalchemy import SQLAlchemy 
from datetime import datetime 
import os 
basedir = os.path.abspath(os.path.dirname(__file__)) 
app = Flask(__name__) 
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'app.db') 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
db = SQLAlchemy(app) 
#modele 
class Post(db.Model): 
    id = db.Column(db.Integer, primary_key=True) 
    title = db.Column(db.String(80), nullable=False) 
    body = db.Column(db.Text, nullable=False) 
    pub_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow) 
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False) 
    category = db.relationship('Category', backref=db.backref('posts', lazy=True)) 
    def __repr__(self): 
        return '<Post %r>' % self.title
class Category(db.Model): 
    id = db.Column(db.Integer, primary_key=True) 
    name = db.Column(db.String(50), nullable=False) 
    def __repr__(self): 
        return '<Category %r>' % self.name