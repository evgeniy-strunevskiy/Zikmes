import React from 'react'
import cl from "classnames"
import styles from './Form.module.scss'

export const Form = () => {
  return (
    <form className={cl(styles.form)}>
      <div className={cl(styles.form_row)}>
        <div className={cl(styles.form_input)}>
          <input type="tel" className={cl(styles.form_inputItem)} placeholder='Ваш номер...' />
        </div>
        <div className={cl(styles.form_button)}>
          <button className={cl(styles.form_buttonItem)}>Заказать</button>
        </div>
      </div>
    </form>
  )
}
