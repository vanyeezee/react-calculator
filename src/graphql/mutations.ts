/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCalculationHistory = /* GraphQL */ `
  mutation CreateCalculationHistory(
    $input: CreateCalculationHistoryInput!
    $condition: ModelCalculationHistoryConditionInput
  ) {
    createCalculationHistory(input: $input, condition: $condition) {
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
export const updateCalculationHistory = /* GraphQL */ `
  mutation UpdateCalculationHistory(
    $input: UpdateCalculationHistoryInput!
    $condition: ModelCalculationHistoryConditionInput
  ) {
    updateCalculationHistory(input: $input, condition: $condition) {
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
export const deleteCalculationHistory = /* GraphQL */ `
  mutation DeleteCalculationHistory(
    $input: DeleteCalculationHistoryInput!
    $condition: ModelCalculationHistoryConditionInput
  ) {
    deleteCalculationHistory(input: $input, condition: $condition) {
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
