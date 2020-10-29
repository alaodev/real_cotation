import { TopbarContainer } from './styles';

import { FaMoneyBill } from 'react-icons/fa'

export default function Topbar() {
    return (
        <TopbarContainer>
            <FaMoneyBill className="money-icon" />
            RealCotation
        </TopbarContainer>
    );
}