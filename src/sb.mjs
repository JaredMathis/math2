import { log } from './../node_modules/m00/src/log.mjs';
import { list_first } from './../node_modules/m00/src/list/first.mjs';
import { graph_neighbors_get } from './graph/neighbors/get.mjs';
import { graph_traverse_tree } from './graph/traverse/tree.mjs';
import { graph_tree_new } from './graph/tree/new.mjs';
export function sb() {
    let size = 50;
    let g = graph_tree_new(size);
    console.log(g);
    let found = [];
    let current = 0;
    let previous = list_first(graph_neighbors_get(g));
    while (found.length < size) {
        let next_current = graph_traverse_tree(g, previous, current);
        previous = current;
        current = next_current;
    }
}