import { list_concat_front } from './../../../node_modules/m00/src/list/concat/front.mjs';
import { graph_random_new } from './../random/new.mjs';
import { graph_tree_new } from './../tree/new.mjs';
import { arguments_assert } from './../../../node_modules/m00/src/arguments/assert.mjs';
import { number_positive_is } from './../../../node_modules/m00/src/number/positive/is.mjs';
export function graph_connected_new(vertex_count) {
    arguments_assert(arguments, number_positive_is);
    let result = graph_tree_new(vertex_count);
    let additional = graph_random_new(vertex_count);
    list_concat_front(result, additional);
    return result;
}