import * as yup from "yup";
import { useState } from "react";
import s from "./App.module.css";

export const YupValidation = () => {
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const onChangePasswordScheme = yup
    .string()
    .matches(/^[A-Z]*$/, "Пожалуйста, введите БОЛЬШИЕ БУКВЫ");

  const validAndErrorPassword = (scheme, value) => {
    let errorMessage = null;
    try {
      scheme.validateSync(value);
    } catch ({ errors }) {
      errorMessage = errors[0];
    }
    return errorMessage;
  };

  const onChangePassword = ({ target }) => {
    setPassword(target.value);
    const error = validAndErrorPassword(onChangePasswordScheme, target.value);

    setErrorPassword(error);
  };

  return (
    <>
      <div className={s.app}>
        <br />
        <form>
          <input
            onChange={onChangePassword}
            type="text"
            value={password}
            placeholder="Введите пароль"
          />
          <button type="button"> Выслать пароль еще раз </button>
        </form>
        <div>{errorPassword}</div>
      </div>
    </>
  );
};
