/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CalculationHistoryCreateFormInputValues = {
    userId?: string;
    expression?: string;
    result?: string;
    createdAt?: string;
};
export declare type CalculationHistoryCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    expression?: ValidationFunction<string>;
    result?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CalculationHistoryCreateFormOverridesProps = {
    CalculationHistoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    expression?: PrimitiveOverrideProps<TextFieldProps>;
    result?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CalculationHistoryCreateFormProps = React.PropsWithChildren<{
    overrides?: CalculationHistoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CalculationHistoryCreateFormInputValues) => CalculationHistoryCreateFormInputValues;
    onSuccess?: (fields: CalculationHistoryCreateFormInputValues) => void;
    onError?: (fields: CalculationHistoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CalculationHistoryCreateFormInputValues) => CalculationHistoryCreateFormInputValues;
    onValidate?: CalculationHistoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function CalculationHistoryCreateForm(props: CalculationHistoryCreateFormProps): React.ReactElement;
