import express from 'express';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

// index = list objects , show = show 1 object, create = create , update = update, delete = delete

const routes = express.Router();
const pointsController = new PointsController();
const itensController = new ItemsController();

routes.get('/items', itensController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;