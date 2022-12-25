import type { Channel, Server } from "revolt.js";
import { writable } from "svelte/store";

export const selectedServer = writable<Server>();
export const selectedChannel = writable<Channel>();