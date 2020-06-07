
const user = require('../models/user');

const es6 = {
    add_note:(req,res)=>{
       const User = new user(req.body)
       User.save().then((result)=>{
        // console.log(result)
        res.status(201).send(result)
      }).catch((error)=>{
        res.status(400).send(error)
     })
    },
    view_note:(req,res)=>{
        user.find({}).then((result)=>{
            res.send(result)
        }).catch((e)=>{
            res.status(500).send(e)
        })
    },
    update_note:async(req,res)=>{
        const updates = Object.keys(req.body)
        const allowedUpdate = ['name','email','password','age']
        const isValidOperation = updates.every((update)=>allowedUpdate.includes(update))
    
        if(!isValidOperation){
            return res.status(400).send({error:'Invalid updates!'})
        }
        try{
            const update_user = await user.findById(req.params.id)
            updates.forEach((update)=>update_user[update]=req.body[update])
            await update_user.save()
            //const update_user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
            if(!update_user){
                return res.status(404).send()
            }
            res.send(update_user)
        }catch(e){
            res.status(400).send(e)
        }
    },
    delete_note:async(req,res)=>{
        try{
            const delete_user = await user.findByIdAndDelete(req.params.id)
            if(!delete_user){
                return res.status(404).send()
            }
            res.send(delete_user)
        }catch(e){
            res.status(400).send(e)
        }
    }
};

module.exports = es6