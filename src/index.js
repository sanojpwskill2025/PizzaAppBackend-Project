const express = require('express'); 
//const cookieparser = require('cookieparser');

//const User = require('./schema/userSchema.js');
const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute.js');
const authRouter = require('./routes/authRoute.js');
//const cartRouter = require('./routes/cartRoute.js');

const app = express();

//app.use(cookieparser());
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