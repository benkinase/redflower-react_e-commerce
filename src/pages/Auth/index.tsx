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
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const dispatch = useDispatch();
  const history = useHistory();

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
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
            setTimeout(() => {
              actions.resetForm();
              actions.setSubmitting(false);
              history.push("/");
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
                    <>
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
                    </>
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
                      type={showPassword ? "text" : "password"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <i className='fa fa-eye' onClick={handleShowPassword}></i>
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
                        type={showPassword ? "text" : "password"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <i className='fa fa-eye' onClick={handleShowPassword}></i>
                    </Wrapper>
                  )}
                  <Wrapper>
                    <Button
                      type='submit'
                      color='var(--tertiaryColor)'
                      width='100%'
                      disabled={isSubmitting}
                    >
                      {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                  </Wrapper>
                </form>
                <Wrapper>
                  <Button
                    width='100%'
                    color='var(--tertiaryColor)'
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
