const {
    request
} = require("express");
const express = require('express');
const chai = require('chai');
const req = require('supertest');
const {
    expect
} = require("chai");
const app = express();
describe('POST Create New Patient Account', () => {
    it('it should create patient account successfully', () => {
        req(app).post('/registerpatient').send({
            'email': 'khush@gmail.com',
            'password': "hello",
            'confirm_password': "hello",
            'username': "kk11",
            'first_name': 'Khush',
            'last_name': 'Kothari',
            'age': 19,
            'height': 172,
            'weight': 59
        }).expect(200).then((res) => {
            expect(res.headers.location).to.be.eql('/registerpatient');
        })
    })
})