import React, { FunctionComponent } from "react";

interface Props {
  children: any;
}

export const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <header>
        <h1>Gatsby Demo</h1>
        <nav>
          <a href="/">Home</a>
        </nav>
      </header>
      <br />
      {children}
      <br />
      <footer>
        Check the lighthouse results at
        <a
          href="https://lighthouse-test.github.io"
          rel="noopener"
          target="_blank"
        >
          https://lighthouse-test.github.io
        </a>
      </footer>
    </>
  );
};

export default Layout;
