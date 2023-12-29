import { ComponentProps } from 'react';
import './TotalByPerson.css'

interface TipAmountByPersonProps extends ComponentProps<'button'> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any;
}

export function TotalByPerson({value}: TipAmountByPersonProps) {
    return (
        <div className="total-person">
                <div className="text-total-person">
                    <strong>Total</strong>
                    <span>/ pessoa</span>
                </div>
                <strong className='number'>${value ? value.toFixed(2) : (0).toFixed(2)}</strong>
            </div>
    )
}