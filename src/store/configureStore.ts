import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  // @ts-expect-error TS(2339): Property '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' do... Remove this comment to see the full error message
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ));
  sagaMiddleware.run(rootSaga);
  return store;
}