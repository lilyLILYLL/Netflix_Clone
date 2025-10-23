import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config';

const SECRET_KEY = config.secret_key;

// Dummy in-memory user store (replace with DB in real app)
const users: { username: string; passwordHash: string; fullName: string }[] =
  [];
users.push({
  username: 'test@gmail.com',
  passwordHash: '$2b$10$v0NKNjnges5a09thnVVHj.8d2qreapFwROPXv4YmSI4eTbA6g1A76',
  fullName: 'Rachel Green',
});

export async function signUpController(req: Request, res: Response) {
  const { fullName, username, password } = req.body;
  console.log(fullName, username, password);

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }

  // check if a user already exists
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(409).json({ message: 'Username already existed!' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // save new user
  users.push({ fullName, username, passwordHash: hashedPassword });

  console.log(users);

  res.status(201).json({ message: 'User registerd successfully!' });
}

export async function logInController(req: Request, res: Response) {
  const { username, password } = req.body;
  console.log(username, password);

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required!' });
  }

  // find user by username
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(401).json({
      message: 'Invalid username or password!',
    });
  }

  // verify password
  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
  if (!isPasswordValid) {
    return res.status(401).json({
      message: 'Invalid username or password!',
    });
  }

  // generate token
  const token = jwt.sign({ username: user.username }, SECRET_KEY, {
    expiresIn: '1h',
  });

  // send token to client
  res.json({
    token,
    user: { username: user.username, fullName: user.fullName },
  });
}
export async function checkIfAUserExistController(req: Request, res: Response) {
  setTimeout(() => {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ message: 'Email is required!' });
    }

    const existingEmail = users.find((user) => user.username === email);

    // the email does not exist
    if (!existingEmail) {
      return res.status(200).json({ existing: false });
    }

    // the email exists
    return res.status(200).json({ existing: true });
  }, 1000);
}
