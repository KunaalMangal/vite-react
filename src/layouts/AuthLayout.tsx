/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment } from "react";
import { Footer } from "../components";

export const AuthLayout: React.FC<any> = (props) => {
  return (
    <Fragment>
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

