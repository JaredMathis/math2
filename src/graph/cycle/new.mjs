import { arguments_assert } from './../../../node_modules/m00/src/arguments/assert.mjs';
import { number_at_least } from './../../../node_modules/m00/src/number/at/least.mjs';
export function graph_cycle_new(vertex_count) {
    arguments_assert(arguments, number_at_least(3));
    let vertices = range(vertex_count);
}