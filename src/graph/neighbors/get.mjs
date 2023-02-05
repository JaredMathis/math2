import { for_each } from './../../../node_modules/m00/src/for/each.mjs';
import { list_add_if_not_exists } from './../../../node_modules/m00/src/list/add/if/not/exists.mjs';
export function graph_neighbors_get(graph, v) {
    let neighbors = [];
    for_each(graph, edge => {
        for_each([
            [
                0,
                1
            ],
            [
                1,
                0
            ]
        ], a => {
            let [b, c] = a;
            if (edge[b] === v) {
                const n = edge[c];
                list_add_if_not_exists(neighbors, n);
            }
        });
    });
    return neighbors;
}