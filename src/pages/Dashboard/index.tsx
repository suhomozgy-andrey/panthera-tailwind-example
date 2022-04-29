import { Button } from '@suhomozgy-andrey/panthera-tailwind';
import Panthera16ChevronRightIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/16/Panthera16ChevronRight';
import Panthera32TestsIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Tests';
import Panthera32PlansIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Plans';
import Panthera32RunsIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Runs';
import Panthera32IssuesIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Issues';
import Panthera32TeamIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Team';

import { DashboardWidget } from '../../components/DashboardWidget';
import { NoData } from '../../components/NoData';
import { ProjectPicker } from '../../components/ProjectPicker';
import { DefaultLayout } from '../../Lyouts/DefaultLayout';

import styles from './styles.module.scss';
import { WidgetTaskRow } from '../../components/WidgetTaskRow';
import { ITask, TaskStatusEnum, TaskTypeEnum } from '../../types/Tasks/task';

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

export const Dashboard = () => {
    return (
        <DefaultLayout
            contentTitle={
                <div className={styles.dashboardTitle}>
                    <ProjectPicker title='Dashboard' />
                </div>
            }
        >
            <div className='tw-flex tw-flex-wrap tw-gap-4'>
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
                    noDataContent={<NoData title='Tasks missing' />}
                    footerAction={
                        <Button variant='plain-subdued' postfixIcon={<Panthera16ChevronRightIcon />}>
                            Manage tasks
                        </Button>
                    }
                />
                <DashboardWidget
                    title='Runs'
                    count={12}
                    noDataContent={
                        <NoData title='Runs missing' icon={<Panthera32RunsIcon className='tw-w-12 tw-h-12' />} />
                    }
                    footerAction={
                        <Button variant='plain-subdued' postfixIcon={<Panthera16ChevronRightIcon />}>
                            Manage runs
                        </Button>
                    }
                />
                <DashboardWidget
                    title='Issues'
                    count={127}
                    noDataContent={
                        <NoData title='Issues missing' icon={<Panthera32IssuesIcon className='tw-w-12 tw-h-12' />} />
                    }
                    footerAction={
                        <Button variant='plain-subdued' postfixIcon={<Panthera16ChevronRightIcon />}>
                            Manage issues
                        </Button>
                    }
                />
                <DashboardWidget
                    title='Plans'
                    count={34}
                    noDataContent={
                        <NoData title='Plans missing' icon={<Panthera32PlansIcon className='tw-w-12 tw-h-12' />} />
                    }
                    footerAction={
                        <Button variant='plain-subdued' postfixIcon={<Panthera16ChevronRightIcon />}>
                            Manage plans
                        </Button>
                    }
                />
                <DashboardWidget
                    title='Tests'
                    count={179}
                    noDataContent={
                        <NoData title='Tests missing' icon={<Panthera32TestsIcon className='tw-w-12 tw-h-12' />} />
                    }
                    footerAction={
                        <Button variant='plain-subdued' postfixIcon={<Panthera16ChevronRightIcon />}>
                            Manage tests
                        </Button>
                    }
                />
                <DashboardWidget
                    title='Teams'
                    count={78}
                    noDataContent={
                        <NoData title='Team missing' icon={<Panthera32TeamIcon className='tw-w-12 tw-h-12' />} />
                    }
                    footerAction={
                        <Button variant='plain-subdued' postfixIcon={<Panthera16ChevronRightIcon />}>
                            Manage teams
                        </Button>
                    }
                />
            </div>
        </DefaultLayout>
    );
};
