const express = require('express')
const cors= require('cors');
const morgan= require('morgan');
const helmet = require('helmet');


const yup= require("yup")
const {nanoid}= require('nanoid')
const monk= require('monk');
require('dotenv').config();
const db= monk(process.env.MONGO_URI);
const urls= db.get('urls');
urls.createIndex({slug: 1}, {unique:true});



const app= express();


app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());

app.use(express.json());
app.use(express.static('public'));


db.then(() => console.log('✅ MongoDB connected')).catch(console.error);

app.use((error,req,res,next)=>{
    if(error.status){
        res.status(error.status)
    }
    else{
        res.status(500);
    }
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production'? '🥞' : error.stack
});
} );


app.post('/url', async(req,res,next)=>{
    //TODO: redirect to url
    console.log('Incoming POST request to /url:', req.body);


    let {slug,url}= req.body;
    


    try{

        
        await schema.validate({
            slug, url
        });

        if(!slug){
            slug=nanoid(5);
        }
        else{
            const existing= await urls.findOne({slug});
            if (existing){
                throw new Error('slug in use 🐌')
            }
        }
        slug=slug.toLowerCase();

        


        const newUrl={
            url,slug
        };

        const created= await urls.insert(newUrl);
        res.json(created);
    }catch(error){
        next(error);

    }
});




app.get('/:id', async(req,res)=>{

    //TODO: redirect to url
    const {id: slug}= req.params;
    if (slug === 'favicon.ico') return res.status(204).end();

    try{
        const url= await urls.findOne({slug});

        if(url){
            return res.redirect(url.url);
        }
        res.redirect(`/?error=${slug} not found`)
    }catch(error){
        res.redirect(`/?error=Link not found`)

    }
    
});
app.get('/url/:id', async(req,res)=>{
    //TODO: get a short url by id
    

})




const schema= yup.object().shape({
    slug: yup.string().trim().matches(/[\w\-]/i),
    url: yup.string().trim().url().required(),


})




const port = process.env.PORT || 1337;

app.listen(port, ()=>{
    console.log(`listening at port ${port}`)
});