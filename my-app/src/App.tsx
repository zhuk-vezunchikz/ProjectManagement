import React from 'react';
import './App.css';
import {ProjectsPage} from "./pages/projects/projects";
import store from "./redux/store";
import {Provider} from "react-redux";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <div>
                  <ProjectsPage projects={store.getState().projects}/>
              </div>

          </div>
      </Provider>
  );
}

export default App;
