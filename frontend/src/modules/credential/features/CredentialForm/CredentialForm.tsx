import { Form } from "~/modules/shared/infra/components/Form/Form";
import { useCreatentialFormPresenter } from "./useCredentialFormPresenter";
import { Field } from "formik";
import { Box, Button, TextField, Typography } from "@mui/material";

export function CredentialForm() {
  const { initialValues, onSubmit } = useCreatentialFormPresenter();

  return (
    <Form initialValues={initialValues} onSubmit={onSubmit}>
      <Typography fontWeight="bold" fontSize="20px" mb={3}>
        Nova senha
      </Typography>
      <Field
        as={TextField}
        name="origin"
        label="Origem"
        required
        fullWidth
        sx={{ mb: 3 }}
      />
      <Field
        as={TextField}
        name="username"
        label="Usuário"
        required
        fullWidth
        sx={{ mb: 3 }}
      />

      <Box display="grid" gridTemplateColumns="1fr 1fr" columnGap={2}>
        <Button color="error" variant="contained">
          Cancelar
        </Button>
        <Button type="submit" color="primary" variant="contained">
          Concluir
        </Button>
      </Box>
    </Form>
  );
}
