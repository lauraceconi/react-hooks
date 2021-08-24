import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import * as Hooks from "./components"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/use-state">useState</Link>
            </li>
            <li>
              <Link to="/use-effect">useEffect</Link>
            </li>
            <li>
              <Link to="/use-ref">useRef</Link>
            </li>
            <li>
              <Link to="/use-callback">useCallback</Link>
            </li>
            <li>
              <Link to="/use-memo">useMemo</Link>
            </li>
            <li>
              <Link to="/use-reducer">useReducer</Link>
            </li>
            <li>
              <Link to="/use-layout-effect">useLayoutEffect</Link>
            </li>
            <li>
              <Link to="/use-context">useContext</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <section>
            <Route path="/use-state">
              <Hooks.UseStateComponent />
            </Route>
            <Route path="/use-effect">
              <Hooks.UseEffectComponent />
            </Route>
            {/* <Route path="use-ref">
              <Hooks.UseRefComponent />
            </Route> */}
            {/* <Route path="use-callback">
              <Hooks.UseCallbackComponent />
            </Route> */}
            {/* <Route path="use-memo">
              <Hooks.UseMemoComponent />
            </Route> */}
            {/* <Route path="use-reducer">
              <Hooks.UseReducerComponent />
            </Route> */}
            {/* <Route path="use-layout-effect">
              <Hooks.UseLayoutEffectComponent />
            </Route> */}
            {/* <Route path="use-context">
              <Hooks.UseContextComponent />
            </Route> */}
          </section>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
