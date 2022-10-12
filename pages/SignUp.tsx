import React from "react";

export function SignUp() {
  return (
    <form>
      <h2>Sign Up</h2>
      <input type="name" placeholder="Enter your name ..." />
      <input type="lastName" placeholder="Enter your lastName ... " />
      <input type="email" placeholder="Enter your email..." required />
      <input type="password" placeholder="Enter your password" required />
      <button>Sign Up</button>
    </form>
  );
}
