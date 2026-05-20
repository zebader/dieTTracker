import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Keyboard } from 'react-native';
import { styled } from 'styled-components/native';

namespace S {
  export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f7f5f0;
  padding: 20px;
`;

  export const ContentWrapper = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 40px;
`;

  export const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 12px;
`;

  export const StyledInput = styled.TextInput`
  background-color: #ffffff;
  border-width: 1px;
  border-color: #d1cbd4;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  text-align-vertical: top;
  margin-bottom: 12px;
`;

  export const ActionButton = styled.TouchableOpacity`
  background-color: #4caf50;
  padding: 14px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 24px;
`;

  export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

  export const LogCard = styled.View`
  background-color: white;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 10px;
  border-left-width: 4px;
  border-left-color: #4caf50;
`;

  export const LogText = styled.Text`
  font-size: 15px;
  color: #333;
`;

  export const LogTime = styled.Text`
  font-size: 11px;
  color: #7f8c8d;
  margin-top: 4px;
`;
}

export default function App() {
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
        <S.SectionTitle>Log Today&apos;s Meals</S.SectionTitle>

        <S.StyledInput
          placeholder="Example: Breakfast: 3 scrambled eggs, coffee. Lunch: Chicken wrap..."
          multiline
          numberOfLines={4}
          value={inputText}
          onChangeText={setInputText}
        />

        <S.ActionButton onPress={handleSave}>
          <S.ButtonText>Save Day Log locally</S.ButtonText>
        </S.ActionButton>

        <S.SectionTitle>Saved Today In SQLite</S.SectionTitle>
        <FlatList
          data={todayLogs}
          /* keyExtractor={(item) => item.id.toString()} */
          renderItem={({ item }) => (
            <S.LogCard>
              {/*               <LogText>{item.raw_text}</LogText>
              <LogTime>{item.timestamp} ({item.meal_period})</LogTime> */}
            </S.LogCard>
          )}
        />
      </S.ContentWrapper>
      <StatusBar style="dark" />
    </S.Container>
  );
}