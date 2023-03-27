/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCalculationHistory = /* GraphQL */ `
  subscription OnCreateCalculationHistory(
    $filter: ModelSubscriptionCalculationHistoryFilterInput
  ) {
    onCreateCalculationHistory(filter: $filter) {
      id
      userId
      expression
      result
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCalculationHistory = /* GraphQL */ `
  subscription OnUpdateCalculationHistory(
    $filter: ModelSubscriptionCalculationHistoryFilterInput
  ) {
    onUpdateCalculationHistory(filter: $filter) {
      id
      userId
      expression
      result
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCalculationHistory = /* GraphQL */ `
  subscription OnDeleteCalculationHistory(
    $filter: ModelSubscriptionCalculationHistoryFilterInput
  ) {
    onDeleteCalculationHistory(filter: $filter) {
      id
      userId
      expression
      result
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
