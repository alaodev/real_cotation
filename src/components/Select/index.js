import { SelectContainer } from './styles';

export default function Select(props) {
    return (
        <SelectContainer onChange={e => props.onChange(e.target.value)}>
            {
                props.options.map((option, index) => {
                    return <option key={index}>{option}</option>
                })
            }
        </SelectContainer>
    );
}