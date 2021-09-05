import nc from 'next-connect'
import dbConnect from '../../../../config/dbConnect'

import { allAdminUsers } from '../../../../controllers/authControllers'

import onError from '../../../../middleware/error'
import { isAuthenticatedUser, authorizeRoles } from '../../../../middleware/auth'

const handler = nc({ onError });

dbConnect();

handler
    .use(isAuthenticatedUser, authorizeRoles('admin'))
    .get(allAdminUsers)

export default handler;