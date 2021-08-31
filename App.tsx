import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Page1 } from './src/Page1';

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <Page1 />
    </>
  );
}

