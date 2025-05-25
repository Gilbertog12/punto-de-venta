import { Router } from 'express'
import { healtController } from "../controller/healt.controller.js";

export const healtRouter = Router()

healtRouter.get('/:id', healtController.ping)
healtRouter.get('/', healtController.ring)