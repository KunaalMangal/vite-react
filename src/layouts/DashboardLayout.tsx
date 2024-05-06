/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment } from "react";
import { Footer, Header, SideBar } from "../components";

export const DashboardLayout: React.FC<any> = (props) => {
  return (
    <Fragment>
      <Header />
      <SideBar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};
