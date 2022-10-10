import express from 'express'
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from '../controlles/hotels.js';
import Hotel from '../models/Hotel.js';
import { createError } from '../utlis/error.js';
  import { verifyAdmin } from '../utlis/verifyToken.js';
const router =express.Router();
router.post("/", verifyAdmin,createHotel)
//update
router.put("/:id", verifyAdmin ,updateHotel)

 // delete 
 router.delete("/:id",  verifyAdmin,deleteHotel)
  

 // get 

 router.get("/find/:id",getHotel)
router.get("/", getHotels)

router.get("/countByCity", countByCity);
router.get("/countByType",countByType);
router.get("/room/:id", getHotelRooms);




   export default router