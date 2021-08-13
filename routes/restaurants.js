import { Router } from 'express'
import * as restaurantCtrl from '../controllers/restaurants.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router();

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/search/:location/:category', checkAuth, restaurantCtrl.search)
router.get('/search/:location/', checkAuth, restaurantCtrl.searchWithoutCategory)
router.get('/searchOne/:id', checkAuth, restaurantCtrl.searchOne)