import * as yup from "yup";
import { CustomContainer } from "../components";
type ErrorProps = {
  error: any;
  resetErrorBoundary: any;
};
export function ErrorFallback({ error, resetErrorBoundary }: ErrorProps) {
  let title = "During development :: Something went wrong:";
  return (
    <CustomContainer title={title}>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </CustomContainer>
  );
}

export const userSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Username is Required")
    .label("Username"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required")
    .label("Password"),
});

export const newUserSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .required("Username is Required")
    .label("Username"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  password2: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});

export const checkoutValid = () => {
  let errors = [];
  let arr = [
    "first_name",
    "last_name",
    "address",
    "zipcode",
    "email",
    "phone",
    "place",
  ];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      errors.push(`The ${arr[i]} field is missing!"`);
    }
  }
  return errors;
};
export let errors = [];
export const loginValid = (username: string, password: string) => {
  console.log(username);
  let errors = [];
  let arr = [username, password];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      errors.push(`The ${arr[i]} field is missing!"`);
    }
  }
  return errors;
};
