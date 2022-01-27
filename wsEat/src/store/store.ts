import {
  AnyAction,
  applyMiddleware,
  compose,
  createStore,
  Dispatch,
  Middleware,
} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

const loggerMiddleware = createLogger();

const middleware: Middleware<{}, any, Dispatch<AnyAction>>[] = [thunk];

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  middleware.push(loggerMiddleware);
}
export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware)),
);
