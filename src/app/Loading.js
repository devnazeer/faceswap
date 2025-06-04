import { Box, CircularProgress } from "@mui/material";

function Loading() {
  return (
    <>
      <Box
        className="flex"
        sx={{
          width: "100%",
          height: "100vh",
          background: "linear-gradient(to right, #1f2937, #374151)",
        }}
      >
        <CircularProgress size={100} sx={{ color: "#1976d2" }} />
      </Box>
    </>
  );
}

export default Loading;
