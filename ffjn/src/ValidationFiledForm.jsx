import { use, useState } from "react";
import s from "./App.module.css";
import * as yup from "yup";
import { useRef } from "react";

//сперва пишем схему валидации для yup
const loginChangeScheme = yup
  .string()
  .matches(
    /^[\w_]*$/,
    "Неверный логин.Допустимые символы - буквы, цифры, нижнее подчёркивание"
  )
  .max(20, "Логин не более 20 символов!");

const loginBlurScheme = yup
  .string()
  .min(3, "Логин должен быть не менее 3-х символов");

//валидация функция + возрвр текст ошибки
const validateAndGetErrorMessage = (scheme, value) => {
  let errorMessage = null;
  try {
    //validateSync - это синхронная проверка, abortEarly - это
    scheme.validateSync(value, { abortEarly: false });
  } catch ({ errors }) {
    //errorsMessage = errors[0] - отображать последнюю (свежайшую ошибку)
    errorMessage = errors.join("\n"); //чтобы указывтаь несколько ошибок
  }
  return errorMessage;
};

export const AppValidation = () => {
  const [login, setLogin] = useState("");
  const [loginError, setLoginError] = useState("");
  const submitButtonRef = useRef(null);
  const onLoginChange = ({ target }) => {
    setLogin(target.value);
    const error = validateAndGetErrorMessage(loginChangeScheme, target.value);

    setLoginError(error);
    if (target.value.length === 5) {
      submitButtonRef.current.focus();
    }
  };

  const onLoginBlur = () => {
    const error = validateAndGetErrorMessage(loginBlurScheme, login);
    setLoginError(error);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(login);
  };

  return (
    <>
      <br />
      <div className={s.app}>
        <p style={{ color: "grey", textDecoration: "underline" }}>
          5. Валидация полей формы
        </p>

        <form onSubmit={onSubmit}>
          <input
            onChange={onLoginChange}
            onBlur={onLoginBlur}
            type="text"
            name="login"
            value={login}
            placeholder="Ваш логин"
          />
          <button
            ref={submitButtonRef}
            disabled={loginError !== null}
            type="submit"
          >
            Отправить форму
          </button>
          {loginError && <div className={s.errorLabel}>{loginError}</div>}
        </form>
      </div>
    </>
  );
};
