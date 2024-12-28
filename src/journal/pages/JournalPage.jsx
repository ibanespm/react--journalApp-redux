import { AddOutlined} from "@mui/icons-material";
import { JournalLaout } from "../layout/JournalLaout";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { IconButton } from "@mui/material";

export const JournalPage = () => {
  return (
    <JournalLaout>
      <NothingSelectedView />
      {/* <NoteView/> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": {backgroundColor:'error.main' ,opacity: 0.8 },
          position: "fixed",
          right:50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 20 }} />
      </IconButton>
    </JournalLaout>
  );
};


