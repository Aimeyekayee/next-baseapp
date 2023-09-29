"use client";
import styles from "./../styles/page.module.scss";
import Link from "next/link";
import { Button, ConfigProvider, Layout, Typography, theme } from "antd";
import themeCustomize from "@/theme/themeConfig";
import React, { useState } from "react";

const { Content } = Layout;
const page = () => {
  return (
    <ConfigProvider theme={themeCustomize}>
      <Layout>
        <div>hello</div>
      </Layout>
    </ConfigProvider>
  );
};

export default page;
