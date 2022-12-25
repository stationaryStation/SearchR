import { writable } from "svelte/store";

export const email = writable("");
export const password = writable("");

export const isLogged = writable(false);