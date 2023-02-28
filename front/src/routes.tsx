import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { AddFruit } from './pages';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path='/'
        element={<AddFruit />}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;

