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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCalculationHistories = /* GraphQL */ `
  query SyncCalculationHistories(
    $filter: ModelCalculationHistoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCalculationHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
