import  { Router } from 'express';
import { createUser } from '../controllers/user-controllers';
import { listUsers } from '../controllers/user-filters-controller';
import { getUserById } from '../controllers/details-user';
import { updateUserById } from '../controllers/update-user';
import { deleteUserById } from '../controllers/delete-user';

const router: Router = Router();

router.post('/users', createUser);
router.get('/users', listUsers);
router.get('/users/:id', getUserById);
router.patch('/users/:id', updateUserById);
router.delete('/users/:id', deleteUserById);

export default router;