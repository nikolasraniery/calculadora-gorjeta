import { ComponentProps } from 'react';
import './ButtonTip.css'

interface ButtonTipProps extends ComponentProps<'button'> {
    value: number;
    onButtonClick: () => void;
    destacado?: boolean;
}

export function ButtonTip({ value, onButtonClick, destacado, ...rest }: ButtonTipProps) {

    const valuePercentage = value * 100
    
    // console.log(destacado)

    return (
        <button
            type="button"
            className={`${destacado ? 'button-tip item-grid destacado' : 'button-tip item-grid'}`}
            onClick={onButtonClick}
            {...rest}
        >
            {valuePercentage}%
        </button>
    )
}