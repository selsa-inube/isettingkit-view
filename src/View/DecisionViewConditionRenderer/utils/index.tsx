import { ComparisonStrategy } from "../strategies/Comparison";
import { ListOfValuesMultiStrategy } from "../strategies/ListOfValuesMulti";
import { RangeStrategy } from "../strategies/Range";

const strategies = {
  LIST_OF_VALUES_MULTI: ListOfValuesMultiStrategy,
  RANGE: RangeStrategy,
  GREATER_THAN: ComparisonStrategy,
  LESS_THAN: ComparisonStrategy,
  EQUAL: ComparisonStrategy,
  LIST_OF_VALUES: ComparisonStrategy,
};

type StrategyType = keyof typeof strategies;
const getStrategy = (type: StrategyType) => strategies[type];

export { getStrategy };
export type { StrategyType };
