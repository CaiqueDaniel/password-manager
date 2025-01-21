import { DataList } from "~/modules/shared/infra/components/DataList/DataList";
import { useCredentialListPresenter } from "./useCredentialListPresenter";

export function CredentialList() {
  const { columns, rows } = useCredentialListPresenter();
  return <DataList columns={columns} rows={rows} />;
}
