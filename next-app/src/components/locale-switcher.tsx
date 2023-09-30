import React from "react";
import { Select } from "antd"; // Import the Select component from Ant Design
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { Locale, i18n } from "../../i18n-config";
import { ModeStore } from "@/store/mode.store";
import styles from "../styles/switcher.module.scss";
import { ChangeEvent, useTransition } from "react";

const { Option } = Select; // Destructure Option from Select

const LocaleSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");
  const toggleMode = ModeStore((state) => state.toggleMode);
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function onSelectChange(value: string) {
    startTransition(() => {
      router.replace(pathname, { locale: value });
    });
  }

  return (
    <div className={styles.switch}>
      <Select
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
        style={{fontFamily:"Noto Sans Thai"}}
      >
        {["en", "th"].map((cur) => (
          <Option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default LocaleSwitcher;
