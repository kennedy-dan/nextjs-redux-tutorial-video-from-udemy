import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { allRooms, newRooms } from "../../../controllers/roomControllers";
import { isAuthenticatedUser, authorizeRoles } from "../../../middleware/auth";

import onError from "../../../middleware/error";
const handler = nc({ onError });

dbConnect();
export const config = {
    api: {
      bodyParser: {
        sizeLimit: "10mb",
      },
    },
  };
  
handler.get(allRooms);



handler.use(isAuthenticatedUser, authorizeRoles("admin")).post(newRooms);

export default handler;
