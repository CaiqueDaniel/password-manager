import { Box, Button } from "@mui/material";
import { Formik } from "formik";
import { PropsWithChildren } from "react";

export function Form<I extends Record<string, any>>({
  children,
  initialValues,
  onSubmit,
}: Props<I>) {
  return (
    <Formik<I> initialValues={initialValues} onSubmit={onSubmit}>
      {() => <Box>{children}</Box>}
    </Formik>
  );
}

type Props<I> = PropsWithChildren & {
  initialValues: I;
  onSubmit: (values: I) => void;
};
