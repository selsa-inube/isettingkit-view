import { ComparisonStrategyNew } from "../strategies/Comparison";
import { ListOfValuesMultiStrategyNew } from "../strategies/ListOfValuesMulti";
import { RangeStrategyNew } from "../strategies/Range";

const strategies = {
  LIST_OF_VALUES_MULTI: ListOfValuesMultiStrategyNew,
  RANGE: RangeStrategyNew,
  GREATER_THAN: ComparisonStrategyNew,
  LESS_THAN: ComparisonStrategyNew,
  EQUAL: ComparisonStrategyNew,
  LIST_OF_VALUES: ComparisonStrategyNew,
};

type StrategyType = keyof typeof strategies;
const getStrategyNew = (type: StrategyType) => strategies[type];

export { getStrategyNew };
export type { StrategyType };
