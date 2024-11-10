import { pool } from '../helpers/db.js'
import { Router} from 'express'
//import { emptyOrRows } from '../helpers/utils.js'
import { auth } from '../helpers/auth.js'
import {getTasks,postTask, deleteTask} from '../controllers/TaskController.js'

const router = Router()

router.get('/',getTasks)

router.post('/create',postTask)

router.delete('/delete/:id',deleteTask)

export default router;