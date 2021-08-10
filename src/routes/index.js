import { Router } from 'express';

import { followersIds } from '../services/followersIds.js';
import { followersList } from '../services/followersList.js';
import { friendshipsLookup } from '../services/friendshipsLookup.js';
import { friendshipsShow } from '../services/friendshipsShow.js';
import { friendsIds } from '../services/friendsIds.js';
import { friendsList } from '../services/friendsList.js';
import { rateLimitStatus } from '../services/rateLimitStatus.js';
import { statusesUserTimeline } from '../services/statusesUserTimeline.js';
import { userSearch } from '../services/usersSearch.js';
import { userLookup } from '../services/usersLookup.js';
import { userShow } from '../services/usersShow.js';

const routes = new Router();

routes.get('/', function (req, res) {
    res.send('TW')
  })

routes.get('/followers/ids', followersIds);
routes.get('/followers/list', followersList);
routes.get('/friendships/lookup', friendshipsLookup);
routes.get('/friendships/show', friendshipsShow);
routes.get('/friends/ids', friendsIds);
routes.get('/friends/list', friendsList);
routes.get('/limits', rateLimitStatus);
routes.get('/status/timeline', statusesUserTimeline);
routes.get('/users/search', userSearch);
routes.get('/users/lookup', userLookup);
routes.get('/users/show', userShow);

export default routes;
