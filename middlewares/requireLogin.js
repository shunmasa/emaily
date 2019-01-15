module.exports = (req, res, next) => {
    if(!req.user){
return res.status(401).send({ error : 'you must log in'});
} 

next();
};

//no request ,something error response error ...otherwise next user continue  
//middlewares req,res,next...next means to pass next middleware 