import "server-only";

import { ComponentProps } from "react";
import { codeToHtml } from "shikiji";

type Props = Omit<ComponentProps<"div">, "children"> & {
  code: string;
  language: string;
};

export async function Shikiji({ code, language, ...props }: Props) {
  const __html = await codeToHtml(code, {
    lang: language,
    themes: {
      light: "rose-pine-dawn",
      dark: "rose-pine-moon",
    },
    defaultColor: "light",
  });
  return (
    <div
      {...props}
      dangerouslySetInnerHTML={{ __html }}
    />
  );
}
