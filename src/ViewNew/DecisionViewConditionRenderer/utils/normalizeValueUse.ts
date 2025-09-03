import { StrategyType } from ".";

const normalizeValueUseNew = (valueUse: string): StrategyType | null => {
  const mapping: Record<string, StrategyType> = {
    EqualTo: "EQUAL",
    GreaterThan: "GREATER_THAN",
    LessThan: "LESS_THAN",
    ListOfValues: "LIST_OF_VALUES",
    ListOfValuesMulti: "LIST_OF_VALUES_MULTI",
    Range: "RANGE",
  };

  return mapping[valueUse] || null;
};

export { normalizeValueUseNew };
