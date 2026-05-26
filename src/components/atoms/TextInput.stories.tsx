import type { Meta, StoryObj } from '@storybook/react-native';
import { useState } from 'react';
import { View } from 'react-native';

import { TextInput } from './TextInput';

const meta = {
  title: 'Atoms/TextInput',
  component: TextInput,
  argTypes: {
    placeholder: { control: 'text' },
    multiline: { control: 'boolean' },
    numberOfLines: { control: { type: 'number', min: 1, max: 10 } },
  },
  args: {
    placeholder: 'Enter text…',
    multiline: false,
    numberOfLines: 1,
  },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const ControlledTextInputPreview = ({
  placeholder,
  multiline,
  numberOfLines,
}: {
  placeholder: string;
  multiline?: boolean;
  numberOfLines?: number;
}) => {
  const [value, setValue] = useState('');

  return (
    <View style={{ width: '100%' }}>
      <TextInput
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
};

export const Default: Story = {
  render: (args) => (
    <ControlledTextInputPreview
      placeholder={args.placeholder ?? 'Enter text…'}
      multiline={args.multiline}
      numberOfLines={args.numberOfLines}
    />
  ),
};

export const MultilineLog: Story = {
  render: () => (
    <ControlledTextInputPreview
      placeholder="Example: Breakfast: 3 scrambled eggs, coffee. Lunch: Chicken wrap..."
      multiline
      numberOfLines={4}
    />
  ),
};
