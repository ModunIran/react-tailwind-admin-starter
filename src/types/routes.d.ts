import { USER_ROLE_ENUM } from "@/constants/user";
import type { IndexRouteObject, NonIndexRouteObject } from "react-router-dom";

interface CustomRouteFields {
  roles?: USER_ROLE_ENUM[];
}

type AppIndexRouteObject = IndexRouteObject & CustomRouteFields;
type AppNonIndexRouteObject = Omit<NonIndexRouteObject, "children"> &
  CustomRouteFields & {
    children?: (AppIndexRouteObject | AppNonIndexRouteObject)[];
  };

export type RouteProps = AppIndexRouteObject | AppNonIndexRouteObject;
