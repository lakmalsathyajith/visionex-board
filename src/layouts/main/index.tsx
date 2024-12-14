import { FunctionComponent, ReactNode } from "react";
import Header from "./../partials/header";
import Sidebar from "./../partials/sidebar";

import styles from "./Main.module.scss";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.board}>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
