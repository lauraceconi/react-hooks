import React, { memo } from "react"
import { Link } from "react-router-dom"

function Nav() {
  return (
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
          <Link to="/use-layout-effect">useLayoutEffect</Link>
        </li>
        <li>
          <Link to="/use-imperative-handler">useImperativeHandler</Link>
        </li>
        <li>
          <Link to="/use-context">useContext</Link>
        </li>
        <li>
          <Link to="/use-reducer">useReducer</Link>
        </li>
        <li>
          <Link to="/use-callback">useCallback</Link>
        </li>
        <li>
          <Link to="/use-memo">useMemo</Link>
        </li>
      </ul>
    </nav>
  )
}

export default memo(Nav)