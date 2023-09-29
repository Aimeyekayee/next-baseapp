"use client";
import styles from "../../styles/page.module.scss";
import Link from "next/link";
import { Button, ConfigProvider, Layout, Typography, theme } from "antd";
import type { ThemeConfig } from "antd";
import React from "react"
import { ModeStore } from "@/store/mode.store";
import { useTranslations } from "next-intl";

const { Content } = Layout;
const Home = () => {
  const toggleMode = ModeStore((state) => state.toggleMode);
  const t = useTranslations("main");
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
            <Typography style={{fontSize:"2rem"}}>{t('ch_st')}</Typography>
          </Link>
          <Link href="/record" className={styles.link}>
            <Typography style={{fontSize:"2rem"}}>{t('rec')}</Typography>
          </Link>
          <Link href="/dashboard" className={styles.link}>
            <Typography style={{fontSize:"2rem"}}>{t('dashboard')}</Typography>
          </Link>
          <Link href="/calendar" className={styles.link}>
            <Typography style={{fontSize:"2rem"}}>{t('cal')}</Typography>
          </Link>
          
        </Content>
      </Layout>
    </ConfigProvider>
  );
};
export default Home;
