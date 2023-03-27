/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCalculationHistoryInput = {
  id?: string | null,
  userId: string,
  expression: string,
  result: string,
  createdAt?: string | null,
  _version?: number | null,
};

export type ModelCalculationHistoryConditionInput = {
  userId?: ModelIDInput | null,
  expression?: ModelStringInput | null,
  result?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCalculationHistoryConditionInput | null > | null,
  or?: Array< ModelCalculationHistoryConditionInput | null > | null,
  not?: ModelCalculationHistoryConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CalculationHistory = {
  __typename: "CalculationHistory",
  id: string,
  userId: string,
  expression: string,
  result: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCalculationHistoryInput = {
  id: string,
  userId?: string | null,
  expression?: string | null,
  result?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeleteCalculationHistoryInput = {
  id: string,
  _version?: number | null,
};

export type ModelCalculationHistoryFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  expression?: ModelStringInput | null,
  result?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCalculationHistoryFilterInput | null > | null,
  or?: Array< ModelCalculationHistoryFilterInput | null > | null,
  not?: ModelCalculationHistoryFilterInput | null,
};

export type ModelCalculationHistoryConnection = {
  __typename: "ModelCalculationHistoryConnection",
  items:  Array<CalculationHistory | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionCalculationHistoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  expression?: ModelSubscriptionStringInput | null,
  result?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCalculationHistoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCalculationHistoryFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateCalculationHistoryMutationVariables = {
  input: CreateCalculationHistoryInput,
  condition?: ModelCalculationHistoryConditionInput | null,
};

export type CreateCalculationHistoryMutation = {
  createCalculationHistory?:  {
    __typename: "CalculationHistory",
    id: string,
    userId: string,
    expression: string,
    result: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCalculationHistoryMutationVariables = {
  input: UpdateCalculationHistoryInput,
  condition?: ModelCalculationHistoryConditionInput | null,
};

export type UpdateCalculationHistoryMutation = {
  updateCalculationHistory?:  {
    __typename: "CalculationHistory",
    id: string,
    userId: string,
    expression: string,
    result: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCalculationHistoryMutationVariables = {
  input: DeleteCalculationHistoryInput,
  condition?: ModelCalculationHistoryConditionInput | null,
};

export type DeleteCalculationHistoryMutation = {
  deleteCalculationHistory?:  {
    __typename: "CalculationHistory",
    id: string,
    userId: string,
    expression: string,
    result: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetCalculationHistoryQueryVariables = {
  id: string,
};

export type GetCalculationHistoryQuery = {
  getCalculationHistory?:  {
    __typename: "CalculationHistory",
    id: string,
    userId: string,
    expression: string,
    result: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCalculationHistoriesQueryVariables = {
  filter?: ModelCalculationHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCalculationHistoriesQuery = {
  listCalculationHistories?:  {
    __typename: "ModelCalculationHistoryConnection",
    items:  Array< {
      __typename: "CalculationHistory",
      id: string,
      userId: string,
      expression: string,
      result: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCalculationHistoriesQueryVariables = {
  filter?: ModelCalculationHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCalculationHistoriesQuery = {
  syncCalculationHistories?:  {
    __typename: "ModelCalculationHistoryConnection",
    items:  Array< {
      __typename: "CalculationHistory",
      id: string,
      userId: string,
      expression: string,
      result: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateCalculationHistorySubscriptionVariables = {
  filter?: ModelSubscriptionCalculationHistoryFilterInput | null,
};

export type OnCreateCalculationHistorySubscription = {
  onCreateCalculationHistory?:  {
    __typename: "CalculationHistory",
    id: string,
    userId: string,
    expression: string,
    result: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCalculationHistorySubscriptionVariables = {
  filter?: ModelSubscriptionCalculationHistoryFilterInput | null,
};

export type OnUpdateCalculationHistorySubscription = {
  onUpdateCalculationHistory?:  {
    __typename: "CalculationHistory",
    id: string,
    userId: string,
    expression: string,
    result: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCalculationHistorySubscriptionVariables = {
  filter?: ModelSubscriptionCalculationHistoryFilterInput | null,
};

export type OnDeleteCalculationHistorySubscription = {
  onDeleteCalculationHistory?:  {
    __typename: "CalculationHistory",
    id: string,
    userId: string,
    expression: string,
    result: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
