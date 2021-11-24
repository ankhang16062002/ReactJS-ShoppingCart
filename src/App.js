import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './App.scss';
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import Routes from './configs/Routes';
import {store} from './redux/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Route 
          render = {props => (
            <div className = 'App'>
              <Header props = {props} />
              <Routes />
              <Footer />
              <ProductModal />
            </div>
          )}
        />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
