import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import { theme } from '../styles/theme';

export function Page1() {

    const [texto, setTexto] = useState('');

    var resultados = texto.split("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TEXT TO BINARY</Text>
        <Text style={styles.subtitle}>ASCII / UTF-8</Text>
      </View>

        <View style={styles.textview}>
          <Text style={styles.cabecario}>escreva seu texto</Text>
          <TextInput style={styles.textinput} onChangeText={setTexto} autoCorrect={false} multiline></TextInput>
        </View>

        <ScrollView>
          <View style={styles.resposta}>
          {resultados.map((item, key) =>(
          <Text key={key} style={styles.conversao}>{"("+ item + ")" + " = " + item.charCodeAt(0).toString(2)} </Text>)
          )}
          </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.preto,
  },
  header:{
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: theme.colors.verde,
    fontSize: 29,
  },
  subtitle: {
    color: theme.colors.verde,
    fontSize: 23,
  },
  cabecario: {
    color: theme.colors.verde,
  },
  textview: {
    marginHorizontal: 25,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    borderWidth: 1,
    borderColor: theme.colors.verde,
    color: theme.colors.verde,
    backgroundColor: theme.colors.cinza,
    width: '100%'
  },
  resposta:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  conversao:{
    color: theme.colors.verde,
    fontSize: 17,
  },

});
