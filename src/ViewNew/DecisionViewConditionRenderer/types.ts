import { IInputStatus, IRuleDecision } from "@isettingkit/input";

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

interface IDecisionViewConditionRendererNew {
  element: IRuleDecision;
  type?: "decision" | "condition";
  valueData: string | string[] | number | IValue | undefined;
  editionMode?: "classic" | "versioned";
}

export type { IDecisionViewConditionRendererNew, IValue };
