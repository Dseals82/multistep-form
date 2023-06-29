import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import HeadingGroup from '../components/HeadingGroup/HeadingGroup';
import Sidebar from '../components/Sidebar/Sidebar';
import AppLayout from "../components/AppLayout/AppLayout";
import MainWrapper from '../components/MainWrapper/MainWrapper';
import AddonsOption from '../components/AddonsOption/AddonsOption';


const AddOns = () => {
   const addOnsData = [
    {
      id: 1,
      heading: "Online service",
      text: "Access to multiplayer games",
      price: 10,
      isChecked: false
    },
    {
      id: 2,
      heading: "Larger storage",
      text: "Extra 1Tb of cloud save",
      price: 20,
      isChecked: false
    },
    {
      id: 3,
      heading: "Customizable profile",
      text: "Custom them on your profile",
      price: 20,
      isChecked: false
    }
  ];

  return (
    <div className='add-ons'>
        <AppLayout>
        <Sidebar/>
            <MainWrapper>
              <HeadingGroup heading="Pick add-Ons" text="Add-ons help enhance your gaming experience." />
              <AddonsOption options={addOnsData} />
              <div className="form-btn-container">
                <Link to="/select-plan">
                <Button className="form-submit go-back-2">Go Back</Button>
                </Link> 
                <Link to="/summary">
                <Button className="form-submit">Next Step</Button>
                </Link> 
                </div>
            </MainWrapper>
        </AppLayout>
    </div>
  )
}

export default AddOns