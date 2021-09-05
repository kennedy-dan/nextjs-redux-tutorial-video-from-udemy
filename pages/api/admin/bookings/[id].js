import nc from 'next-connect'
import dbConnect from '../../../../config/dbConnect'

import { deleteBooking } from '../../../../controllers/bookingControllers'

import onError from '../../../../middleware/error'
import { isAuthenticatedUser, authorizeRoles } from '../../../../middleware/auth'

const handler = nc({ onError });

dbConnect();

handler
    .use(isAuthenticatedUser, authorizeRoles('admin'))
    .delete(deleteBooking)

export default handler;