import { Router } from "express";

const router = Router();

router.get('/',(req,res)=>{
    if(!req.session.user) return res.redirect('/login');
    req.logger.debug("Sesion logeada con exito");           
    res.render('home',{user:req.session.user});
      
})

router.get('/register',(req,res)=>{
    if(req.session.user) return res.redirect('/');
    res.render('register');
})

router.get('/login',(req,res)=>{
    if(req.session.user) return res.redirect('/');
    res.render('login');
})

router.get('/logout',(req,res) => {
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("error")
        } else {
            res.render('login', {title:""})
        }
    })
})


router.get('/info',(req,res)=>{
    res.render('info')
})
router.get('/',(req,res)=>{
    req.logger.error("Entre al home");
    res.send("Bienvenidos");
})

router.get('/productos',(req,res)=> {
      res.render ('productos')
})

export default router;

