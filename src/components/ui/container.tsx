import { ReactNode, ElementType } from "react";

import cx from "clsx";

export const Container = ({
  children,
  className,
  as: Component = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) => {
  return (
    <Component className={cx("mx-auto max-w-7xl px-4 lg:px-6", className)}>
      {children}
    </Component>
  );
};
