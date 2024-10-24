# 📦 isettingkit-view: UI Components Library

## Overview

The **`isettingkit-view`** library is designed to provide reusable, flexible, and lightweight UI components for handling various aspects of business rules in frontend applications. These components help streamline the development process by offering pre-built elements that can handle dynamic views, multiple choices, and range-based inputs.

This documentation outlines the key components of the library and explains their usage. You can visualize how these components work using **Storybook**, which allows developers to test and see the UI in action before integrating it into larger applications.

---

## 📚 Components

### 1. `DecisionViewConditionRenderer`

#### Description
`DecisionViewConditionRenderer` is a conditional rendering component that dynamically renders the appropriate UI component based on the `howToSetUp` value of an element. It supports various display options like multi-choice lists, range inputs, and single value comparisons.

#### Props
- **element** (`IDecision | ICondition`): The element containing the data for decision or condition rendering.
- **valueData** (`string | string[] | number | IValue | undefined`): The actual data to be displayed or processed by the component.

#### Usage Example
```tsx
<DecisionViewConditionRenderer
  element={element}
  valueData={valueData}
/>
```

### 2. `DynamicViewField`

#### Description
`DynamicViewField` is a component used to display a simple label and formatted value. It adapts based on the type of input (e.g., alphabetical, date, currency, etc.).

#### Props
- **type** (`ITextfieldInputType`): The type of the input to format the displayed value. Supported types: `"alphabetical"`, `"date"`, `"currency"`, `"number"`, `"percentage"`.
- **label** (`string`): The label to be shown alongside the value.
- **valueInput** (`number | string`): The value to be formatted and displayed.

#### Usage Example
```tsx
<DynamicViewField
  type="currency"
  label="Total Amount"
  valueInput={12345}
/>
```

### 3. `ViewMultipleChoices`

#### Description
`ViewMultipleChoices` is a component that renders a list of choices (typically as tags) where multiple values can be selected.

#### Props
- **id** (`string`): The unique ID for the component.
- **label** (`string`): The label to describe the choices being presented.
- **options** (`IOptionItemChecked[]`): The array of options, where each option contains `id`, `label`, and `checked` (optional).

#### Usage Example
```tsx
const options = [
  { id: "1", label: "Option 1", checked: true },
  { id: "2", label: "Option 2", checked: false },
];

<ViewMultipleChoices
  id="multiChoice"
  label="Select Options"
  options={options}
/>
```

### 4. `ViewRangeField`

#### Description
`ViewRangeField` is a component for rendering a field that displays a range (from a minimum to a maximum value), ideal for showing value ranges in business rules.

#### Props
- **labelFrom** (`string?`): The label for the minimum value. Default is an empty string.
- **labelTo** (`string?`): The label for the maximum value. Default is an empty string.
- **typeInput** (`ITextfieldInputType`): The type of input value (e.g., `"number"`, `"currency"`, etc.).
- **valueFrom** (`string | number?`): The minimum value to display. Default is `0`.
- **valueTo** (`string | number?`): The maximum value to display. Default is `0`.

#### Usage Example
```tsx
<ViewRangeField
  labelFrom="Minimum Value"
  labelTo="Maximum Value"
  typeInput="number"
  valueFrom={10}
  valueTo={100}
/>
```

## 🚀 How to Use

To get started with the **`isettingkit-view`** library, follow these steps:

### 1. Installation
Install the library using npm:
```bash
npm install isettingkit-view
```

### 2. Import Components
Once installed, you can import and use the components like this:
```tsx
import { ViewMultipleChoices, ViewRangeField, DynamicViewField, DecisionViewConditionRenderer } from 'isettingkit-view';
```

### 3. Storybook Integration
To visualize the components in action, we use Storybook. Storybook allows developers to interact with the components in isolation, view different states, and confirm that they behave as expected.

You can run Storybook for this library by navigating to the project folder and using the following command:
```bash
npm run storybook
```
