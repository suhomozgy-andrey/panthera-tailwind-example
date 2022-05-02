import { Button } from '@suhomozgy-andrey/panthera-tailwind';
import Panthera16ChevronRightIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/16/Panthera16ChevronRight';
import Panthera32TestsIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Tests';
import Panthera32PlansIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Plans';
import Panthera32TeamIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Team';

import { DashboardWidget } from '../../components/DashboardWidget';
import { NoData } from '../../components/NoData';
import { ProjectPicker } from '../../components/ProjectPicker';
import { DefaultLayout } from '../../Lyouts/DefaultLayout';

import { TasksWidget } from './TasksWidget';
import { RunsWidget } from './RunsWidget';
import { IssuesWidget } from './IssuesWidget';

export const Dashboard = () => {
    return (
        <DefaultLayout
            contentTitle={
                <div className='tw-max-w-[240px]'>
                    <ProjectPicker title='Dashboard' />
                </div>
            }
        >
            <div className='tw-flex tw-flex-wrap tw-gap-4'>
                <TasksWidget />
                <RunsWidget />
                <IssuesWidget />
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
