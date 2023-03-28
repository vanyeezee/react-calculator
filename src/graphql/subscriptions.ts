/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCalculationHistory = /* GraphQL */ `
  subscription OnCreateCalculationHistory(
    $filter: ModelSubscriptionCalculationHistoryFilterInput
    $owner: String
  ) {
    onCreateCalculationHistory(filter: $filter, owner: $owner) {
      id
      userId
      expression
      result
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCalculationHistory = /* GraphQL */ `
  subscription OnUpdateCalculationHistory(
    $filter: ModelSubscriptionCalculationHistoryFilterInput
    $owner: String
  ) {
    onUpdateCalculationHistory(filter: $filter, owner: $owner) {
      id
      userId
      expression
      result
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCalculationHistory = /* GraphQL */ `
  subscription OnDeleteCalculationHistory(
    $filter: ModelSubscriptionCalculationHistoryFilterInput
    $owner: String
  ) {
    onDeleteCalculationHistory(filter: $filter, owner: $owner) {
      id
      userId
      expression
      result
      createdAt
      updatedAt
      owner
    }
  }
`;
