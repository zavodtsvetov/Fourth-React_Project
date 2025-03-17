import { useState } from "react";
import s from "./App.module.css";
import * as yup from "yup";

export const AppValidTxt = () => {
  const [pass, setPass] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  //cоздание валидации для ввода пароля
  const passwordChangeScheme = yup
    .string()
    .matches(/^[a-z]*$/, "Пожалуйста, вводите только буквы в малом регистре.")
    .max(15, "Слишком длинный пароль!");
  //создание блюра
  const onBlurPasswordScheme = yup
    .string()
    .min(1, "Вы не ввели ничего, нечего отправлять!");

  const validAndErrorFunc = (scheme, targetValue) => {
    let errorMessage = null;
    try {
      scheme.validateSync(targetValue, { abortEarly: false });
    } catch ({ errors }) {
      errorMessage = errors.join(" А также: ");
    }
    return errorMessage;
  };

  const onPasswordChange = ({ target }) => {
    setPass(target.value);
    let error = validAndErrorFunc(passwordChangeScheme, target.value);
    setErrorLogin(error);
  };

  const onBlurPassword = ({ target }) => {
    let error = validAndErrorFunc(onBlurPasswordScheme, target.value);
    setErrorLogin(error);
  };

  const onPassSubmit = (event) => {
    event.preventDefault();
    console.log(`Ахах ваш пароль: ${pass}`);
    setPass("");
  };

  return (
    <>
      <div className={s.app}>
        <p style={{ color: "grey" }}>Пример:</p>
        <form onSubmit={onPassSubmit}>
          <input
            onBlur={onBlurPassword}
            onChange={onPasswordChange}
            type="password"
            value={pass}
          />
          <button
            disabled={errorLogin !== null || pass.length < 1}
            type="submit"
          >
            Отправить пароль
          </button>
          {errorLogin && <div style={{ color: "red" }}>{errorLogin}</div>}
        </form>
      </div>
    </>
  );
};
