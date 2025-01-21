import { useEffect, useState } from "react";
import { useCredentialListContext } from "./CredentialListContext";

export function useCredentialListPresenter() {
  const [rows, setRows] = useState<Record<string, string>[]>([]);
  const { listCredential } = useCredentialListContext();

  useEffect(() => {
    listCredential.execute().then(setRows);
  }, []);

  return { columns, rows };
}

const columns = [
  {
    field: "origin",
    headerName: "Origem",
  },
  {
    field: "username",
    headerName: "E-mail/Usuário",
  },
  {
    field: "password",
    headerName: "Senha",
  },
];
