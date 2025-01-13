import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PasswordListPage } from "./modules/credential/pages/PasswordListPage";
import { CredentialProviders } from "./modules/credential/CredentialProviders";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <CredentialProviders>
          <PasswordListPage />
        </CredentialProviders>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
