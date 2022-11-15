import React from "react";
import cl from "classnames";
import styles from "./Form.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export const Form = () => {
  return (
    <form className={cl(styles.form)}>
      <div className={cl(styles.form_row)}>
        <div className={cl(styles.form_input)}>
          <input
            type="tel"
            className={cl(styles.form_inputItem)}
            placeholder="Ваш номер..."
          />
        </div>
        <div className={cl(styles.form_button)}>
          <FontAwesomeIcon icon={solid("mobile")} className={cl(styles.formIcon)} />
          <button className={cl(styles.form_buttonItem)}>Заказать</button>
        </div>
      </div>
    </form>
  );
};
