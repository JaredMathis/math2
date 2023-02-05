import { graph_connected_new } from "./graph/connected/new.mjs";
import { graph_cycle_new } from "./graph/cycle/new.mjs";
import { graph_tree_new } from "./graph/tree/new.mjs";

export function sb() {
    console.log(graph_connected_new(5));
}