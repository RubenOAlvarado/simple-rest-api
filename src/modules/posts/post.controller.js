import Post from './post.model';
import HTTPstatus from 'http-status';

export const createPost = async (req, res) => {
  try {
    const post = await Post.createPost(req.body, req.user._id);
    return res.status(HTTPstatus.CREATED).json(post);
  } catch (error) {
    return res.status(HTTPstatus.BAD_REQUEST).json(error);
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('user');
    return res.status(HTTPstatus.OK).json(post);
  } catch (error) {
    return res.status(HTTPstatus.BAD_REQUEST).json(error);
  }
};

export const getPostList = async (req, res) => {
  const limit = parseInt(req.query.limit, 0);
  const skip = parseInt(req.query.skip, 0);
  try {
    const posts = await Post.list({ limit, skip });
    return res.status(HTTPStatus.OK).json(posts);
  } catch (error) {
    return res.status(HTTPstatus.BAD_REQUEST).json(error);
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.user.equals(req.user._id))
      return res.status(HTTPstatus.UNAUTHORIZED);

    Object.keys(req.body).forEach((key) => {
      post[key] = req.body[key];
    });

    return res.status(HTTPstatus.OK).json(await post.save());
  } catch (error) {
    return res.status(HTTPstatus.BAD_REQUEST).json(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post.user.equals(req.user._id))
      return res.status(HTTPstatus.UNAUTHORIZED);

    await post.remove();
    return res.status(HTTPstatus.OK);
  } catch (error) {
    return res.status(HTTPstatus.BAD_REQUEST).json(error);
  }
};
