import React, { useState, useEffect } from "react";
import { withRouter, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";

//  styles
import { FormStyles } from "../../styles/components/HomeStyles";
import { LoginStyles } from "../../styles/components/MessStyles";
import { Button } from "../../styles/Shared/Button";
import { Container } from "../../styles/Shared/Container";
import { H5 } from "../../styles/Shared/StyledTypes";

const LoginForm = () => {
  const { login, currentUser } = useAuth();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleLogin = async event => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const { email, password } = event.target.elements;

      if (!email.value) throw Error("Please enter an email");
      if (!password.value) throw Error("Please enter your password");

      await login(email.value, password.value);

      history.replace("/mess");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (error) setError("");
    }, 5000);
  }, [error]);

  return (
    <FormStyles>
      <LoginStyles>
        <Container m="2rem 2rem" center>
          {currentUser ? <Redirect to="/mess" /> : null}
          <H5>Mess Login</H5>
          {error ? <div>{error}</div> : null}
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                disabled={isLoading}
                placeholder="Email"
                name="email"
                type="email"
              />
            </div>
            <div>
              <label htmlFor="email">Password</label>
              <input
                disabled={isLoading}
                placeholder="Password"
                name="password"
                type="password"
              />
            </div>

            <Button className="submitBtn" disabled={isLoading} type="submit">
              {!isLoading ? "LOG IN" : "Loading..."}
            </Button>
          </form>
        </Container>
      </LoginStyles>
    </FormStyles>
  );
};

export default withRouter(LoginForm);
