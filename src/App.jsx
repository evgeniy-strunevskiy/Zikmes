import cl from "classnames"
import styles from './App.module.scss'
import { Router } from "./components/Router/Router"



export const App = () => {
  return(
    <div className={cl(styles.app)}>
      <Router />
    </div>
  )
}