import Panthera48TestlioIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/48/Panthera48Testlio';
import { Link } from 'react-router-dom';

export const MainMenuLogo = () => (
    <Link to='/' className='tw-flex tw-p-4'>
        <Panthera48TestlioIcon className='sdf tw-text-primary-main' />
    </Link>
);
