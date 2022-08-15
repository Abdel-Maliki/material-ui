import { Checkbox, createTheme, styled, ThemeProvider } from "@mui/material";
import { green, orange } from "@mui/material/colors";
import Dark from "./theming/Dark";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  "&.Mui-checked": {
    color: theme.status.danger,
  },
}));

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
