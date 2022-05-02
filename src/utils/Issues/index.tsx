import Panthera16ArrowDownIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/16/Panthera16ArrowDown';
import Panthera16ArrowUpIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/16/Panthera16ArrowUp';

import { IssuePriorityEnum } from '../../types/Issues/issue';

export const getPriorityElementByType = (priority: IssuePriorityEnum) => {
    switch (priority) {
        case IssuePriorityEnum.High:
            return <Panthera16ArrowUpIcon className='tw-text-red-main tw-min-w-4' />;
        case IssuePriorityEnum.Medium:
            return <Panthera16ArrowUpIcon className='tw-text-yellow-main tw-min-w-4' />;
        case IssuePriorityEnum.Low:
            return <Panthera16ArrowDownIcon className='tw-text-green-main tw-min-w-4' />;
        default:
            return null;
    }
};
