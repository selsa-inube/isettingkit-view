import { StrategyType } from ".";

const normalizeValueUse = (valueUse: string): StrategyType | null => {
  const mapping: Record<string, StrategyType> = {
    equal: "EQUAL",
    greater_than: "GREATER_THAN",
    less_than: "LESS_THAN",
    list_of_values: "LIST_OF_VALUES",
    list_of_values_multi: "LIST_OF_VALUES_MULTI",
    range: "RANGE",
  };

  return mapping[valueUse] || null;
};

export { normalizeValueUse };
