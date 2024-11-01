import {
  IInputStatus,
  ValueDataType,
  ValueHowToSetUp,
} from "@isettingkit/input";

interface ICondition {
  description: string;
  valueUse: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
  name: string;
  value?: string | string[] | number | IValue | undefined;
  dataType: (typeof ValueDataType)[keyof typeof ValueDataType];
}

interface IDecision {
  description: string;
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

export type { ICondition, IDecision, IRuleDecision, IValue };
