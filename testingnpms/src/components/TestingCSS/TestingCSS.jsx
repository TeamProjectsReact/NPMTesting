import React from 'react'
import { ButtonCustomLarge, ButtonCustomSmall } from '@jehankandy/react-jkcss'


const TestingCSS = () => {
  return (
    <div>
        <ButtonCustomLarge bgColor={"pink"} textColor={'white'}>Hi all</ButtonCustomLarge>
        <ButtonCustomSmall bgColor={"purple"} textColor={'white'}>Hi all</ButtonCustomSmall>
    </div>
  )
}

export default TestingCSS