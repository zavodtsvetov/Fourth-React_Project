import Select from "react-select";
import * as PayAndDelivery from "./forAppSelect4";
import s from "./App.module.css";
const productOptions = [
  { value: "tv", label: "Телевизор" },
  { value: "smartphone", label: "Смартфон" },
  { value: "laptop", label: "Ноутбук" },
];

const colorsOptions = [
  { value: "black", label: "Чёрный" },
  { value: "silver", label: "Серебряный" },
  { value: "white", label: "Белый" },
];
const AppSelect = () => {
  return (
    <>
      <div className={s.app}>
        <p style={{ color: "grey", textDecoration: "underline" }}>
          3 + 4. Select{" "}
        </p>
        <Select options={productOptions} defaultValue={productOptions[0]} />
        <Select
          isMulti={true}
          options={colorsOptions}
          defaultValue={[colorsOptions[0], colorsOptions[1]]}
        />
        <Select
          options={PayAndDelivery.paymentWays}
          defaultValue={PayAndDelivery.paymentWays[0]}
        />
        <Select
          options={PayAndDelivery.isDelivery}
          defaultValue={PayAndDelivery.isDelivery[1]}
        />
      </div>
    </>
  );
};

export default AppSelect;
