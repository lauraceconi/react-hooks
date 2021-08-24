import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import * as Hook from "./components"

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
              <Hook.UseStateComponent />
            </Route>
            {/* <Route path="/use-effect">
              <Hook.UseEffectComponent />
            </Route>
            <Route path="use-ref">
              <Hook.UseRefComponent />
            </Route>
            <Route path="use-callback">
              <Hook.UseCallbackComponent />
            </Route>
            <Route path="use-memo">
              <Hook.UseMemoComponent />
            </Route>
            <Route path="use-reducer">
              <Hook.UseReducerComponent />
            </Route>
            <Route path="use-layout-effect">
              <Hook.UseLayoutEffectComponent />
            </Route>
            <Route path="use-context">
              <Hook.UseContextComponent />
            </Route> */}
          </section>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
