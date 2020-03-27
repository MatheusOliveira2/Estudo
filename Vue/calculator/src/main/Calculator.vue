<template>
    <div class="calculator">
        <Display :value="displayValue" />
        <Button @onClick="cleanDisplay" label="AC" triple />
        <Button @onClick="setOperation" label="/" operation />
        <Button @onClick="setDigit" label="7" />
        <Button @onClick="setDigit" label="8" />
        <Button @onClick="setDigit" label="9" />
        <Button @onClick="setOperation" label="*" operation />
        <Button @onClick="setDigit" label="4" />
        <Button @onClick="setDigit" label="5" />
        <Button @onClick="setDigit" label="6" />
        <Button @onClick="setOperation" label="-" operation />
        <Button @onClick="setDigit" label="1" />
        <Button @onClick="setDigit" label="2" />
        <Button @onClick="setDigit"  label="3" />
        <Button @onClick="setOperation" label="+" operation />
        <Button @onClick="setDigit" label="0" double />
        <Button @onClick="setDigit" label="." />
        <Button @onClick="setOperation" label="=" operation />
    </div>
      
</template>

<script>
import Display from '../components/Display'
import Button from '../components/Button'

export default {
    data: function(){
        return{
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0,0],
            current: 0,
            acumulate: false
        }
    },
    components: {Button, Display},
    
    methods:{
        cleanDisplay(){
            Object.assign(this.$data, this.$options.data())
        },

        setOperation(operation){
            if(this.current === 0){
                this.current = 1
                this.operation = operation
                this.clearDisplay = true
                return
            }
            if(this.acumulate){
                if(operation !== '='){
                    this.operation = operation
                }
            }
            if(operation === '='){
                switch(this.operation){
                    case '+':
                        this.values[0] = this.values[0] + this.values[1]
                        this.displayValue = this.values[0]
                        this.clearDisplay = true
                        this.values[1] = 0
                        this.acumulate = true
                        break

                    case '-':
                        this.values[0] = this.values[0] - this.values[1]
                        this.displayValue = this.values[0]
                        this.clearDisplay = true
                        this.values[1] = 0
                        this.acumulate = true
                        break

                    case '*':
                        this.values[0] = this.values[0] * this.values[1]
                        this.displayValue = this.values[0]
                        this.clearDisplay = true
                        this.values[1] = 0
                        this.acumulate = true
                        break
                    
                    case '/':
                        this.values[0] = this.values[0] / this.values[1]
                        this.displayValue = this.values[0]
                        this.clearDisplay = true
                        this.values[1] = 0
                        this.acumulate = true
                        break

                }
            }
        },

        setDigit(d){
            if(d === '.' && this.displayValue.includes('.')){
                return
            }
            const clearDisplay = this.displayValue == '0' || this.clearDisplay
            const currentValue = clearDisplay ? "": this.displayValue
            const displayValue = currentValue + d

            this.displayValue = displayValue
            this.clearDisplay = false
            
            if(d != '.'){
                this.values[this.current] = parseFloat(displayValue)
            }
        }
    }
}
</script>
<style>

.calculator{
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}

</style>