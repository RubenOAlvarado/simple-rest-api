import { Router } from 'express';
import * as postController from './post.controller';
import { authJwt } from '../../services/auth.service';
import postValidation from './post.validations';
import validate from 'express-validation';

const routes = new Router();

routes.post('/', authJwt, validate(postValidation.createPost), postController.createPost);
routes.get('/:id', authJwt, postController.getPostById);
routes.get('/', authJwt, postController.getPostList);
routes.patch(
  '/:id',
  authJwt,
  validate(postValidation.updatePost),
  postController.updatePost,
);
routes.delete('/:id', authJwt, postController.deletePost);
routes.post('/:id/favorite', authJwt, postController.favoritePost);

export default routes;
