import mongoose from "mongoose";
const customerSaz3Schema = new mongoose.Schema({
  id:{
    type: String,
  },
  name:{
    type: String,
  },
  surname:{
    type: String,
  },
  customer_id:{
    type: String,
  },
  is_main_customer:{
    type: String,
  },
  ip_address:{
    type: String,
  },
  nick:{
    type: String,
  },
  mail:{
    type: String,
  },
  password:{
    type: String,
  },
  enddate:{
    type: String,
  },
  createdby:{
    type: String,
  },
  billing_id:{
    type: String,
  },
  device_id:{
    type: String,
  },
  is_multiple_session:{
    type: String,
  },
  is_loggedin:{
    type: String,
  },
  status:{
    type: String,
  },
  group_id:{
    type: String,
  },
  created:{
    type: String,
  },
  modified:{
    type: String,
  },
  payment_settings_id:{
    type: String,
  },
  category_password:{
    type: String,
  },
  user_limit:{
    type: String,
  },
  number_of_login:{
    type: String,
  },
  is_deleted:{
    type: String,
  },
  is_trail:{
    type: String,
  },
  is_paid:{
    type: String,
  },
  is_cdn:{
    type: String,
  },
  reseller_id:{
    type: String,
  }
},{versionKey:false});
const customer_saz3 = new mongoose.model("customer_saz3", customerSaz3Schema);
export default customer_saz3;
