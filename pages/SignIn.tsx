import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//  a duhet te shtoj edhe current userin ketu?

// type Props = {
//     signInUser:
// }
export function SignIn({ signInUser, signInDesigner }) {
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
          fetch(`http://localhost:5637/sign-in/user`, {
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
          const designer = {
            email: event.target.email.value,
            password: event.target.password.value,
          };

          fetch(`http://localhost:5637/sign-in/designer`, {
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
                signInDesigner(data);
              }
            });
          localStorage.designer = "designer";
        }
      }}
    >
      <>
        <div>
          <h2>Sing In As : </h2>
          <select name="answer">
            <option value="user">User</option>
            <option value="designer">Designer</option>
          </select>
        </div>

        <h2>Sign In</h2>
        <input type="email" name="email" required />
        <input type="password" name="password" required />
        <button onChange={() => {}}>Sign In</button>
      </>
    </form>
  );
}
