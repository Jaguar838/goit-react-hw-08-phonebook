import { Route, Switch } from 'react-router-dom';
import { NotFoundView } from 'views';
// import { ROUTE_PATHS } from 'services/route-paths';

const App = () => {
  return (
    <>
      <Switch>
        {/* <Route path={ROUTE_PATHS._()} exact component={ContactsView} /> */}
        <Route component={NotFoundView} />
      </Switch>
      <p>Hi!</p>
    </>
  );
};

export default App;

// state = {
//   contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],
//   filter: '',
//   name: '',
//   number: ''
// }
