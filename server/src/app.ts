import express from 'express';
import { signUpController, logInController } from './controllers';
import { authMiddleware } from './middlewares';

const cors = require('cors');

const app = express();
const router = express.Router();
// Or allow all origins (development only)
app.use(cors());

app.use(express.json());
app.use('/', router);

router.post('/signup', signUpController);
router.post('/login', logInController);

export default app;
