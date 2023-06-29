import React from 'react';
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';
import HeadingGroup from "../components/HeadingGroup/HeadingGroup";
import Sidebar from "../components/Sidebar/Sidebar";
import AppLayout from '../components/AppLayout/AppLayout';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import { useState, useContext } from 'react';
import { CardContext } from '../context/CardContext';
import { AddonsContext } from '../context/AddonsContext';

const Summary = () => {
  // const [addonsTotal, setAddonsTotal] = useState(0);
  const [overallTotal, setOveralTotal] = useState(0);
  const {cardPrice, toggleSelection} = useContext(CardContext)
  const {addonsDisplay} = useContext(AddonsContext)
  const addonsTotal = addonsDisplay.reduce((acc,curr)=>{
    return acc + curr.price
  },0)
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
  let total = cardPrice + addonsTotal;
  // setOveralTotal(total)
  console.log("testing: ", addonsTotal)
  return (
    <div className='summary'>
        <AppLayout>
        <Sidebar/>
            <MainWrapper>
            <HeadingGroup heading="Finishing up" text="Double-check everything looks OK before confirming." />
            <div className='summary-section'>
              <h1>This is Card info: {cardPrice}</h1>
              <h1>This is Toggle info: {toggleSelection}</h1>
              <h1>Add ons</h1>:
              <ul style={{listStyle:"none"}}>
                {
                  addonsDisplay.map((addon)=>{
                    const {heading, price} = addon;
                    console.log(price)
                    return (
                      <li>
                        <h3>{heading}</h3>
                        <p>{price}</p>
                      </li>
                    )
                  })
                }
              </ul>
              <h1>Total: {total}</h1>
            </div>
            
            <div className="form-btn-container">
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