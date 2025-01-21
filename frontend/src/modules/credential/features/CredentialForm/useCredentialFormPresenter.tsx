export function useCreatentialFormPresenter() {
  const onSubmit = (values: CredentialFormData) => {};

  return { initialValues, onSubmit };
}

const initialValues: CredentialFormData = {
  origin: "",
  username: "",
};

type CredentialFormData = {
  origin: string;
  username: string;
};
