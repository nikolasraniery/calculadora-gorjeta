import "./TipPercentage.css"
import "./ButtonTip/ButtonTip"
import { ButtonTip } from "./ButtonTip/ButtonTip"

interface TipPercentageProps {
    selectedPercentage?: number;
    onChange: (selectedPercentage: number) => void;
    destacado?: boolean;
    onButtonClick?: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    customRefObj: any;
}



function TipPercentage({ onChange, selectedPercentage, customRefObj }: TipPercentageProps) {
    
    function destaque(percentage){
        return percentage === selectedPercentage;
    }


    return (
        <div className='select-tip'>
            <h1 className="tip-percentage">Select Tip %</h1>
            <div className="button-tip-percentage">
                <ButtonTip 
                    value={0.05} 
                    onButtonClick={() => onChange(0.05)}
                    destacado={selectedPercentage == 0.05}
                />
                <ButtonTip 
                    value={0.1} 
                    onButtonClick={() => onChange(0.10)}
                    destacado={destaque(0.10)}
                />
                <ButtonTip 
                    value={0.15} 
                    onButtonClick={() => onChange(0.15)}
                    destacado={destaque(0.15)}
                />
                <ButtonTip 
                    value={0.25} 
                    onButtonClick={() => onChange(0.25)}
                    destacado={destaque(0.25)}
                />
                <ButtonTip 
                    value={0.5} 
                    onButtonClick={() => onChange(0.5)}
                    destacado={destaque(0.5)}
                />
                <input 
                    className="input-tip-percentage item-grid"
                    type="number" 
                    placeholder="Custom"
                    ref={customRefObj}
                    onChange={(event) => onChange(Number(event.target.value)  / 100)}
                />
            </div>
        </div>
    )
}

export default TipPercentage