import { useState, useEffect } from 'react';
import { CotationPageContainer, Fields, CotationValue } from './styles';

import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

export default function CotationPage() {
    const options = ['USD', 'USDT', 'CAD', 'AUD', 'EUR', 'GBP', 'ARS', 'JPY', 'CHF', 'CNY', 'YLS', 'BTC', 'LTC', 'ETH', 'XRP'];
    const [value, setValue] = useState(0);
    const [coin, setCoin] = useState('USD');
    const [cotation, setCotation] = useState(0);
    
    useEffect(() => {
        api.get('/' + coin + '-BRL').then(res => {
            setCotation((value * res.data[coin].ask).toFixed(2));
        })
    }, [value, coin]);

    return (
        <CotationPageContainer>
            <Fields>
                <Input onChange={(value) => setValue(value)}/>
                <Select 
                    onChange={(value) => setCoin(value)}
                    options={options}
                />
            </Fields>
            <CotationValue>
                <span>R$</span>
                <div>{cotation}</div>
            </CotationValue>
        </CotationPageContainer>
    );
}