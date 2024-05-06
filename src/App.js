import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UseState from './routes/usestate';
import UseEffect from './routes/useeffect';
import UseContext from './routes/usecontext';
import Home from './routes/home';
import UseActionState from './routes/useactionstate';
import UseCallback from './routes/usecallback';
import UseDebugValue from './routes/usedebugvalue';
import UseDeferredValue from './routes/usedeferredvalue';
import UseId from './routes/useid';
import UseOptimistic from './routes/useoptimistic';
import UseReducer from './routes/usereducer';
import UseRef from './routes/useref';
import UseSyncExternalState from './routes/usesyncexternalstate';
import UseTranslation from './routes/usetranslation';
import UseImperativeHandle from './routes/useimperativehandle';
import UseLayoutEffect from './routes/uselayouteffect';
import UseMemo from './routes/usememo';
import UseInsertionEffect from './routes/useinsertioneffect';




function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/"  element = {<Home/>} />
          <Route path="/UseState"  element = {<UseState/>} />
          <Route path="/UseEffect" element = {<UseEffect/>} />
          <Route path="/UseContext" element = {<UseContext/>} />
          <Route path="/UseActionState" element = {<UseActionState/>} />
          <Route path="/UseCallback" element = {<UseCallback/>} />
          <Route path="/UseDebugValue" element = {<UseDebugValue/>} />
          <Route path="/UseDeferredValue" element = {<UseDeferredValue/>} />
          <Route path="/UseId" element = {<UseId/>} />
          <Route path="/UseImperativeHandle" element = {<UseImperativeHandle/>} />
          <Route path="/UseLayoutEffect" element = {<UseLayoutEffect/>} />
          <Route path="/UseMemo" element = {<UseMemo/>} />
          <Route path="/UseInsertionEffect" element = {<UseInsertionEffect/>} />
          <Route path="/UseOptimistic" element = {<UseOptimistic/>} />
          <Route path="/UseReducer" element = {<UseReducer/>} />
          <Route path="/UseRef" element = {<UseRef/>} />
          <Route path="/UseSyncExternalStore" element = {<UseSyncExternalState/>} />
          <Route path="/UseTranslation" element = {<UseTranslation/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
