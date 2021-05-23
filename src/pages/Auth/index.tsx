import React, { useState, FC } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Formik, FormikProps } from "formik";
import { Wrapper, Input, Span, Button, AuthContainer } from "../../components";
import { login, register } from "../../store/actions";
import { UserValues } from "../types";
import { userSchema, newUserSchema } from "../../utils";

// initials
const newUserValues: UserValues = {
  email: "",
  username: "",
  password: "",
  password2: "",
};

export const Auth: FC = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showPass2, setShowPass2] = useState<boolean>(false);

  // toggle password visibility
  const handleShowPass = () => setShowPass(!showPass);
  const handleShowPass2 = () => setShowPass2(!showPass2);

  const dispatch = useDispatch();
  const history = useHistory();

  // toggle signup and signin
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPass(false);
    setShowPass2(false);
  };

  return (
    <AuthContainer>
      <Wrapper className='user__form__wrapper'>
        <h2>{isSignup ? "Sign up" : "Sign in"}</h2>
        <Formik
          validationSchema={isSignup ? newUserSchema : userSchema}
          initialValues={newUserValues}
          onSubmit={(values: UserValues, actions) => {
            isSignup ? dispatch(register(values)) : dispatch(login(values));
            history.push("/");
            setTimeout(() => {
              actions.resetForm();
              actions.setSubmitting(false);
            }, 500);
          }}
        >
          {(props: FormikProps<UserValues>) => {
            const {
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
            } = props;
            return (
              <React.Fragment>
                <form onSubmit={handleSubmit}>
                  {isSignup && (
                    <React.Fragment>
                      <Wrapper className='email'>
                        {errors.email && touched.email && (
                          <Span color='var(--nice-red)'>{errors.email}</Span>
                        )}
                        <Input
                          name='email'
                          id='email'
                          placeholder='Email'
                          value={values.email}
                          type='email'
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Wrapper>
                    </React.Fragment>
                  )}
                  <Wrapper className='username'>
                    {errors.username && touched.username && (
                      <Span color='var(--nice-red)'>{errors.username}</Span>
                    )}
                    <Input
                      name='username'
                      id='username'
                      placeholder='Username'
                      value={values.username}
                      type='text'
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Wrapper>
                  <Wrapper className='password'>
                    {errors.password && touched.password && (
                      <Span color='var(--nice-red)'>{errors.password}</Span>
                    )}
                    <Input
                      name='password'
                      id='password'
                      placeholder='Password'
                      value={values.password}
                      type={showPass ? "text" : "password"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <i
                      className={showPass ? "fa fa-eye-slash" : "fa fa-eye"}
                      aria-hidden='true'
                      onClick={handleShowPass}
                    ></i>
                  </Wrapper>
                  {isSignup && (
                    <Wrapper className='password'>
                      {errors.password2 && touched.password2 && (
                        <Span color='var(--nice-red)'>{errors.password2}</Span>
                      )}
                      <Input
                        name='password2'
                        id='password2'
                        placeholder='Confirm Password'
                        value={values.password2}
                        type={showPass2 ? "text" : "password"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <i
                        className={showPass2 ? "fa fa-eye-slash" : "fa fa-eye"}
                        aria-hidden='true'
                        onClick={handleShowPass2}
                      ></i>
                    </Wrapper>
                  )}
                  <Wrapper>
                    <Button
                      type='submit'
                      color='var(--tertiary)'
                      width='100%'
                      bg='var(--nice-yellow)'
                      uppercase='uppercase'
                      bold='bold'
                      disabled={isSubmitting}
                    >
                      {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                  </Wrapper>
                </form>
                <Wrapper>
                  <Button
                    width='100%'
                    color='var(--tertiary)'
                    bg='var(--nice-yellow)'
                    onClick={switchMode}
                  >
                    {isSignup
                      ? "Already have an account? Sign in"
                      : "Don't have an account? Sign Up"}
                  </Button>
                </Wrapper>
              </React.Fragment>
            );
          }}
        </Formik>
      </Wrapper>
    </AuthContainer>
  );
};
