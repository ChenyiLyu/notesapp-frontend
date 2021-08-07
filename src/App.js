import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import NotesList from './components/NotesList';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={NotesList}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
