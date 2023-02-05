import { list_random_item } from './../../../node_modules/m00/src/list/random/item.mjs';
import { list_copy_shuffle } from './../../../node_modules/m00/src/list/copy/shuffle.mjs';
import { arguments_assert } from './../../../node_modules/m00/src/arguments/assert.mjs';
import { number_positive_is } from './../../../node_modules/m00/src/number/positive/is.mjs';
import { range } from './../../../node_modules/m00/src/range.mjs';
export function graph_tree_new(vertex_count) {
    arguments_assert(arguments, number_positive_is);
    let vertices = range(vertex_count);
    let result = [];
    let remaining = list_copy_shuffle(vertices);
    let connected = [remaining.pop()];
    while (remaining.length) {
        let current = remaining.pop();
        result.push([
            current,
            list_random_item(connected)
        ]);
        connected.push(current);
    }
    return result;
}