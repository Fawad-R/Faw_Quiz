// import
const express = require('express');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
let path=require("path")
// db
let key='fanfalsfjasfma;omfpoamfsaomfoamsfaslfm';
// mongoose.connect('mongodb://localhost:27017/QuizMERN');
mongoose.connect('mongodb+srv://fawadrahman55:3ZawST4w41KcaIRv@cluster0.i0tepzg.mongodb.net/?retryWrites=true&w=majority');
let schema1= new mongoose.Schema({
    username:{
        type:String,
        // required:true
    },
    quizPoints:{
        type:Number,
        // required:true
    },
    question:{
        type:Number,
        // required:true
    },
    attempts:{
        type:Number,
        // required:true
    },
    earnPoints:{
        type:Number,
        // required:true
    },
    result:{
        type:String,
        // required:true
    },
  
})

let schema2=new mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    username:{
        type:String,
        // required:true
    },
    password:{
        type:String,
        // required:true
    },
    cpassword:{
        type:String,
        // required:true
    },
    token:{
        type:String,
        // required:true
    },
})
// let val = jsonwebtoken.sign({_id:this._id}, 'akfgaiuhdoqwjdqwjdndajoasjpajsf')
// this.tokens=this.tokens.concat({token:val})
// await this.save();
// return val;
schema2.methods.generateAuthToken=async function() 
{
 let val=await jsonwebtoken.sign({_id:this._id},key)    
 this.token=val;
 await this.save()
 return val;
}
// mongoose.
let Model1=new mongoose.model('user',schema1);
let Model2=new mongoose.model('register',schema2);
// app
let app=express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"./client/build")));

let Auth=async(req,res,next)=>
{
    try {
        // console.log(req.cookies.quiz);

        let authHeader=req.headers.token;
        let cookieHeader=req.cookies.quiz;
        if (authHeader||cookieHeader) {
            // let val=await   
           jsonwebtoken.verify(authHeader||cookieHeader,key,(err,user)=>{
                
                if (err) {
                   return res.status(404).send('chla ja bsdk')
                }
                req.user=user;
                next();
            })
        }
        else
        {
            res.status(404).send('Authticated error')

        }
        } catch (error) {
            
            res.status(404).send(err)
        }
    
}

// api
app.get('/secret',Auth,async(req,res)=>{
    res.send('secret hun broo')
})
app.post('/anew',Auth,async(req,res)=>{
    try {
        let val =await Model1(req.body);
        val.save();
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send(error);
    }

})
app.post('/anew/:id',Auth,async(req,res)=>{
    try {
        let id=req.params.id;
        let val2 =await Model1.findOne({_id:id});
        // let val =await Model1(req.body);
        // console.log('val',val);
        // console.log('val2',val2);
        // this.tokens=this.tokens.concat({token:val})
        // val2.concat({val})
        // "quizPoints":50,
        // "question":3,
        //  "totalQuestions":5,
        //   "earnPoints":30,
        //    "result":"passed"
        val2.quizPoints=req.body.quizPoints;
        val2.question=req.body.question;
        val2.totalQuestions=req.body.totalQuestions;
        val2.earnPoints=req.body.earnPoints;
        val2.result=req.body.result;
        val2.save();
        // console.log('updateval2',val2);
        // val.save();
        res.status(200).send(val);
    } catch (error) {
        res.status(404).send('error');
    }

})
app.get('/posts',async(req,res)=>{
    try {
        let val =await Model1.find().limit(1).sort({$natural:-1});
        res.status(200).send(val);
        // console.log(val);
    } catch (error) {
        res.status(404).send(error);
    }
})
app.get('/allposts',Auth,async(req,res)=>{
    try {
        let val =await Model1.find();
        res.status(200).send(val);
        // console.log(val);
    } catch (error) {
        res.status(404).send(error);
    }
})

//Model2 api ////////////////////////////////////////////////////////////////////////////
app.post('/reg/reg',async(req,res)=>{
// app.post('/reg',async(req,res)=>{
    try {
        let val=await Model2(req.body); 
        if (req.body.password===req.body.cpassword) 
        {
            let newpassword=await bcryptjs.hash(req.body.password,10);
            // console.log(newpassword);
            val.password=newpassword;    
            val.cpassword=newpassword;    
            // console.log(val);
            let token=await val.generateAuthToken();
            await val.save();
            res.status(200).send(val);
        }
        else
        {
            res.status(404).send('error /reg/reg');
        }
    } catch (error) {
        res.status(404).send('error /reg/reg');
    }
})
app.post('/login/login',async(req,res)=>{
    try {
        let email=req.body.email;
        let password=req.body.password;
        // let Password=req.body.Password;
        // let cpassword=req.body.cpassword;
        // let cPassword=req.body.cPassword;
        let val=await Model2.findOne({email:email});
        // console.log('tpken',token);
        // req.cookies('quiz',token);
        // res.cookie
        // console.log('req.body.password',password);
        // console.log('req.body.Password',Password);
        // console.log('req.body.cpassword',cpassword);
        // console.log('req.body.cPassword',cPassword);
        // console.log('email',email);
        // console.log('req.body',req.body);
        // console.log('val',val);
        // console.log('val.password',val.password);
        // bcryptjs.compareSync
        let newpassword=await bcryptjs.compare(req.body.password,val.password);
        // let newpassword=req.body.password===val.password;
        // console.log('newpassword',newpassword);
        if (newpassword) {
            let token=await val.generateAuthToken();
            res.cookie('quiz',token,{
                expires:new Date(Date.now()+3600*1000)
                });
            res.status(200).send('valid');
        }
        else
        {
            res.status(404).send(password);
        }
    } catch (error) {
        res.status(404).send(error);
    }
})
// app.get('/logout',async(req,res)=>{
app.get('/logout',Auth,async(req,res)=>{
    try {
        await res.clearCookie('quiz');
        // res.clearCookie('Cookies');
        res.status(200).send('LoggedOut');    
    } catch (error) {
        res.status(404).send('Please login first');    
    }
    
    // res.clearCookies
})
app.get('/user/user/:email', Auth, async (req, res) => {
    // console.log(req.params.email);
    let val = await Model2.findOne({email: req.params.email })
    try {
        // console.log('running');
        // console.log(val);
        res.status(200).send(val);
        } catch (error) {
        res.status(404).send(error);
    }
})

app.get("*",(req,res)=>{
    // res.sendFile(path.join(__dirname,"./client/build/index.html")),
     const index = path.join(__dirname,'client', 'build', 'index.html');
    //  console.log('index',index);
    res.sendFile(path.join(__dirname,'client', 'build', 'index.html')),
    function (err) {
        // console.log(err);
        res.status(500).send(err)
    }
})

// listen
let port= process.env.port || 8001;
app.listen(port,()=>{
    // console.log(`Listening to the ${port}`);
})