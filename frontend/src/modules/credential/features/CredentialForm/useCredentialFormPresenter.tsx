import { useState } from "react";
import { useCredentialFormContext } from "./CredentialFormContext";

export function useCreatentialFormPresenter() {
  const { createCredential } = useCredentialFormContext();
  const [isSubmiting, setIsSubmiting] = useState(false);

  const onSubmit = async (values: CredentialFormData) => {
    setIsSubmiting(true);

    try {
      await createCredential.execute(values);
    } catch (error) {
      console.error(error);
    }

    setIsSubmiting(false);
  };

  return { initialValues, isSubmiting, onSubmit };
}

const initialValues: CredentialFormData = {
  origin: "",
  username: "",
};

type CredentialFormData = {
  origin: string;
  username: string;
};
