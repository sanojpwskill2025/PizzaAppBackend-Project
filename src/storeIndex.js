const express = require('express');
const bodyParser = require('body-parser');
    
const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
   
const app = express();
   
    app.use(bodyParser.json());
    app.use(bodyParser.text());
    app.use(bodyParser.urlencoded());
   
    app.post('/ping', (req, res) => {
     console.log(req.body);
     return res.json({message: 'Your Post data is send successfully'});
    })
   
    app.listen(ServerConfig.PORT, async () => {
      await connectDB();
       console.log(`Server started at port ${ServerConfig.PORT}`);
       
        });

/////////////////////////////////////////////////////////////////////////////////////////
Prity print

{
  "responseData": {
    "translatedText": "Ciao Mondo!",
    "match": 1
  },
  "quotaFinished": false,
  "mtLangSupported": null,
  "responseDetails": "",
  "responseStatus": 200,
  "responderId": null,
  "exception_code": null,
  "matches": [
    {
      "id": "771360776",
      "segment": "Hello World!",
      "translation": "Ciao Mondo!",
      "source": "en-GB",
      "target": "it-IT",
      "quality": 74,
      "reference": null,
      "usage-count": 2,
      "subject": "",
      "created-by": "MateCat",
      "last-updated-by": "MateCat",
      "create-date": "2025-01-11 20:23:21",
      "last-update-date": "2025-01-11 20:23:21",
      "match": 1
    }
  ]
}