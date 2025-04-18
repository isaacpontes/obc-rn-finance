import React, { useState } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { styles } from '@/styles/globals';
import { PrimaryButton } from '@/components/PrimaryButton';
import { TransactionModal } from '@/components/TransactionModal';

const transactions = [
  { id: '1', description: 'Supermercado', amount: -50.75 },
  { id: '2', description: 'Salário', amount: 2500.00 },
  { id: '3', description: 'Restaurante', amount: -120.40 },
  { id: '4', description: 'Aluguel', amount: -800.00 },
];

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddTransaction = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2C5F30" />

      <Image source={require("@/assets/images/finance-logo.png")} style={styles.logo} />
      <Text style={styles.greeting}>
        Olá, Usuário!
      </Text>
      <Text style={styles.balanceLabel}>
        Saldo Atual
      </Text>
      <Text style={styles.balance}>
        R$ 1.529,85
      </Text>

      <View style={styles.buttonsContainer}>
        <PrimaryButton text='Adicionar Transação' onPress={handleAddTransaction} />
      </View>

      <TransactionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={(data) => {
          alert(`Receita adicionada:\n\n ${JSON.stringify(data)}`); 
        }}
      />

      <Text style={styles.sectionTitle}>
        Transações Recentes
      </Text>
      {transactions.map(transaction => (
        <View key={transaction.id} style={styles.transactionItem}>
          <Text style={styles.transactionText}>
            {transaction.description}
          </Text>
          <Text style={[styles.transactionAmount, transaction.amount >= 0 ? styles.income : styles.expense]}>
            R$ {transaction.amount.toFixed(2)}
          </Text>
        </View>
      ))}
    </View>
  );
};


export default HomeScreen;