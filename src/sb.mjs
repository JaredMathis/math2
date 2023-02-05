import { graph_connected_new } from "./graph/connected/new.mjs";
import { graph_cycle_new } from "./graph/cycle/new.mjs";
import { graph_neighbors_get } from "./graph/neighbors/get.mjs";
import { graph_tree_new } from "./graph/tree/new.mjs";

export function sb() {
    let g = graph_connected_new(5)
    console.log(g);
    console.log(graph_neighbors_get(g, 0));
}