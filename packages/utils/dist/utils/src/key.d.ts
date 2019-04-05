/**
 * Generates lexically sortable unique keys based on:
 *
 * https://firebase.googleblog.com/2015/02/the-2120-ways-to-ensure-unique_68.html
 *
 * You can also consider the generated kys to be like UUIDS except:
 * (1) strictly increment from the generating node's point of view
 * (2) loosely increment based on relative machine time when viewed across nodes.
 */
export declare function key(): string;
