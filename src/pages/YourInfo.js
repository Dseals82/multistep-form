import HeadingGroup from "../components/HeadingGroup/HeadingGroup";
import Sidebar from "../components/Sidebar/Sidebar";
import Form from "../components/Form/Form";
import AppLayout from "../components/AppLayout/AppLayout";
import MainWrapper from "../components/MainWrapper/MainWrapper";

const YourInfo = () => {
    return (
          <AppLayout>
          <Sidebar/>
              <MainWrapper>
                <HeadingGroup heading="Personal info" text="Please provide your name, email address, and phone number."/>
                <Form/>
              </MainWrapper>
          </AppLayout>
      );
}

export default YourInfo;