import { Button } from '@suhomozgy-andrey/panthera-tailwind';
import Panthera16ChevronRightIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/16/Panthera16ChevronRight';
import Panthera32SubmitIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Submit';

import { DashboardWidget } from '../../../components/DashboardWidget';
import { NoData } from '../../../components/NoData';

import { WidgetTaskRow } from '../../../components/WidgetTaskRow';
import { ITask, TaskStatusEnum, TaskTypeEnum } from '../../../types/Tasks/task';

const fakeTasks: ITask[] = [
    {
        title: 'Re-run of regression test of build v1.0_21',
        status: TaskStatusEnum.Accepted,
        dateTime: 'Mon, Sept 8 9:30 AM',
        type: TaskTypeEnum.TestExecution
    },
    {
        title: 'Profile issue validation',
        status: TaskStatusEnum.InReview,
        dateTime: 'Mon, Sept 8 8:00 AM',
        type: TaskTypeEnum.IssueReproduction
    },
    {
        title: 'Version 2 Run for execution build check for validity',
        status: TaskStatusEnum.InReview,
        dateTime: 'Wed, Aug 28 12:20 PM',
        type: TaskTypeEnum.TestersSupport
    }
];

export const TasksWidget = () => {
    return (
        <DashboardWidget
            title='My tasks'
            count={fakeTasks.length}
            content={
                <div>
                    {fakeTasks.map((el) => (
                        <WidgetTaskRow task={el} key={el.title} />
                    ))}
                </div>
            }
            noDataContent={<NoData title='Tasks missing' icon={<Panthera32SubmitIcon className='tw-w-12 tw-h-12' />} />}
            footerAction={
                <Button variant='plain-subdued' postfixIcon={<Panthera16ChevronRightIcon />}>
                    Manage tasks
                </Button>
            }
        />
    );
};
