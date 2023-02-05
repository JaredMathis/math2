import { list_copy_shuffle } from './../../../node_modules/m00/src/list/copy/shuffle.mjs';
import { for_each } from './../../../node_modules/m00/src/for/each.mjs';
import { list_get_wrapped } from './../../../node_modules/m00/src/list/get/wrapped.mjs';
import { range } from './../../../node_modules/m00/src/range.mjs';
import { arguments_assert } from './../../../node_modules/m00/src/arguments/assert.mjs';
import { number_at_least } from './../../../node_modules/m00/src/number/at/least.mjs';
export function graph_cycle_new(vertex_count) {
    arguments_assert(arguments, number_at_least(3));
    let result = [];
    let vertices = range(vertex_count);
    let shuffled = list_copy_shuffle(vertices);
    for_each(shuffled, (current, key) => {
        let next = list_get_wrapped(shuffled, parseInt(key, 10) + 1);
        result.push([
            current,
            next
        ]);
    });
    return result;
}