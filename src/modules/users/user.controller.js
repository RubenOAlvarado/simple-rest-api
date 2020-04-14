import User from './user.model';

export async function signUp(req, res){
    try {
        const user = await User.create(req.body);
        return res.status(201).json(user);
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        return res.status(500).json(error);
    }
}