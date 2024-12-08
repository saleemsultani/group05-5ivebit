import { Box, Stack } from "@mui/material";
import React from "react";
import NavBar from "./components/NavBar.jsx";
import ChatBox from "./components/ChatBox.jsx";
import RightBar from "./components/RightBar.jsx";
import { ChatsProvider } from "./components/contexts/ChatContext.jsx";

function App() {
  return (
    <>
      <ChatsProvider>
        <Box
          sx={{
            bgcolor: "black",
            width: "100vw",
            height: "100vh",
          }}
        >
          <NavBar />
          {/* <span style={{ color: "white" }}>untitled chat</span> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "90%",
              marginTop: "5%",
            }}
          >
            <Stack
              direction="row"
              sx={{
                color: "white",
                // border: "solid 1px white",
                width: "95%",
                height: "80%",
                gap: 15,
              }}
            >
              <ChatBox />
              <RightBar />
            </Stack>
          </Box>
        </Box>
      </ChatsProvider>
    </>
  );
}

export default App;
