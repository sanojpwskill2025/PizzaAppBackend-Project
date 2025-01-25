const express = require('express');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute');
const cartRouter = require('./routes/cartRoute');
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const serverConfig = require('./config/serverConfig');
//const User = require('./schema/userSchema');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// Routing middleware
// if your req route starts with /users then handle it using userRouter
app.use('/users', userRouter); // connects the router to the server
app.use('/carts', cartRouter);
app.use('/auth', authRouter);
app.use('/products', productRouter);
app.get('/ping', (req, res) => {
    // controller
    console.log(req.body);
    console.log(req.cookies);
    return res.json({message: "pong"});
});

app.listen(serverConfig.PORT, async () => {
    await connectDB();
    console.log(`Server started at port ${serverConfig.PORT}...!!`);

    
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});
