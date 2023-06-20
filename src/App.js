import { Routes, Route } from "react-router";
import YourInfo from "./pages/YourInfo";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";

const App = () => {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<YourInfo/>}/>
      <Route path="/select-plan" element={<SelectPlan/>}/>
      <Route path="/add-ons" element={<AddOns/>}/>
      <Route path="/summary" element={<Summary/>}/>
      <Route path="/thank-you" element={<ThankYou/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
