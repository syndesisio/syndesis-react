import { OptionalInt } from '@syndesis/models';
/**
 *
 * @param value the value being used
 * @returns the `OptionalInt` object created from the specified value
 */
export declare function createOptionalInt(value: number): OptionalInt;
/**
 * @param optional the `OptionalInt` whose value is being requested
 * @param defaultValue the value to return if no value exists
 * @returns the int value (defaults to zero)
 */
export declare function optionalIntValue(optional: OptionalInt | undefined, defaultValue?: number): number;
/**
 * @param optional the value whose value is being checked
 * @returns true if the optional exists and there is a value
 */
export declare function optionalIntHasValue(optional: OptionalInt | undefined): boolean;
