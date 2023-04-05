import { Module } from "../core/types/Navigation";
import { privateRoutes, publicRoutes } from "../features";

export const navigation: Module[] = [...privateRoutes, ...publicRoutes];
