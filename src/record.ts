import * as react from "react"

export const RecordOfString = 0;
export const RecordOfReactNode = 1;
export type Record
    = { uri: 0, value: string }
    | { uri: 1, value: react.ReactNode };

export function new_string(value: string): Record {
    return { uri: RecordOfString, value };
}

export function new_node(value: react.ReactNode): Record {
    return { uri: RecordOfReactNode, value };
}

export function match<A>(
    record: Record,
    on_string: (value: string) => A,
    on_node: (value: react.ReactNode) => A
): A {
    switch (record.uri) {
        case RecordOfString: return on_string(record.value);
        case RecordOfReactNode: return on_node(record.value);
    }
}

