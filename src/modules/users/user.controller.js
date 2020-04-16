import User from './user.model';
import HTTPstatus from 'http-status';

export const signUp = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(HTTPstatus.CREATED).json(user);
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
    return res.status(HTTPstatus.BAD_REQUEST).json(error);
  }
};

export const login = (req, res, next) => {
  res.status(HTTPstatus.OK).json(req.user.toAuthJSON());
  return next();
};
