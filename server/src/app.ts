import express from 'express';
import { signUpController, logInController } from './controllers';
import { authMiddleware } from './middlewares';

const app = express();
const router = express.Router();

app.use(express.json());
app.use('/', router);

router.post('/signup', signUpController);
router.post('/login', logInController);

export default app;
