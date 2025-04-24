import React, { useState } from 'react';
import { View, Text, Image, StatusBar, FlatList } from 'react-native';
import { styles } from '@/styles/globals';
import { PrimaryButton } from '@/components/PrimaryButton';
import { TransactionModal } from '@/components/TransactionModal';

const transactions = [
  { id: '1', description: 'Supermercado', amount: -50.75 },
  { id: '2', description: 'Salário', amount: 2500.00 },
  { id: '3', description: 'Restaurante', amount: -120.40 },
  { id: '4', description: 'Aluguel', amount: -800.00 },
  { id: '5', description: 'Ração do cachorro', amount: -199.99 },
  { id: '6', description: 'Ida ao cinema', amount: -54.78 },
  { id: '7', description: 'Freela', amount: 1600.00 },
  { id: '8', description: 'Contas de luz', amount: -252.91 },
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

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={styles.transactionText}>
              {item.description}
            </Text>
            <Text style={[styles.transactionAmount, item.amount >= 0 ? styles.income : styles.expense]}>
              R$ {item.amount.toFixed(2)}
            </Text>
          </View>
        )}
      />
    </View>
  );
};


export default HomeScreen;