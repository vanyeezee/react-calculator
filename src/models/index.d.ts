import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCalculationHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CalculationHistory, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly expression: string;
  readonly result: string;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyCalculationHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CalculationHistory, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly expression: string;
  readonly result: string;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type CalculationHistory = LazyLoading extends LazyLoadingDisabled ? EagerCalculationHistory : LazyCalculationHistory

export declare const CalculationHistory: (new (init: ModelInit<CalculationHistory>) => CalculationHistory) & {
  copyOf(source: CalculationHistory, mutator: (draft: MutableModel<CalculationHistory>) => MutableModel<CalculationHistory> | void): CalculationHistory;
}