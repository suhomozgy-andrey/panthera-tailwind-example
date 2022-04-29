import Panthera24NotificationsIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/24/Panthera24Notifications';
import Panthera24SearchIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/24/Panthera24Search';
import Avatar from '@suhomozgy-andrey/panthera-tailwind/dist/components/Avatar/Avatar';

export const MainMenuUser = () => (
    <div className='tw-flex tw-flex-none tw-flex-col tw-items-center tw-mt-[16px] tw-px-[16px]'>
        <Panthera24SearchIcon />
        <Panthera24NotificationsIcon className='tw-mt-[12px]' />
        <Avatar className='tw-mt-[14px]' />
    </div>
);
