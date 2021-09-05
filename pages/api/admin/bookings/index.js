import nc from 'next-connect'
import dbConnect from '../../../../config/dbConnect'

import { allAdminBookings } from '../../../../controllers/bookingControllers'

import onError from '../../../../middleware/error'
import { isAuthenticatedUser, authorizeRoles } from '../../../../middleware/auth'

const handler = nc({ onError });

dbConnect();

handler
    .use(isAuthenticatedUser, authorizeRoles('admin'))
    .get(allAdminBookings)

export default handler;