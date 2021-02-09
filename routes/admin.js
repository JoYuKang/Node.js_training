const express = require('express');
const { renderString } = require('nunjucks');

const router = express.Router();   

function testMiddleware1(req,res,next){
    console.log('첫번째 미들웨어');
    next();
}

function testMiddleware2(req,res,next){
    console.log('두번째 미들웨어');
    next();
}
router.get('/', testMiddleware1, testMiddleware2, (req,res)=>{
    res.send('admin 이후 url');
});

router.get('/products',(req,res)=>{
    //res.send('admin products');
    res.render('admin/products.html',{
        message : 'hello! node render',
        online : 'express codes'
    });
});

router.get('/products/write',(req,res) => {
    res.render('admin/write.html',{
        
    });
});

// router.post('/product/write',(req,res) => {
//     res.send(req.body.name);
// });

router.post('/products/write', ( req , res ) => {
    res.send(req.body);
});

module.exports = router;    
