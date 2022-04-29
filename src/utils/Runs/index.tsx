import { Badge } from '@suhomozgy-andrey/panthera-tailwind';

import { RunStatusEnum } from '../../types/Runs/run';

export const getRunStatusBadge = (runStatus: RunStatusEnum, percent?: number) => {
    switch (runStatus) {
        case RunStatusEnum.Draft:
            return (
                <Badge type='default' size='sm' className='tw-whitespace-nowrap'>
                    Draft
                </Badge>
            );
        case RunStatusEnum.Finished:
            return (
                <Badge type='success' size='sm' className='tw-whitespace-nowrap'>
                    Finished
                </Badge>
            );
        case RunStatusEnum.InProgress:
            return (
                <Badge type='primary' size='sm' className='tw-whitespace-nowrap'>
                    Finished
                </Badge>
            );
        case RunStatusEnum.InProgressPercent:
            return (
                <Badge type='success' size='sm' className='tw-whitespace-nowrap'>
                    {percent ? `${percent}%` : 'n/a'}
                </Badge>
            );
        case RunStatusEnum.Stopped:
            return (
                <Badge type='destructive' size='sm' className='tw-whitespace-nowrap'>
                    Stopped
                </Badge>
            );
        default:
            return (
                <Badge type='default' size='sm' className='tw-whitespace-nowrap'>
                    Unknown
                </Badge>
            );
    }
};
