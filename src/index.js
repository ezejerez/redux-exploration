import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

const actionIncrement = {
  type: "@counter/incremented",
};

const actionDecrement = {
  type: "@counter/decremented",
};

const actionReset = {
  type: "@counter/reseted",
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "@counter/incremented":
      return state + 1;
    case "@counter/decremented":
      return state - 1;
    case "@counter/reseted":
      return 0;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

const App = () => {
  return (
    <div className="main-container">
      <div className="state-container">{store.getState()}</div>
      <div className="buttons-container">
        <button
          className="button"
          onClick={() => {
            store.dispatch(actionIncrement);
          }}
        >
          +
        </button>
        <button
          className="button"
          onClick={() => {
            store.dispatch(actionDecrement);
          }}
        >
          -
        </button>
        <button
          className="button"
          onClick={() => {
            store.dispatch(actionReset);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

const renderApp = () =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );

renderApp();
store.subscribe(renderApp);

reportWebVitals();
