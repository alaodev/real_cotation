import { InputContainer } from './styles';

export default function Input(props) {
    console.log(props);
    return (
        <InputContainer
            min="0"
            onChange={e => props.onChange(e.target.value)}
            placeholder="0"
            type="number"
        />
    );
}