"use client";
import styles from "./../styles/page.module.scss";
import Link from "next/link";
import { Button, ConfigProvider, Layout, Typography, theme } from "antd";
// import theme from "../theme/themeConfig";
import type { ThemeConfig } from "antd";
import { useState } from "react";
import { ModeStore } from "@/store/mode.store";

const { Content } = Layout;
const Home = () => {
  const toggleMode = ModeStore((state) => state.toggleMode);
  const setToggleMode = ModeStore((state) => state.setToggleMode);
  const config: ThemeConfig = {
    token: {
      colorPrimary: "#1890ff",
    },
    algorithm:
      toggleMode === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <ConfigProvider theme={config}>
      <Layout className={styles.main} style={{background:toggleMode === "light" ? colorBgContainer : "#0d1117"}}>
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
          
        </Content>
      </Layout>
    </ConfigProvider>
  );
};
export default Home;
