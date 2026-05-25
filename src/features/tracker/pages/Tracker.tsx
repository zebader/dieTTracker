import { Text } from '@/components/atoms';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'styled-components/native';

export default function Tracker() {
  const [inputText, setInputText] = useState('');
  const [todayLogs, setTodayLogs] = useState([]);

  useEffect(() => {
    // 1. Setup tables
    /*  initializeDatabase(); */
    // 2. Load any existing records saved today
    refreshLogs();
  }, []);

  const refreshLogs = () => {
    /*    const data = getTodayLogs();
    setTodayLogs(data); */
  };

  const handleSave = () => {
    if (!inputText.trim()) {
      Alert.alert('Empty Log', 'Please type out your food entries first.');
      return;
    }

    // Save entry straight into SQLite
    /* saveDailyLog(inputText); */
    setInputText('');
    Keyboard.dismiss();

    // Refresh local list state immediately
    refreshLogs();
  };

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.TitleBlock>
          <Text variant="title" color="textPrimary">
            Log Today&apos;s Meals
          </Text>
        </S.TitleBlock>

        <S.StyledInput
          placeholder="Example: Breakfast: 3 scrambled eggs, coffee. Lunch: Chicken wrap..."
          multiline
          numberOfLines={4}
          value={inputText}
          onChangeText={setInputText}
        />

        <S.ActionButton onPress={handleSave}>
          <Text color="surface">Save Day Log locally</Text>
        </S.ActionButton>

        <S.TitleBlock>
          <Text>Saved Today In SQLite</Text>
        </S.TitleBlock>
        <FlatList
          data={todayLogs}
          /* keyExtractor={(item) => item.id.toString()} */
          renderItem={({ item }) => (
            <S.LogCard>
              {/* <Text color="textPrimary">{item.raw_text}</Text>
              <Text variant="caption" color="textSecondary">
                {item.timestamp} ({item.meal_period})
              </Text> */}
            </S.LogCard>
          )}
        />
      </S.ContentWrapper>
    </S.Container>
  );
}

namespace S {
  export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.spacing.md};
  `;

  export const ContentWrapper = styled.View`
    flex: 1;
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing.xxl};
  `;

  export const TitleBlock = styled.View`
    margin-bottom: ${({ theme }) => theme.spacing.md};
  `;

  export const StyledInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.colors.textSecondary,
  }))`
    font-family: ${({ theme }) => theme.typography.fonts.regular};
    background-color: ${({ theme }) => theme.colors.surface};
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.medium};
    padding: 12px;
    font-size: ${({ theme }) => theme.typography.sizes.md};
    color: ${({ theme }) => theme.colors.textPrimary};
    text-align-vertical: top;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  `;

  export const ActionButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.accent};
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.radius.medium};
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  `;

  export const LogCard = styled.View`
    background-color: ${({ theme }) => theme.colors.surface};
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.radius.medium};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    border-left-width: ${({ theme }) => theme.radius.small};
    border-left-color: ${({ theme }) => theme.colors.accent};
  `;
}
