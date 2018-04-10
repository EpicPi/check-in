import { applyMiddleware, compose, createStore } from 'redux';
import reducers from '../reducers';
import reduxThunk from 'redux-thunk';

export function configureStore(initialState) {
  return createStore(
    reducers,
    initialState,
    compose(applyMiddleware(reduxThunk))
  );
}
