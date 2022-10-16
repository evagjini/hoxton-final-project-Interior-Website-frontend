import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//  a duhet te shtoj edhe current userin ketu?

export function SignIn({ signInUser }) {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const user = {
          email: event.target.email.value,
          password: event.target.password.value,
        };
        console.log(user);

        if (event.target.answer.value === "user") {
          fetch(`http://localhost:5000/sign-in/user`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((resp) => resp.json())
            .then((data) => {
              if (data.error) {
                alert(data.error);
              } else {
                signInUser(data);
              }
            });
          localStorage.user = "user";
        } else {
          fetch(`http://localhost:5000/sign-in/designer`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(designer),
          })
            .then((resp) => resp.json())
            .then((data) => {
              if (data.error) {
                alert(data.error);
              } else {
                signInUser(data);
              }
            });
          localStorage.user = "designer";
        }
      }}
    >
      <>
        <div>
          <h2>Sing In As : </h2>
          <h3>User</h3>
          <input name="answer" value="user" required />
          <h3>Designer</h3>
        </div>
        <input name="answer" value="designer" required />

        <h2>Sign In</h2>
        <input type="email" name="email" required />
        <input type="password" name="passwword" required />
        <button>Sign In</button>
      </>
    </form>
  );
}
