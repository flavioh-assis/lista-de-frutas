import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { Calculate, ManageFruit } from './pages';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path='/'
        element={<ManageFruit />}
      />
      <Route
        path='/calculate'
        element={<Calculate />}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
