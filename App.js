import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, StatusBar } from 'react-native';

const { width } = Dimensions.get('window');
const buttonSize = (width - 50) / 4;

export default function App() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (num) => {
    if (newNumber) {
      setDisplay(num.toString());
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num.toString() : display + num);
    }
  };

  const handleOperation = (op) => {
    const current = parseFloat(display);
    
    if (previousValue === null) {
      setPreviousValue(current);
    } else if (operation) {
      const result = calculate(previousValue, current, operation);
      setDisplay(result.toString());
      setPreviousValue(result);
    }
    
    setOperation(op);
    setNewNumber(true);
  };

  const calculate = (prev, current, op) => {
    switch (op) {
      case '+': return prev + current;
      case '-': return prev - current;
      case '×': return prev * current;
      case '÷': return prev / current;
      default: return current;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const current = parseFloat(display);
      const result = calculate(previousValue, current, operation);
      setDisplay(result.toString());
      setPreviousValue(null);
      setOperation(null);
      setNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleDelete = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
      setNewNumber(true);
    }
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
      setNewNumber(false);
    }
  };

  const handlePlusMinus = () => {
    setDisplay((parseFloat(display) * -1).toString());
  };

  const Button = ({ text, onPress, style, textStyle }) => (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* 显示屏 */}
      <View style={styles.displayContainer}>
        <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
          {display}
        </Text>
      </View>

      {/* 按钮区域 */}
      <View style={styles.buttonsContainer}>
        {/* 第一行 */}
        <View style={styles.row}>
          <Button text="C" onPress={handleClear} style={styles.functionButton} />
          <Button text="⌫" onPress={handleDelete} style={styles.functionButton} />
          <Button text="±" onPress={handlePlusMinus} style={styles.functionButton} />
          <Button text="÷" onPress={() => handleOperation('÷')} style={styles.operatorButton} />
        </View>

        {/* 第二行 */}
        <View style={styles.row}>
          <Button text="7" onPress={() => handleNumber(7)} />
          <Button text="8" onPress={() => handleNumber(8)} />
          <Button text="9" onPress={() => handleNumber(9)} />
          <Button text="×" onPress={() => handleOperation('×')} style={styles.operatorButton} />
        </View>

        {/* 第三行 */}
        <View style={styles.row}>
          <Button text="4" onPress={() => handleNumber(4)} />
          <Button text="5" onPress={() => handleNumber(5)} />
          <Button text="6" onPress={() => handleNumber(6)} />
          <Button text="-" onPress={() => handleOperation('-')} style={styles.operatorButton} />
        </View>

        {/* 第四行 */}
        <View style={styles.row}>
          <Button text="1" onPress={() => handleNumber(1)} />
          <Button text="2" onPress={() => handleNumber(2)} />
          <Button text="3" onPress={() => handleNumber(3)} />
          <Button text="+" onPress={() => handleOperation('+')} style={styles.operatorButton} />
        </View>

        {/* 第五行 */}
        <View style={styles.row}>
          <Button 
            text="0" 
            onPress={() => handleNumber(0)} 
            style={styles.zeroButton} 
          />
          <Button text="." onPress={handleDecimal} />
          <Button text="=" onPress={handleEquals} style={styles.equalsButton} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    paddingTop: 60,
  },
  displayText: {
    fontSize: 70,
    color: '#ffffff',
    fontWeight: '300',
  },
  buttonsContainer: {
    flex: 3,
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: '400',
  },
  functionButton: {
    backgroundColor: '#505050',
  },
  operatorButton: {
    backgroundColor: '#ff9500',
  },
  equalsButton: {
    backgroundColor: '#ff9500',
  },
  zeroButton: {
    width: buttonSize * 2 + 10,
    borderRadius: buttonSize / 2,
  },
});
