import React from 'react'
import moneybag from "../assets/shopping-bag.png";
import list from "../assets/list.png";
import wallet from "../assets/wallet.png";
import dollar from "../assets/dollar.png";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import "./mainpage.css";
import Productdetails from './productdetails';
import Products from '../product';
import { BarChart, Bar, PieChart, Pie, ResponsiveContainer, XAxis } from 'recharts';


const Productinfo = (product) => {
  return (
    <Productdetails 
      productimage = {product.productimage}
      productinfo = {product.productinfo}
      productdescription = {product.productdescription}
      stock = {product.stock}
      price = {product.price}
      totalsales = {product.totalsales}
    />
  )
}

const data = [
  {
    name: 'Jan',
    percentage: 40,
  },
  {
    name: 'Feb',
    percentage: 60,
  },
  {
    name: 'Mar',
    percentage: 90,
  },
  {
    name: 'Apr',
    percentage: 50,
  },
  {
    name: 'May',
    percentage: 20,
  },
  {
    name: 'June',
    percentage: 100,
  },
  {
    name: 'July',
    percentage: 70,
  },
  {
    name: 'Aug',
    percentage: 60,
  },
  {
    name: 'Sept',
    percentage: 30,
  },
  {
    name: 'Oct',
    percentage: 90,
  },
  {
    name: 'Nov',
    percentage: 40,
  },
  {
    name: 'Dec',
    percentage: 80,
  },
];

const piedata = [
  { name: 'A1', value: 65 },
  { name: 'A2', value: 180 },
  { name: 'B1', value: 115 },
];

const Mainpage = () => {

  return (
    <div className='mainpage'>
      <div className='firstcolumn'>
        <h2 className='welcomename'>Hello <span> Sharuk </span> 👋,</h2>
        <input className='searchbar' placeholder=' Search' />
      </div>
        <div className='secondcolumn'>
          <div className='topoverview'>
            <div className='icons earning'>  
            <img className='icon' src={dollar} alt='earning Icon'/>
            </div>
            <div>
            <p className='topcontent'>Earnings</p>
            <h3 className='topprice'> $ 198k</h3>
            <p className='topreview'> <span className='uparrow'> ↑ 37.8%</span> this month</p>
            </div>
          </div>
          <div className='topoverview'>
            <div className='icons list'> 
            <img className='icon' src={list} alt='list Icon' />
            </div>
            <div>
            <p className='topcontent'>Orders</p>
            <h3 className='topprice'> $ 2.4k</h3>
            <p className='topreview'> <span> ↓ 37.8%</span> this month</p>
            </div>
          </div>
          <div className='topoverview'>
            <div className='icons wallet'> 
            <img className='icon' src={wallet} alt='wallet Icon' />
            </div>
            <div>
            <p className='topcontent'>Balance</p>
            <h3 className='topprice'> $ 3.5k</h3>
            <p className='topreview'> <span className='uparrow'> ↑ 37.8%</span> this month</p>
            </div>
          </div>
          <div className='topoverview'>
            <div className='icons salesbag'> 
            <img className='icon' src={moneybag} alt='moneybag Icon' />
            </div>
            <div>
            <p className='topcontent'>Total Sales</p>
            <h3 className='topprice'> $ 80k</h3>
            <p className='topreview'> <span> ↓ 37.8%</span> this month</p>
            </div>
          </div>
        </div>  
          <div className='thirdcolumn'>
            <div className='overview'>
            <div className='overviewnav'>
              <p className='head'>Overview <br /> <span>Monthly Earnings</span> </p>
              <p className='period'>Quarterly &nbsp; <KeyboardArrowDownOutlinedIcon /> </p>
              </div>
              <div>
              <ResponsiveContainer width="100%" height="100%" aspect={3}>
              <BarChart  data={data} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
              <XAxis axisLine={false} dataKey="name" fontSize={13} />
              <Bar dataKey="percentage" fill="rgba(53, 162, 159, 0.8)" radius={8}/>
            </BarChart>
            </ResponsiveContainer>
              </div>
            </div>
            <div className='customersbuy'>
              <p>Customers <br /> <span >Customer that buy product </span> </p>
              <ResponsiveContainer width="100%" height="35%" aspect={1}>
                <PieChart width={200} height={200}>
                  <Pie data={piedata} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill= "#610C9F" label /> 
                </PieChart>
              </ResponsiveContainer>
              <p className='piediagram'>65% <br /> <span> Total New Customers</span></p>
            </div>
          </div>
            <div className='fourthcolumn'>
              <div className='productsell'>
                <p>Product Sell</p>
                <div className='searchrow'>
                <input className='searchbar' placeholder='Search'/>
                <p>Last 30 days &nbsp; <KeyboardArrowDownOutlinedIcon /></p>
                </div>
              </div>
                <div className='productbar'>
                  <p>Product Name</p>
                  <div className='listofheading'>
                  <p>Stock</p>
                  <p>Price</p>
                  <p>Total Sales</p>
                  </div>
                </div>
                <div>
                  {Products.map(Productinfo)}
                </div>

            </div>
    </div>
  )
}

export default Mainpage;
