import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CredentialListPage } from "./modules/credential/pages/CredentialListPage";
import { CredentialProviders } from "./modules/credential/CredentialProviders";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <CredentialProviders>
          <CredentialListPage />
        </CredentialProviders>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
