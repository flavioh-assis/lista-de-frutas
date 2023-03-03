import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { AddFruit } from './pages';
import Calculate from './pages/Calculate/Calculate';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path='/'
        element={<AddFruit />}
      />
      <Route
        path='/calculate'
        element={<Calculate />}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
