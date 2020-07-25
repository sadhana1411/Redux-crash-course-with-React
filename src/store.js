import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(
  rootReducer,
  initialState,
  compose(
    /* preloadedState, */ composeEnhancers(
      applyMiddleware(...middleware)
      //window.__REDUX__DEVTOOLS__EXTENSION__ &&
      //window.__REDUX__DEVTOOLS__EXTENSION__()
      // other store enhancers if any
    )
  )
);

/*
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX__DEVTOOLS__EXTENSION__ &&
      window.__REDUX_DEVTOOLS__EXTENSION__()
  )
);
*/
export default store;
