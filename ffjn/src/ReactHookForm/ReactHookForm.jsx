import s from "../App.module.css";
import { useForm } from "react-hook-form";

export const AppHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
    },
  });
  const loginProps = {
    minLength: { value: 3, message: "Не менее 3 символов" },
    maxLength: { value: 20, message: "Не более 20 символов" },
    pattern: { value: /^[w_]*$/, message: "Букввы, цифры или `_`" },
  };
  const loginError = errors.login?.message;
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <div>
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="login" type="text" {...register("login", loginProps)} />
          <button disabled={loginError !== null} type="submit">
            Send
          </button>
          {loginError && <div> {loginError}</div>}
        </form>
      </div>
    </>
  );
};
