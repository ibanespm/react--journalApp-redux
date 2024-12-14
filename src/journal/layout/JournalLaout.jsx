import { Box, Toolbar } from "@mui/material";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/Sidebar";

export const JournalLaout = ({children}) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* navbar */}
      <NavBar/>

      {/* Sidebar */}
      <SideBar/>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* toolbar */}
        <Toolbar/>

        {children}
      </Box>
    </Box>
  );
};
