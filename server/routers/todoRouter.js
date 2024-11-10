//import {pool } from '../helpers/db.js';
import { Router } from 'express';
//import { empty0rRows } from '../helpers/utils.js';
//import {auth} from '../helpers/auth.js';
import {getTasks, postTask, deleteTask} from '../controllers/TaskController.js';

const router = Router();

//router.get('/', (req, res) => {
  //pool.query('SELECT * FROM task', (error, result) => {
   // if (error) {
    //  return res.status(500).json({ error: error.message})
   // } 
  //  return res.status(200).json( result.rows)
  //})
//})
router.get('/', getTasks);

/*router.post('/create', auth,(req, res) => {
  
  

    pool.query('INSERT INTO task (description) VALUES ($1) returning *', [req.body.description],
       (error, result) => {
      if (error) {
        return res.status(500).json({ error: error.message})
      }
      return res.status(200).json({ id: result.rows[0].id})
    }
    )
    })
    */
   router.post('/create', postTask);
    /*router.delete('/delete/:id',auth, (req, res) => {
  
        const id =  parseInt(req.params.id)
        pool.query('DELETE FROM task WHERE id = $1', 
          [id], 
          (error, result) => {
          if (error) {
            return res.status(500).json({ error: error.message})
          }
          return res.status(200).json({id: id})
        })
      })
*/
        router.delete('/delete/:id', deleteTask);

        
export default router;