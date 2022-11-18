import React from "react";
import cl from "classnames";
import styles from "./Form.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { numberAction } from "../../store/slices/numberSlice";
import { numberMiddleware } from "../../store/middleware/numberMiddleware";
import axios from "axios";

export const Form = () => {
  const { status, loading, error } = useSelector((state) => state.number);
  const dispatch = useDispatch();
  console.log(status);

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
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(NumberSchema),
  });

  const onSubmit = (data) => {
    const tel = {
      id: Date.now(),
      number: data.number,
    };
    console.log('click')
    dispatch(numberMiddleware(tel));
    reset();
  };

  return (
    <div className={cl(styles.form)}>
      <form
        className={cl(styles.form_container)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={cl(styles.form_row)}>
          <div className={cl(styles.form_input)}>
            <input
              {...register("number")}
              type="tel"
              className={cl(styles.form_inputItem)}
              placeholder="Ваш номер..."
              autoComplete="off"
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
            <button className={cl(styles.form_buttonItem)} type="submit">
              Заказать
            </button>
          </div>
        </div>
      </form>
      <div className={cl(styles.form_answer)}>
        {loading && <div>Идеть загрузка...</div>}
        {status === 201 && (
          <div className={cl(styles.form_status)}>Получен ответ: {status}</div>
        )}
        {error && (
          <div className={cl(styles.form_statusError)}>
            Произошла ошибка: {error}
          </div>
        )}
      </div>
    </div>
  );
};
