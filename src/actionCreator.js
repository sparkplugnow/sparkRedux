  export const action = ()=> {
     return {
       type: 'INC',
       payload:{
         name: 'CONGRATULATIONS',
       }
     }
  }
  export const reaction = ()=>{
    return{
      type: 'DEC',
      payload: {
        name: 'CONGRATULATIONS AGAIN!!!'
      }
    }
  }