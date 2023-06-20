import React from 'react';
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';
import HeadingGroup from "../components/HeadingGroup/HeadingGroup";
import Sidebar from "../components/Sidebar/Sidebar";
import AppLayout from '../components/AppLayout/AppLayout';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import { useContext } from 'react';
import { CardContext } from '../context/CardContex';

const Summary = () => {
  const {cardPrice, toggleSelection} = useContext(CardContext)
  // const pagesData = [
  //   {
  //     plan: "Arcade",
  //     term: "Yearly",
  //     price: 90
  //   },
  //   {
  //     choice1: "Online Service",
  //     price: 10,
      
  //   },
  //   {
  //     choice1: "Larger storage",
  //     price: 20,
      
  //   }
  // ]
  const pagesData = {
    plan: {
      planType: "Arcade",
      term: "Yearly",
      price: 90
    },
    addons: [
      {
        add1: "online service",
        price:10
      },
      {
        add2: "larger storage",
        price:20
      }
    ]
  }
  return (
    <div className='summary'>
        <AppLayout>
        <Sidebar/>
            <MainWrapper>
            <HeadingGroup heading="Finishing up" text="Double-check everything looks OK before confirming." />
            <div className='summary-section'>
              <h1>This is Card info: {cardPrice}</h1>
              <h1>This is Toggle info: {toggleSelection}</h1>
            </div>
            
            <div class="form-btn-container">
                <Link to="/add-ons">
                <Button className="form-submit go-back-2">Go Back</Button>
                </Link> 
                <Link to="/thank-you">
                <Button className="form-submit">Confirm</Button>
                </Link> 
                </div>
            </MainWrapper>
        </AppLayout>
    </div>
  )
}

export default Summary