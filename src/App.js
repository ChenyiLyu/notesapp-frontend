import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import NotesList from './components/NotesList';
import Navbar from './components/Navbar';
import AddNote from './components/AddNote';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={NotesList} />
            <Route path="/add" component={AddNote} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

