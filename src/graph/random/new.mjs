import { for_each_nested } from './../../../node_modules/m00/src/for/each/nested.mjs';
import { arguments_assert } from './../../../node_modules/m00/src/arguments/assert.mjs';
import { number_positive_is } from './../../../node_modules/m00/src/number/positive/is.mjs';
import { range } from './../../../node_modules/m00/src/range.mjs';
export function graph_random_new(vertex_count) {
    arguments_assert(arguments, number_positive_is);
    let vertices = range(vertex_count);
    for_each_nested(vertices, v => {
    });
}