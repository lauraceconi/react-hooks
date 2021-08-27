import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Nav from "./Nav"
import * as Hooks from "./components"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <section>
            <Route path="/use-state">
              <Hooks.UseStateComponent />
            </Route>
            <Route path="/use-effect">
              <Hooks.UseEffectComponent />
            </Route>
            <Route path="/use-ref">
              <Hooks.UseRefComponent />
            </Route>
            <Route path="/use-layout-effect">
              <Hooks.UseLayoutEffectComponent />
            </Route>
            <Route path="/use-imperative-handler">
              <Hooks.UseImperativeHandlerComponent />
            </Route>
            <Route path="/use-context">
              <Hooks.UseContextComponent />
            </Route>
            {/* <Route path="/use-reducer">
              <Hooks.UseReducerComponent />
            </Route> */}
            {/* <Route path="/use-callback">
              <Hooks.UseCallbackComponent />
            </Route> */}
            {/* <Route path="/use-memo">
              <Hooks.UseMemoComponent />
            </Route> */}
          </section>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
