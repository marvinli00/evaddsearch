import * as React from 'react';
import { IStackTokens, Stack } from '@fluentui/react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import ReactDOM from 'react-dom'
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { Checkbox } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';


import {Slider} from '@fluentui/react';


const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};
const options: IDropdownOption[] = [
  { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
  { key: 'apple', text: 'Apple' },
  { key: 'banana', text: 'Banana' },
  { key: 'orange', text: 'Orange', disabled: false },
  { key: 'grape', text: 'Grape' },
  { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
  { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
  { key: 'broccoli', text: 'Broccoli' },
  { key: 'carrot', text: 'Carrot' },
  { key: 'lettuce', text: 'Lettuce' },
];

const stackTokens: IStackTokens = { childrenGap: 20 };

export const DropdownBasicExample: React.FunctionComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:'50px'}}>
      <Stack tokens={stackTokens}>




        <Stack horizontal tokens={stackTokens} >
          <TextField style={{ width: 300 }} label="Article ID" />
          <Dropdown
            placeholder="Select an option"
            label="Basic uncontrolled example"
            options={options}
            styles={dropdownStyles}
          />
        </Stack>

        <Stack horizontal tokens={stackTokens} >
          <Dropdown
            label="Disabled example with defaultSelectedKey"
            defaultSelectedKey="broccoli"
            options={options}
            disabled={true}
            styles={dropdownStyles}
          />

          <Dropdown
            placeholder="Select options"
            label="Multi-select uncontrolled example"
            defaultSelectedKeys={['apple', 'banana', 'grape']}
            multiSelect
            options={options}
            styles={dropdownStyles}
          />
        </Stack>



        <Stack horizontal tokens={{childrenGap: 30}} >
          <Checkbox label="checkbox"/>
          <Checkbox label="checkbox (uncontrolled)"/>
          <Checkbox label="checkbox (uncontrolled)"/>
          <Checkbox label="checkbox"/>

        </Stack>
        <Slider ranged label="Metric Range" min={0} max={100} step = {10} defaultValue={60} defaultLowerValue={40} />
        <Stack horizontal tokens={{childrenGap: 30}} >
          <PrimaryButton text="Search" onClick={_alertClicked} allowDisabledFocus/>
          <PrimaryButton text="Advanced Search" onClick={_alertClicked} allowDisabledFocus/>
        </Stack>

        
      </Stack>
    </div>

  );
};
function _alertClicked(): void {
  alert('Not Avaiable Right now');
}
//const DropdownBasicExampleWrapper = () => <ThemeProvider><DropdownBasicExample /></ThemeProvider>;
ReactDOM.render(<DropdownBasicExample />, document.getElementById('root'))
