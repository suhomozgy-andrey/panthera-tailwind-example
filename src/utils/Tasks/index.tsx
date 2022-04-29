import { Badge } from '@suhomozgy-andrey/panthera-tailwind';

import { TaskTypeEnum, TaskStatusEnum } from '../../types/Tasks/task';

export const getTaskTypeName = (taskType: TaskTypeEnum) => {
    switch (taskType) {
        case TaskTypeEnum.IssueReproduction:
            return 'Issue Reproduction';
        case TaskTypeEnum.TestExecution:
            return 'Tests Execution';
        case TaskTypeEnum.TestersSupport:
            return 'Testers Support';
        default:
            return 'Unknown';
    }
};

export const getTaskStatusBadge = (taskStatus: TaskStatusEnum) => {
    switch (taskStatus) {
        case TaskStatusEnum.Accepted:
            return (
                <Badge type='success' size='sm' className='tw-whitespace-nowrap'>
                    Accepted
                </Badge>
            );
        case TaskStatusEnum.InReview:
            return (
                <Badge type='warning' size='sm' className='tw-whitespace-nowrap'>
                    In review
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
