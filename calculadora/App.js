import React  from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './src/components/Button'
import Display from './src/components/Display'


const initialDisplay= {
  displayValue : '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0, //qual elemento eu to setando
}

export default function App() {
  State = {... initialDisplay}
  addDigit = (n) =>{
    if(n==='.' && this.state.displayValue.includes('.')){
      return
    }

    const clearDisplay = this.state.displayValue === '0'|| this.state.clearDisplay
     
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.state.displayValue = displayValue
    this.state.clearDisplay =  false

    if(n !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [... this.state.values]
      values[this.state.current] = newValue
      this.state.values = values
    }

    console.log(state)
  }

  clearMemory = () =>{
    state = {... initialDisplay}
  }

  setOperation = operation => {
    if(this.state.current === 0){
      this.state.operation = operation
      this.state.current = 1
      this.state.clearDisplay = true
    }else{
      const equals = operation === '='
      const values = [...this.state.values]
      try{
          values[0] =
            eval(`$values[0] ${this.state.operation} $values[1]`)
      }catch(e){
          values[0] = this.state.values[0] //nao faz nada
      }

      values[1] = 0

      
      this.state.displayValue = values [0],
      this.state.operation = equals ? null : operation,
      this.state.current = equals ? 0 : 1,
      this.state.clearDisplay =  !equals,
      this.state.values = values 

      
      

    }
  }

  return (
    <View style={styles.container}>
      <Display value = {State.displayValue}/>
      <View style = {styles.buttons}>
        <Button label= "AC" triple onClick={this.clearMemory}/>
        <Button label= '/' operation onClick={() => this.setOperation('/')}/>
        <Button label= '7' onClick={() => this.addDigit('7')}/>
        <Button label= '8' onClick={() => this.addDigit('8')}/>
        <Button label= '9' onClick={() => this.addDigit('9')}/>
        <Button label= '*' operation onClick={() => this.setOperation('*')}/>
        <Button label= '4' onClick={() => this.addDigit('4')}/>
        <Button label= '5' onClick={() => this.addDigit('5')}/>
        <Button label= '6' onClick={() => this.addDigit('6')}/>
        <Button label= '-' operation onClick={() => this.setOperation('-')}/>
        <Button label= '1' onClick={() => this.addDigit('1')}/>
        <Button label= '2' onClick={() => this.addDigit('2')}/>
        <Button label= '3' onClick={() => this.addDigit('3')}/>
        <Button label= '+' operation onClick={() => this.setOperation('+')}/>
        <Button label= '0' double  onClick={() => this.addDigit('0')}/>
        <Button label= '.' onClick={() => this.addDigit('.')}/>
        <Button label= '='operation onClick={() => this.setOperation('=')}/>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap', //quebra de linha
  }
});
