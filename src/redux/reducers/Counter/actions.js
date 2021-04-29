import axios from 'axios';


export function IncreaseCounter(){
    return{
        type:"INCREASE_COUNTER"
    }
}

export function DecreaseCounter() {
  return {
    type: 'DECREASE_COUNTER',
  };
}

export function IncreaseIfOdd() {
  return {
    type: 'INCREASE_IF_ODD',
  };
}
