"use client";
import styles from "../../styles/page.module.scss";
import Link from "next/link";
import { Button, ConfigProvider, Layout, Typography, theme } from "antd";
import type { ThemeConfig } from "antd";
import React from "react";
import { ModeStore } from "@/store/mode.store";
import { useTranslations } from "next-intl";
import PageLink from "@/components/pageLink";

const { Content } = Layout;
const Home = () => {
  const toggleMode = ModeStore((state) => state.toggleMode);
  const t = useTranslations("main");
  const config: ThemeConfig = {
    token: {
      colorPrimary: "#1890ff",
      fontFamily: "Noto Sans Thai",
    },
    algorithm:
      toggleMode === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <ConfigProvider theme={config}>
      <Layout
        className={styles.main}
        style={{
          background: toggleMode === "light" ? colorBgContainer : "#0d1117",
        }}
      >
        <Content className={styles.container}>
          <PageLink href="/checkstatus" className={styles.link}>
            <Typography className={styles.typo}>{t("ch_st")}</Typography>
          </PageLink>
          <PageLink href="/record" className={styles.link}>
            <Typography className={styles.typo}>{t("rec")}</Typography>
          </PageLink>
          <PageLink href="/dashboard" className={styles.link}>
            <Typography className={styles.typo}>{t("dashboard")}</Typography>
          </PageLink>
          <PageLink href="/calendar" className={styles.link}>
            <Typography className={styles.typo}>{t("cal")}</Typography>
          </PageLink>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};
export default Home;
