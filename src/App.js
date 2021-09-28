import React from "react";
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import Places from "./places/pages/Places";
import Mainavigation from "./shared/components/Navigation/Mainavigation";
import Users from "./user/pages/Users";

function App() {
  return (
   <BrowserRouter>
      <Mainavigation/>
      <Switch>
      <Route path='/' exact>
      <Users/>
      </Route>
      <Route path='/places' exact>
      <Places/>
      </Route>
      <Route path='/:id/places' exact>
      <Places/>
      </Route>
      <Route path='/new/place' exact>
      <NewPlace/>
      </Route>
     <Redirect to="/"/>
     </Switch>
   </BrowserRouter>
  );
}

export default App;
