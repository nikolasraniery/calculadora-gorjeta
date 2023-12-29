import Bill from '../Bill/Bill'
import TipPercentage from '../TipPercentage/TipPercentage'
import NumberPersons from '../NumberPersons/NumberPersons'
import './Content.css'
import { RefObject, useRef, useState } from 'react'
import { TipAmountByPerson } from '../TotalByPerson/TipAmountByPerson/TipAmountByPerson'
import { TotalByPerson } from '../TotalByPerson/TotalByPerson'

export function Content() {
    const [tippedTip, setTippedTip] = useState<number>()
    const [numberOfPeople, setNumberOfPeople] = useState<number>()
    const [selectedPercentage, setSelectedPercentage] = useState<number>(0)

    const tipAmountCalc = (tippedTip * selectedPercentage) / numberOfPeople
    const totalByPersonCalc = (tippedTip / numberOfPeople) + tipAmountCalc

    const customRef: RefObject<HTMLInputElement> = useRef()


    function resetStats() {
        setTippedTip(null)
        setNumberOfPeople(null)
        setSelectedPercentage(null)

        customRef.current.value = ''
    }


  return (

    <div className='all'>

        <div className='text-top'>
            <strong>SPLI</strong>
            <strong>TTER</strong>
        </div>

        <div className='geral-content'>


            <div className='content-left'>
            <Bill
                onChange={(event) => setTippedTip(parseFloat(event.target.value))}
                value={tippedTip ?? ''}
                
            />
            <TipPercentage
                selectedPercentage={selectedPercentage}
                onChange={(value) => setSelectedPercentage(value)}
                customRefObj={customRef}

            />
            <NumberPersons
                onChange={(value) => setNumberOfPeople(parseInt(value.target.value))}
                value={numberOfPeople ?? ''}
            />
            </div>
            <div className='content-right'>
            <TipAmountByPerson
                value={tipAmountCalc}
            />
            <TotalByPerson
                value={totalByPersonCalc}
            />

                
            <button
                onClick={resetStats}
            >
                RESET
            </button>
            </div>
        </div>
      </div>
  )
}
