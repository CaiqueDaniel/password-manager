import { Box } from "@mui/material";
import { Formik, Form as FormikForm } from "formik";
import { PropsWithChildren } from "react";

export function Form<I extends Record<string, any>>({
  children,
  initialValues,
  onSubmit,
}: Props<I>) {
  return (
    <Formik<I> initialValues={initialValues} onSubmit={onSubmit}>
      {() => (
        <FormikForm>
          <Box>{children}</Box>
        </FormikForm>
      )}
    </Formik>
  );
}

type Props<I> = PropsWithChildren & {
  initialValues: I;
  onSubmit: (values: I) => void;
};
