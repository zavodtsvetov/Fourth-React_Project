import { useState } from "react";

//функция для работы с состоянием, помещаем начальное состояние
//useStore это хук, по сути это та же ф-ция, внутри себя он принимает другие хуки
export const useStore = () => {
  const sendData = (formatData) => {
    console.log(formatData);
  };

  //помещаем в переменную начальное состояние всех наших инпутов
  const initialState = {
    login: "",
    email: "",
    password: "",
  };
  const [state, setState] = useState(initialState);
  return {
    // получаем текущее состояние
    getState: () => state,
    // обновляем состояние, принимает имя поля и новое значение внутри этого поля
    updateState: (fieldName, newValue) => {
      setState({ ...state, [fieldName]: newValue });
    },
    //ф-ция для сброса всех полей, надо добавить в 38 строку
    resetState: () => {
      setState(initialState);
    },
  };
};
