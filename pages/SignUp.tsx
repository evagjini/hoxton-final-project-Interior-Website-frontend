import React, { useState } from "react";
type Props = {
  signInUser: (data: any) => void;
};

export function SignUp({ signInUser }: Props) {
  return (
    <form
      className="sign-in"
      onSubmit={(event) => {
        event.preventDefault();

        const user = {
          //@ts-ignore
          name: event.target.name.value,
          //@ts-ignore
          lastName: event.target.lastName.value,
          // @ts-ignore
          email: event.target.email.value,
          //@ts-ignore
          password: event.target.password.value,
        };
        fetch(`http://localhost:5637/sign-up/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
      <input type="text" name="name" placeholder="Enter your name ..." />
      <input
        type="text"
        name="lastName"
        placeholder="Enter your lastName ... "
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your email..."
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
