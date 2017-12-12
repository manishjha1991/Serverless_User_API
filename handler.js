'use strict'
const MongoClient = require('mongodb').MongoClient;
const bluebird = require('bluebird');
const uuid = require('uuid');
const validator = require('validator');
const dateFormat = require('dateformat');
const assert = require('assert');
const now = new Date();
const bcrypt = require('bcrypt-nodejs');
const salt = bcrypt.genSaltSync(6);
var awsS3Async = require("aws-s3-async")
// ImageResizer

const AWS = require('aws-sdk');
const S3 = new AWS.S3({
  signatureVersion: 'v4',
});
const Sharp = require('sharp');

const BUCKET = "wvalpha";
const URL = "http://wvalpha.s3-website.ap-south-1.amazonaws.com";
module.exports.imageResize = async  (event, context, callback) => {
  
context.callbackWaitsForEmptyEventLoop = false;
 
const id = event.pathParameters.key;
const key = id;
// const match = key.match(/(\d+)x(\d+)\/(.*)/);
// const width = parseInt(match[1], 10);
// const height = parseInt(match[2], 10);
const width =300;
const height = 300;
const originalKey =id;


console.log("width -- "+width +'  -- HEight -- '+height +"  -- "+originalKey);

console.log("width -- "+width +'  -- HEight -- '+height +"  -- "+originalKey);


await S3.getObject({Bucket: BUCKET, Key: originalKey}).promise()
  .then(data => Sharp(data.Body)
    .resize(width, height)
    .toFormat('png')
    .toBuffer()
  )
  .then(buffer => S3.putObject({
      Body: buffer,
      Bucket: BUCKET,
      ContentType: 'image/png',
      Key: key,
    }).promise()
  )
  .then((data) => callback(null, {
      statusCode: '301',
      headers: data = {
        ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"", 
        ServerSideEncryption: "AES256", 
        VersionId: "Ri.vC6qVlA4dEnjgRV4ZHsHoFIjqEMNt"
       },
      body: '',
      
    })
  )
  .catch(err => callback(err))

 
};

