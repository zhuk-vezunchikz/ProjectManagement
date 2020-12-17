import React from 'react';
import './App.css';
import {ProjectsPage} from "./pages/projects/projects";
import {Provider} from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <div>
                  <ProjectsPage projects={store.getState().projects} users={store.getState().users}/>
              </div>

          </div>
      </Provider>
  );
}

export default App;
