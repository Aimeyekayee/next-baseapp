'use client';

import clsx from 'clsx';
import {usePathname} from 'next-intl/client';
import Link from 'next-intl/link';
import {ComponentProps} from 'react';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

export default function PageLink({href, ...rest}: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive}
      href={href}
      {...rest}
    />
  );
}