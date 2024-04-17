import {
  Admin,
  Resource,
  EditGuesser,
  ShowGuesser,
  radiantLightTheme,
  radiantDarkTheme,
  ListGuesser,

} from "react-admin";

import { dataProvider } from "./dataProvider";
import {customer_creaete} from "./Customer/create_customer"
import { Show_product } from "./product/show_product";
import { create_product } from "./product/create_product";
import { list_product } from "./product/list_product";
import { list_customer } from "./Customer/list_customers";
import { update_product } from "./product/updata_product";
import { updata_customer } from "./Customer/update_customers";
import { UserShow } from "./Customer/Show_customers";
import { list_user } from "./User/list_User";
import { user_creaete } from "./User/create_User";
import { updata_User } from "./User/update_User";
import { show_user } from "./User/Show_User";
import { updata_status } from "./order/update_order";
import { list_order } from "./order/order_list";
import { OrderShow } from "./order/sho_order";
import { list_categori } from "./categori/List_categori";
import { create_categori } from "./categori/create_categori";
import { update_category } from "./categori/update_categoty";
import { Show_category } from "./categori/Show_category";
import { List_feedback } from "./feedback/list_feedback";
import { show_feedback } from "./feedback/show_feedback";
import UserIcon from '@mui/icons-material/People';
import payment from '@mui/icons-material/payment';
import category from '@mui/icons-material/CategoryOutlined';
import order from '@mui/icons-material/ProductionQuantityLimitsSharp';
import feedback from '@mui/icons-material/feedback';
import address from '@mui/icons-material/AddLocation';


import { list_address } from "./address/list_address";
import { updata_address } from "./address/update_addres";
import { list_payment } from "./payment/list_payment";
import { payment_show } from "./payment/show_payment";
import authProvider from "./authProvider";
import { List_log } from "./log/list_log";
import Dashboard from './kpi/dashbord';

export const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}theme={radiantLightTheme}darkTheme={radiantDarkTheme} >
    <Resource
      name="customers"
      list={list_customer}  
      edit={updata_customer}
      show={UserShow}
      create = {customer_creaete}
      icon={UserIcon}
      />
    <Resource
      name="users"
      list={list_user}  
      edit={updata_User}
      show={show_user}
      create = {user_creaete}
      icon={UserIcon}
      />


    <Resource
      name="product"
      list={list_product}
      edit={update_product}
      show={Show_product}
      create = {create_product}
    />
    <Resource
      name="order"
      list={list_order}
      edit={updata_status}
      show={OrderShow}
      icon={order}
    />
    <Resource
      name="category"
      list={list_categori}
      edit={update_category}
      show={Show_category}
      create = {create_categori}
      icon={category}
    />
    <Resource
      name="feedback"
      list={List_feedback}
      edit={show_feedback}
      icon={feedback}
    />
    <Resource
      name="address"
      list={list_address}
      show={ShowGuesser}
      edit={updata_address}
      icon={address}
    />
    <Resource
      name="log"
      list={List_log}
      show={ShowGuesser}
      edit={updata_address}
    />
    <Resource
      name="payment"
      list={list_payment}
      edit={payment_show}
      icon={payment}
    />
  </Admin>

);




