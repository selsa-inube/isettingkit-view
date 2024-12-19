import { ICondition, IDecision, IInputStatus } from "@isettingkit/input";

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

export type { ICondition, IDecisionViewConditionRenderer, IDecision, IValue };
