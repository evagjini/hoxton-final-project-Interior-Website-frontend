import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//  a duhet te shtoj edhe current userin ketu?

type Props = {
  signInUser: (data: any) => void;
  signInDesigner: (data: any) => void;
};
export function SignIn({ signInUser, signInDesigner }: Props) {
  const navigate = useNavigate();
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form
          className="space-y-6"
          onSubmit={(event) => {
            event.preventDefault();

            const user = {
              //@ts-ignore
              email: event.target.email.value,
              //@ts-ignore
              password: event.target.password.value,
            };
            console.log(user);
            //@ts-ignore
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
                    navigate("/blog");
                  }
                });
              localStorage.user = "user";
            } else {
              const designer = {
                //@ts-ignore
                email: event.target.email.value,
                //@ts-ignore
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
                    navigate("/designer");
                  }
                });
              localStorage.designer = "designer";
            }
          }}
        >
          <div className="flex flex-col justify-center py-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-5">
                Sing In As{" "}
              </h2>
              <select name="answer">
                <option value="user" className="font-bold  text-blue-500">
                  <h2 className="text-blue-500 font-medium">User</h2>
                </option>
                <option value="designer" className="font-bold  text-blue-500">
                  Designer
                </option>
              </select>
            </div>

            {/* <h2>Sign In</h2> */}
            <div>
              <input
                className="w-full rounded-md border border-blue-300 p-2 mt-3"
                type="email"
                name="email"
                required
              />
            </div>
            <div>
              <input
                className="w-full rounded-md border border-blue-300 p-2 mt-3"
                type="password"
                name="password"
                required
              />
            </div>
            <button
              className="w-full rounded-md bg-blue-600 py-2 text-white mt-5"
              onChange={() => {}}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
