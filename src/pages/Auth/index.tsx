import React, { useState, FC, SyntheticEvent } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import {
  Wrapper,
  Input,
  Button,
  Paragraph,
  AuthContainer,
} from "../../components";
import { login, register } from "../../store/actions";
import { NewUser } from "../types";
// initials
const initialState: NewUser = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  password2: "",
};

export const Auth: FC = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [localError, setLocalError] = useState<string>("");

  const dispatch = useDispatch();
  const history = useHistory();

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
    setLocalError("");
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const { username, password } = form;
    if (isSignup) {
      try {
        setLocalError("All fields must be filled");
        dispatch(register(form));
        setForm(form);
        history.push("/");
      } catch (error) {}
    } else {
      try {
        if (!username || !password) {
          setLocalError("No username or password");
          return;
        }
        dispatch(login({ username, password }));
        setForm(form);
        history.push("/");
      } catch (error) {}
    }
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <AuthContainer>
      <h2>{isSignup ? "Sign up" : "Sign in"}</h2>
      <Wrapper className='user__form'>
        {localError && <Paragraph color='red'>{localError}</Paragraph>}
        <Wrapper>
          {isSignup && (
            <>
              <Wrapper>
                <Input
                  name='firstName'
                  placeholder='First name'
                  onChange={handleChange}
                />
              </Wrapper>
              <Wrapper>
                <Input
                  name='lastName'
                  placeholder='Last name'
                  onChange={handleChange}
                />
              </Wrapper>
            </>
          )}
          <Wrapper>
            <Input
              name='username'
              placeholder='Username'
              onChange={handleChange}
              type='text'
            />
          </Wrapper>
          <Wrapper className='password'>
            <Input
              name='password'
              placeholder='Password'
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
            />
            <i className='fa fa-eye' onClick={handleShowPassword}></i>
          </Wrapper>
          {isSignup && (
            <Wrapper className='password'>
              <Input
                name='password2'
                placeholder='Repeat Password'
                onChange={handleChange}
                type='password'
              />
              <i className='fa fa-eye' onClick={handleShowPassword}></i>
            </Wrapper>
          )}
        </Wrapper>
        <Button
          type='submit'
          color='var(--tertiaryColor)'
          width='100%'
          onClick={(e) => handleSubmit(e)}
        >
          {isSignup ? "Sign Up" : "Sign In"}
        </Button>

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
      </Wrapper>
    </AuthContainer>
  );
};
