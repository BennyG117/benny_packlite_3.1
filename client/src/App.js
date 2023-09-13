import logo from "./logo.svg";
import "./App.css";
import { StoreProvider } from "./TripContext";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Duration from "./views/Duration";
import Destination from "./views/Destination";
import Weather from "./views/Weather";
import ListSelect from "./views/ListSelect";
import PackLists from "./views/PackLists";
import TripReview from "./views/TripReview";
import Edit from "./views/Edit";
import SavedTrips from "./views/SavedTrips";
import Error from "./views/Error";
import ViewOneList from "./views/ViewOneList";

function App() {
  return (
    <div className="App">
      <h1>Benny Pack Lite 2.0</h1>
      <br />
      <StoreProvider>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/trip/duration" element={<Duration />}/>
          <Route path="/trip/destination" element={<Destination />}/>
          <Route path="/trip/weather" element={<Weather />}/>
          <Route path="/trip/listselect" element={<ListSelect />}/>
          <Route path="/trip/packlists" element={<PackLists />}/>
          <Route path="/trip/viewonelist/:id" element={<ViewOneList />}/>
          <Route path="/trip/tripreview" element={<TripReview />}/>
          <Route path="/trip/edit/:id" element={<Edit />}/>
          <Route path="/trip/savedtrips" element={<SavedTrips />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </StoreProvider>
    </div>
  );
}

export default App;
