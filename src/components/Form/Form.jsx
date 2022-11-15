import React from "react";
import cl from "classnames";
import styles from "./Form.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
  const NumberSchema = yup.object().shape({
    number: yup
      .number()
      .positive()
      .integer()
      .typeError("Должно быть числом")
      .required("Обязательно"),
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(NumberSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className={cl(styles.form)} onSubmit={handleSubmit(onSubmit)}>
      <div className={cl(styles.form_row)}>
        <div className={cl(styles.form_input)}>
          <input
            {...register("number")}
            type="tel"
            className={cl(styles.form_inputItem)}
            placeholder="Ваш номер..."
          />
          {errors?.number && (
            <span className={cl(styles.form_error)}>
              {errors?.number.message}
            </span>
          )}
        </div>
        <div className={cl(styles.form_button)}>
          <FontAwesomeIcon
            icon={solid("mobile")}
            className={cl(styles.formIcon)}
          />
          <button className={cl(styles.form_buttonItem)} type="submit" disabled={!isValid}>
            Заказать
          </button>
        </div>
      </div>
    </form>
  );
};
