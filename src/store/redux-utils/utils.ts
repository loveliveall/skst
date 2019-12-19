type Values<T extends object> = T[keyof T];

export interface FSA<T extends string = string, P extends object = object> {
  type: T,
  payload: P,
}

export function createFSA<T extends string, P extends object>(
  actionType: T, payload: P,
): FSA<T, P> {
  return {
    type: actionType,
    payload,
  };
}

type TActionCreators = {
  [actionCreatorName: string]: (...args: any[]) => FSA,
};
export type TActions<AC extends TActionCreators> = ReturnType<Values<AC>>;
export type TAction<ActionsUnion extends FSA, T extends string> =
  ActionsUnion extends FSA<T, infer P> ? FSA<T, P> : never;
export type TPayload<ActionsUnion extends FSA, T extends string> =
  TAction<ActionsUnion, T> extends FSA<T, infer P> ? P : never;
