// RSC prefetching & Hydration용 쿼리클리아이언트 캐싱 반환

import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

export const getQueryClient = cache(() => new QueryClient());