"use client";
import styles from "./../styles/page.module.scss";
import Link from "next/link";
import { Button, ConfigProvider, Layout, Typography, theme } from "antd";
// import theme from "../theme/themeConfig";
import { useState } from "react";

const { Content } = Layout;
const Home = () => {
  const [themeMode, setThemeMode] = useState("light");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const changeTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  return (
    <ConfigProvider
      theme={{
        algorithm:
          themeMode === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
        token:{
          colorPrimary:"#1677ff"
        }
      }}
    >
      <Layout className={styles.main}>
        <Content className={styles.container}>
          <Link href="/checkstatus" className={styles.link}>
            <Typography>Check Status</Typography>
          </Link>
          <Link href="/record" className={styles.link}>
            <Typography>Record</Typography>
          </Link>
          <Link href="/visualization" className={styles.link}>
            <Typography>Visualization</Typography>
          </Link>
          <Link href="/calendar" className={styles.link}>
            <Typography>Calendar View</Typography>
          </Link>
          <Button onClick={changeTheme} type="primary">
            <Typography>Switch Theme</Typography>
          </Button>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};
export default Home;
