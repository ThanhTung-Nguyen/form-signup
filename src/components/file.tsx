import { resolve } from 'path';
import React, {useState} from 'react'

const useDangky = () => {
  const [loading, setLoading] = useState(false);

  const request = (value:any) => {
    var promise = new Promise<void>((resolve, reject) => {
        setTimeout(resolve,1000)
        setLoading(true)
    }).then(() => {setLoading(false)})
  }
  return {loading, request};
}
export default useDangky