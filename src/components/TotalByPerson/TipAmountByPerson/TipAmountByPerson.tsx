import { ComponentProps } from 'react';
import './TipAmountByPerson.css'

interface TipAmountByPersonProps extends ComponentProps<'button'> {
    value: number;
}

export function TipAmountByPerson({ value }: TipAmountByPersonProps) { 

    return(
        <div className="all-total-stats">
            <div className="tip-amount">
                <div className="text-tip-amount">
                    <strong>Gorjeta</strong>
                    <span>/ pessoa</span>
                </div>
                <strong 
                className="number"
                >${value ? value.toFixed(2) : (0).toFixed(2)}</strong>
            </div>
        </div>
    )
}