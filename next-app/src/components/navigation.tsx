"use client";
import Image from "next/image";
import denso from "@/assets/denso.svg";
import man from "@/assets/man.png";
import React, { useEffect, useState } from "react";
import { DownOutlined } from '@ant-design/icons';
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
import { AiOutlineCaretDown } from "react-icons/ai";

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

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const changeTheme = () => {
    setToggleMode(toggleMode === "light" ? "dark" : "light");
  };

  const config: ThemeConfig = {
    token: {
      colorPrimary: "#1890ff",
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
          padding: "0.8rem 2rem 0.8rem 2rem",
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
          <Typography>Tool life History</Typography>
        </div>
        <div style={{display:"flex"}}>
          <div onClick={changeTheme} className={styles.mode}>
            {toggleMode === "light" ? (
              <BiSun color="#8c8c8c"size={25} />
            ) : (
              <BsMoonStars color="white" size={25}/>
            )}
          </div>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space style={{display:"flex",gap:"0.8rem"}}>
                <div style={{display:"flex",gap:"1rem"}}>
                  <Image src={man} alt="man" priority width={35}/>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                    <Typography style={{lineHeight:"1"}}>Khunakon</Typography>
                    <Typography style={{lineHeight:"1"}}>admin</Typography>
                  </div>
                </div>
                <AiOutlineCaretDown />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Navigation;
