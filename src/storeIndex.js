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

//////////////////////////////////////////////////////////////////////////////////////////

const express = require('express'); 
//const cookieParser = require('cookieparser');

//const User = require('./schema/userSchema.js');
const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute.js');
const authRouter = require('./routes/authRoute.js');
const { isloggedIn } = require('./validation/authValidator.js');
const uploader = require('./middlewares/multerMiddleware.js');
const cloudinary = require('./config/cloudinaryConfig.js');
const fs = require('fs/promises');
//const cartRouter = require('./routes/cartRoute.js');

const app = express();

//app.use(cookieParser);
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));

 // Routing middleware
 //if your req routes with /users then handle it using userRouter
app.use('/users', userRouter); //connects the router to the server
//app.use('/carts', cartRouter);
app.use('/auth', authRouter)

app.post('/ping', (req, res) => {
  console.log(req.body);
  //console.log(req.cookies);
  return res.json({message: 'Your Post data is send successfully'});
})

app.post('/photo', uploader.single('incomingFile') , async (req, res) => {
  console.log(req.file);
  const result = await cloudinary.uploader.upload(req.file.path);
  console.log("Result from cloudinary", result);
  await fs.unlink(req.file.path);
  return res.json({message: 'Ok'});
})

app.listen(ServerConfig.PORT, async () => {
   await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}`);

    // const newUser = await User.create({
    //   email: 'sanoj5389@gmail.com',
    //   password: '123456789',
    //   firstName: 'Sanojkumar',
    //   lastName: 'Sharma',
    //   mobileNumber: '8130178522'
    // }) ;
    // console.log("Created new user");
    // console.log(newUser);
    
});

////////////////////////////////////////////////////////////////////////////////

