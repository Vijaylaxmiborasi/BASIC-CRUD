const crudeSchema = require('../crudeModelSchema')
const getUser = async(req, resp)=>{
    try{
        console.log("Get request");
        const crude = await crudeSchema.find();
        resp.json(crude);
    }
    catch(err){
        resp.send("Error"+err);
    }
    }
    const createUser = async(req, resp)=>{
        console.log(req.body);
        // const crudedata = new crudeSchema(req.body)
       
        const crudedata = new crudeSchema({
        name : req.body.name,
        email : req.body.email,
        subject : req.body.subject
        });
        try{
            const addRes = await crudedata.save();
            resp.json({
                status : "successful",
                data : addRes
            });
        }
        catch(err) {
            resp.send({
                status : "Failure",
                message : "Error Occure"+ err.message
            });
        }
    }
    const userUpdate = async (req, resp)=>{
        console.log(req.params.id);
        try{
            const crude = await crudeSchema.findByIdAndUpdate(req.params.id, req.body,{
                new:true,
                runValidators: true,
            });
            resp.json(crude);
        }
        catch(err){
            resp.send("Error"+err);
        }
    }
    const deleteUser = async(req, resp)=>{
        await crudeSchema.findByIdAndDelete(req.params.id);
        try{
            resp.status(204).send().json({
                status:"success",
                data: {},
            });
        }
        catch(err){
            resp.status(500).json({
                status : "Failed",
                message: err,
            });
        }
    }
    module.exports = {
        getUser,
        createUser,
        userUpdate,
        deleteUser
    }