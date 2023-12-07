import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// creating the color tokens
export const tokens = () => ({
  sidebar: {
    100: "#cce0f5",
    200: "#99c2eb",
    300: "#66a3e0",
    400: "#3385d6",
    500: "#0066cc",
    600: "#0052a3",
    700: "#003d7a",
    800: "#002952",
    900: "#001429",
  },

  blue: {
    100: "#e0f3ff",
    200: "#c2e7ff",
    300: "#a3daff",
    400: "#85ceff",
    500: "#66c2ff",
    600: "#529bcc",
    700: "#3d7499",
    800: "#294e66",
    900: "#142733",
  },

  red: {
    100: "#ffcccc",
    200: "#ff9999",
    300: "#ff6666",
    400: "#ff3333",
    500: "#ff0000",
    600: "#cc0000",
    700: "#990000",
    800: "#660000",
    900: "#330000",
  },

  orange: {
    100: "#ffe0cc",
    200: "#ffc299",
    300: "#ffa366",
    400: "#ff8533",
    500: "#ff6600",
    600: "#cc5200",
    700: "#993d00",
    800: "#662900",
    900: "#331400",
  },

  green: {
    100: "#ccf5cc",
    200: "#99eb99",
    300: "#66e066",
    400: "#33d633",
    500: "#00cc00",
    600: "#00a300",
    700: "#007a00",
    800: "#005200",
    900: "#002900",
  },
});

export const themeSetings = () => {
  const colors = tokens();
  //   using the color tokens for the styles

  return {
    palette: {
      sidebarBlue: {
        main: colors.sidebar[500],
      },
      secondary: {
        main: colors.blue[500],
      },
      neural: {
        red: colors.red[500],
        green: colors.green[500],
        orange: colors.orange[500],
        grey: "#fcfcfc",
      },
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const useMode = () => {
  const theme = useMemo(() => createTheme(themeSetings()), []);

  return theme;
};
