import { serve, setup } from 'swagger-ui-express';
import { noCache } from './../middlewares/no-cache';
import swaggerConfig from '../../main/docs'
import { Express } from 'express'

export default (app: Express): void => {
  app.use('/api-docs', noCache, serve, setup(swaggerConfig))
}