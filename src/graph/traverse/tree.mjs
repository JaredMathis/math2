import { graph_neighbors_get } from './../neighbors/get.mjs';
import { list_min } from './../../../node_modules/m00/src/list/min.mjs';
export function graph_traverse_tree(graph, previous, current) {
    let neighbors = graph_neighbors_get(graph, current);
    let neighbors_larger = neighbors.filter(n => n > previous);
    if (neighbors_larger.length) {
        return list_min(neighbors_larger);
    }
}