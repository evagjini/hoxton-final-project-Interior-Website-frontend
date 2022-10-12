import React, { useState } from "react";

export function SignUp({ signInUser }) {
  return (
    <form
      className="sign-in"
      onSubmit={(event) => {
        event.preventDefault();

        const user = {
          name: event.target.name.value,
          lastName: event.target.lastName.value,
          email: event.target.email.value,
          password: event.target.password.value,
        };
        fetch(`http://localhost:5637/sign-up`, {
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
      <h2>Sign Up</h2>
      <input type="name" placeholder="Enter your name ..." />
      <input type="lastName" placeholder="Enter your lastName ... " />
      <input type="email" placeholder="Enter your email..." required />
      <input type="password" placeholder="Enter your password" required />
      <button>Sign Up</button>
    </form>
  );
}
