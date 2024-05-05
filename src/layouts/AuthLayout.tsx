/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const AuthLayout: React.FC<any> = (props) => {
  return (
    <>
      <main>{props.children}</main>
    </>
  );
};

export default AuthLayout;
