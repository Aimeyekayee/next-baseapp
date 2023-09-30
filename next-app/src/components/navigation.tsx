"use client";
import Image from "next/image";
import denso from "@/assets/denso.svg";
import man from "@/assets/man.png";
import React, { useEffect, useState } from "react";
import styles from "./../styles/nav.module.scss";
import {
  Button,
  theme,
  ConfigProvider,
  Typography,
  Dropdown,
  Space,
} from "antd";
import type { ThemeConfig, MenuProps } from "antd";
import { ModeStore } from "@/store/mode.store";
import { BiSun } from "react-icons/bi";
import { BsMoonStars } from "react-icons/bs";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";
import LocaleSwitcher from "./locale-switcher";
import { useTranslations } from "next-intl";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">about</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">setting</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "logout",
    key: "3",
  },
];
const Navigation = () => {
  const toggleMode = ModeStore((state) => state.toggleMode);
  const setToggleMode = ModeStore((state) => state.setToggleMode);
  const t = useTranslations("nav");
  const handle = useFullScreenHandle();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const changeTheme = () => {
    setToggleMode(toggleMode === "light" ? "dark" : "light");
  };

  const config: ThemeConfig = {
    token: {
      colorPrimary: "#1890ff",
      fontFamily:"Noto Sans Thai"
    },
    algorithm:
      toggleMode === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
  };
  return (
    <ConfigProvider theme={config}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 2rem 1rem 2rem",
          background: toggleMode === "light" ? colorBgContainer : "#0d1117",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={denso} alt="denso" priority width={100} />
          <Typography
            style={{
              fontSize: "2rem",
              fontWeight: "600",
            }}
          >
            {t("tool")}
            <span className={styles.span}>{t("life")}</span>
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div onClick={changeTheme} className={styles.mode}>
              {toggleMode === "light" ? (
                <BiSun color="#8c8c8c" size={25} />
              ) : (
                <BsMoonStars color="white" size={20} />
              )}
            </div>
            <LocaleSwitcher />
          </div>
          <div style={{padding:"0.5rem",borderRadius:"0.5rem"}} className={styles.dropdown}>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space
                  style={{ display: "flex", gap: "0.8rem", cursor: "pointer" }}
                >
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <Image
                      src={man}
                      alt="man"
                      priority
                      width={25}
                      style={{ cursor: "pointer" }}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <Typography
                        style={{
                          lineHeight: "1",
                          color: "#8F98A3",
                          fontSize: "1rem",
                          fontWeight: "600",
                        }}
                      >
                        Khunakon
                      </Typography>
                      <Typography
                        style={{
                          lineHeight: "1",
                          color: "#C0CCDA",
                          fontSize: "0.75rem",
                          fontWeight: "500",
                        }}
                      >
                        {t("admin")}
                      </Typography>
                    </div>
                  </div>
                  <AiOutlineCaretDown
                    style={{ cursor: "pointer" }}
                    color="#C0CCDA"
                  />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Navigation;
