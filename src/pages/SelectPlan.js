import React from 'react';
import Button from '../components/Button/Button';
import HeadingGroup from "../components/HeadingGroup/HeadingGroup";
import Sidebar from "../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Arcade from "../images/icon-arcade.svg";
import Advanced from "../images/icon-advanced.svg";
import Pro from "../images/icon-pro.svg";
import Card from "../components/Card/Card";
import AppLayout from '../components/AppLayout/AppLayout';
import ToggleSection from '../components/ToggleSection/ToggleSection';
import MainWrapper from '../components/MainWrapper/MainWrapper.jsx';
import "../index.css";

const SelectPlan = () => {
  return (
    <div className='select-plan'>
          <AppLayout>
          <Sidebar/>
              <MainWrapper>
                <HeadingGroup heading="Select Your Plan" text="You have the option of monthly or yearly billing."/>
                <div className="card-container">
                  <Card />
                </div>
                <ToggleSection optionA="Montly" optionB="Yearly" />
                <div className="form-btn-container">
                <Link to="/">
                <Button className="form-submit go-back-2">Go Back</Button>
                </Link> 
                <Link to="/add-ons">
                <Button className="form-submit">Next Step</Button>
                </Link> 
                </div>
              </MainWrapper>
          </AppLayout>
    </div>
  )
}

export default SelectPlan