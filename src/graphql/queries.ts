/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCalculationHistory = /* GraphQL */ `
  query GetCalculationHistory($id: ID!) {
    getCalculationHistory(id: $id) {
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
export const listCalculationHistories = /* GraphQL */ `
  query ListCalculationHistories(
    $filter: ModelCalculationHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCalculationHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        expression
        result
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
