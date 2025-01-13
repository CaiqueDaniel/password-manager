import { Box, Paper } from "@mui/material";
import { CredentialList } from "../features/CredentialList/CredentialList";
import { MainLayout } from "~/modules/shared/infra/layouts/MainLayout";

export function CredentialListPage() {
  return (
    <MainLayout>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        height="100%"
        alignItems="center"
      >
        <Paper sx={{ p: 3, width: "100%", maxWidth: "1000px" }}>
          <CredentialList />
        </Paper>
      </Box>
    </MainLayout>
  );
}
