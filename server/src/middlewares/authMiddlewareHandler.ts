export {};
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config';

export interface AuthRequest extends Request {
  user?: any; // Attach user info here after verification
}

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res
      .status(401)
      .json({ message: 'Authorization header missing or malformed!' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, config.secret_key);
    req.user = decoded;
    next(); // user is authenticated, continue
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
  
}
