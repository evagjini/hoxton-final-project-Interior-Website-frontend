import React, { useState } from "react";

//  a duhet te shtoj edhe current userin ketu?

export function SignIn({ signInUser }) {
  return (
    <form
      className="sign-in"
      onSubmit={(event) => {
        event.preventDefault();

        const user = {
          email: event.target.email.value,
          password: event.target.password.value,
        };
        fetch(`http://localhost:5637/sign-in`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              alert(data.error);
            } else {
              signInUser(data);
            }
          });
        console.log(user);
      }}
    >
      <h2>Sign In</h2>

      <input type="email" name="email" required />
      <input type="password" name="passwword" required />
      <button>Sign In</button>
    </form>
  );
}
