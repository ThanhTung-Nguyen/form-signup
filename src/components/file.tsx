import React from 'react'

const useTinh = () => {
    const sum = (a:number, b:number) => {
        return a + b
    }
    const sub = (a: number, b: number) => {
      return a - b;
    };
    return {sum, sub}
}

export default useTinh