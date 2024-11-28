import {
  IInputStatus,
  ValueDataType,
  ValueHowToSetUp,
} from "@isettingkit/input";

interface ICondition {
  valueUse: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
  name: string;
  value?: string | string[] | number | IValue | undefined;
  dataType: (typeof ValueDataType)[keyof typeof ValueDataType];
}

interface IDecision {
  endDate?: Date;
  valueUse: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
  name: string;
  value?: string | string[] | number | IValue | undefined;
  startDate?: Date;
  dataType: (typeof ValueDataType)[keyof typeof ValueDataType];
}

interface IRuleDecision {
  id?: string;
  conditions?: ICondition[];
  decision?: IDecision;
  decisions?: IDecision[];
  startDate?: Date;
  endDate?: Date;
}
interface IValue {
  list?: string[];
  listSelected?: string[];
  labelFrom?: string;
  labelTo?: string;
  from?: number | string | Date;
  to?: number | string | Date;
  value?: string | number;
  messageFrom?: string;
  messageTo?: string;
  statusFrom?: IInputStatus;
  statusTo?: IInputStatus;
}

interface IDecisionViewConditionRenderer {
  element: IDecision | ICondition;
  type?: "decision" | "condition";
  valueData: string | string[] | number | IValue | undefined;
}

export type {
  ICondition,
  IDecisionViewConditionRenderer,
  IDecision,
  IRuleDecision,
  IValue,
};
