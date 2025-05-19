import { Router } from "express";
import { UserRepository } from "../repositories/userRepository";
import { UserService } from "../services/userService";
const router = Router()

const userRepository = new UserRepository()
const userService = new UserService(userRepository)

router.get('/users', async (_req, res)=>{
    res.json(await userService.findUsers())
})
router.post('/users',async (req, res)=>{
  try{
    const {name, username, email} = req.body
    const newUser = await userService.createUser({name, username, email})
    res.json(newUser)
  }catch(e){
    res.sendStatus(400).send((e as Error).message)
  }  
})
router.get('/users/:id', async (req, res)=>{
    res.json(await userService.findUserById(req.params.id))
})
router.put('/users/:id',async (req, res)=>{
try{
    const {name, username, email} = req.body
    res.json(await userService.updateUser(req.params.id, {
      name,
      username,
      email
    }))    
}catch(err){
  res.sendStatus(400).send('name, username or email is incorrect')
}
})
router.delete('/users/:id',async (req, res)=>{
  res.json(await userService.deleteUser(req.params.id))
})
export default router