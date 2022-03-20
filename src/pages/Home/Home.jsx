import React from 'react';
import Header from '../../components/Header/Header';
import LeftSide from "../../components/LeftSide/LeftSide";
import MainCont from "../../components/MainCont/MainCont";
import RightSide from '../../components/RightSide/RightSide';
//style
import './Home.css';
const Home = () => {
  return (
    <div>
         <Header />
         <div className='maincont'>
      <LeftSide/>
      <MainCont/>
      <RightSide/>
      </div>
    </div>
  )
}

export default Home