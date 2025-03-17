import s from "./App.module.css";
import { useState } from "react";
import { useStore } from "./useStore.JSX";
const sendData = (formatData) => {
  console.log(formatData);
};

const App = () => {
  const [value, setValue] = useState(""); //это урок 1
  const { getState, updateState, resetState } = useStore();

  const onSubmit = (event) => {
    event.preventDefault();
    sendData(getState());
    resetState();
  };

  const { login, email, password } = getState();

  const onChange = ({ target }) => updateState(target.name, target.value);
  return (
    <>
      <div className={s.app}>
        <div>
          {" "}
          1 Контролируемые и неконтролируемые формы
          <input type="checkbox" />
          <div className={s.content}>Контент</div>
          <br />
          <input
            onChange={({ target }) => setValue(target.value)}
            type="text"
            value={value}
          />
        </div>

        <div>
          2. Множество форм
          <form onSubmit={onSubmit}>
            <input
              onChange={onChange}
              type="text"
              name="login"
              placeholder="Логин"
              value={login}
            />
            <input
              onChange={onChange}
              type="email"
              name="email"
              placeholder="Почта"
              value={email}
            />
            <input
              onChange={({ target }) => updateState("password", target.value)}
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
            />
            <br />
            <button onClick={resetState} type="button">
              Cбросить всё
            </button>
            <button type="submit">Отправить данные в консоль!</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
