import { RouteProps } from "@/types/routes";
import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
const DashboardLayout = lazy(
  () => import("@/components/layout/dashboard-layout"),
);
const Login = lazy(() => import("@/app/views/login"));
const NotFound = lazy(() => import("@/app/views/404"));
const AuthGuard = lazy(() => import("@/app/routes/route-guard"));

const protectedRoutes: RouteProps[] = [
  {
    path: "/",
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      // {
      //   element: <Dashboard />,
      //   index: true,
      // },
    ],
  },
];

const publicRoutes: RouteProps[] = [
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
    index: true,
  },
];

const routes = [...protectedRoutes, ...publicRoutes];

export default routes;
