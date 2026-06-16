import PageLoader from "@/components/core/page-loader";
import { lazy } from "react";

export const ComparePage = PageLoader(lazy(() => import("@/features/compare")));

export const HistoryPage = PageLoader(lazy(() => import("@/features/history")));

export const FavoritesPage = PageLoader(
  lazy(() => import("@/features/favorites")),
);

export const LogPage = PageLoader(lazy(() => import("@/features/log")));
