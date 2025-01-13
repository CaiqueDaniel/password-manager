import { DataList } from "~/modules/shared/infra/components/DataList/DataList";
import { useCredentialListViewModel } from "./useCredentialListViewModel";

export function CredentialList() {
  const { columns, rows } = useCredentialListViewModel();
  return <DataList columns={columns} rows={rows} />;
}
