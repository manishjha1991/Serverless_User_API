# Serverless MongoDB Rest API with Mongodb Atlas 

This example demonstrate how to use a MongoDB database with aws and serverless.

Using Mongodb Atlas.

## Use Cases

- NoSQL CRUD API

## Setup

```
npm install
serverless deploy
```

## Usage

In `handler.js` update the `atlas_connection_uri` with your mongoDB Atlas connection.

*Create*

```bash
curl -XPOST -H "Content-type: application/json" 
-d '{"first_name" : "Manish","last_name" : "Jha","email_id" : "jha@xelpmoc.in","contact_number" : "9555137014","image_url":"","test_flag":false,"password":"123456","description":"Hello Serverless","label":"SH-12","response":"DisAgree"}'
'https://d53se7r9mj.execute-api.us-east-1.amazonaws.com/dev/user'
```
```json
{
  "id": "590b52ff086041000142cedd",
  "User":{
            "user_id":"20fd68e0-7602-11e7-b742-bb5ee1a78fb7",
            "last_name":"Jha",
            "email_id":"bajpai@xelpmoc.in",
            "contact_number":"9555137014",
            "image_url":"",
            "user_creation_date":"3:08:37 PM UTC",
            "test_flag":false,
            "password":"$2a$06$WT5wXBezbZS7xP8JQpPKQO6YB8O6nYlb.UGqezL6MWbryhNKBSuJ.",
            "test":[
              {"test_id":"21007620-7602-11e7-b742-bb5ee1a78fb7",
                "questions":
                    [
                      {"question_id":"21007621-7602-11e7-b742-bb5ee1a78fb7","description":"Hello Serverless","label":"SH-12","response":"DisAgree"}
                    ]
              }
                  ]
        },
    "tokenId":""    
}
```

*READ*

```bash
curl -XGET -H "Content-type: application/json" 'https://d53se7r9mj.execute-api.us-east-1.amazonaws.com/dev/user/2cf53d00-75fb-11e7-aef3-395a318c46d6'
```
```json
{
          "_id": "597f3c4b25114380d4d35f75",
          "user_id": "2cf53d00-75fb-11e7-aef3-395a318c46d6",
          "first_name": "William",
          "last_name": "Smith",
          "email_id": "manish@xelpmoc.in",
          "contact_number": "9555137014",
          "image_url": "",
          "user_creation_date": "2:18:50 PM UTC",
          "test_flag": true,
          "password": "$2a$06$WjXet1WqF3gfMr8SNfB.2.s8ZEKqnIE8TwHeyjirQZu/yD/Ruugaq",
          "test": [
                    {
                    "test_id": "2cf982c0-75fb-11e7-aef3-395a318c46d6",
                    "questions": [
                                    {
                                    "question_id": "2cf982c1-75fb-11e7-aef3-395a318c46d6",
                                    "description": "Hello how are you",
                                    "label": "CH-12",
                                    "response": "Agree"
                                    }
                               ]
                    }
                ]
}
```

*UPDATE*

```bash
curl -XPUT -H "Content-type: application/json" -d '{ "first_name" : "William","last_name" : "Smith" , "contact_number":"8826358821"}' 'd53se7r9mj.execute-api.us-east-1.amazonaws.com/dev/user/2cf53d00-75fb-11e7-aef3-395a318c46d6'
```
```json
{
  "id":"2cf53d00-75fb-11e7-aef3-395a318c46d6",
  "User":
    { 
      "first_name":"William",
      "last_name":"Smith",
      "contact_number":"9555137014",
      "test_flag":true
      }
}

```
*CHECKLOGIN*

```bash
curl -XPOST -H "Content-type: application/json" -d '{"email_id" : "manish@xelpmoc.in","password" : "123456"}' 'https://d53se7r9mj.execute-api.us-east-1.amazonaws.com/dev/userCheck'

```

```json
{
  "id":"2cf53d00-75fb-11e7-aef3-395a318c46d6",
          "_id": "597f3c4b25114380d4d35f75",
          "user_id": "2cf53d00-75fb-11e7-aef3-395a318c46d6",
          "first_name": "William",
          "last_name": "Smith",
          "email_id": "manish@xelpmoc.in",
          "contact_number": "9555137014",
          "image_url": "",
          "user_creation_date": "2:18:50 PM UTC",
          "test_flag": true,
          "password": "$2a$06$WjXet1WqF3gfMr8SNfB.2.s8ZEKqnIE8TwHeyjirQZu/yD/Ruugaq",
          "test": [
                    {
                    "test_id": "2cf982c0-75fb-11e7-aef3-395a318c46d6",
                    "questions": [
                                    {
                                    "question_id": "2cf982c1-75fb-11e7-aef3-395a318c46d6",
                                    "description": "Hello how are you",
                                    "label": "CH-12",
                                    "response": "Agree"
                                    }
                               ]
                    }
                ]
}
```


*DELETE*

```bash
curl -XDELETE -H "Content-type: application/json" 'https://d53se7r9mj.execute-api.us-east-1.amazonaws.com/dev/user/2cf53d00-75fb-11e7-aef3-395a318c46d6'
```

```json
"Ok"
```
