import { graph_connected_new } from './graph/connected/new.mjs';
import { list_add_if_not_exists } from './../node_modules/m00/src/list/add/if/not/exists.mjs';
import { log } from './../node_modules/m00/src/log.mjs';
import { list_first } from './../node_modules/m00/src/list/first.mjs';
import { graph_neighbors_get } from './graph/neighbors/get.mjs';
import { graph_traverse_tree } from './graph/traverse/tree.mjs';
export function sb() {
    let size = 50;
    let g = graph_connected_new(size);
    console.log(g);
    let found = [];
    let current = 0;
    let previous = list_first(graph_neighbors_get(g));
    while (found.length < size) {
        let next_current = graph_traverse_tree(g, previous, current);
        previous = current;
        current = next_current;
        list_add_if_not_exists(found, current);
    }
}