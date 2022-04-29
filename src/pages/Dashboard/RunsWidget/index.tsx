import { Button } from '@suhomozgy-andrey/panthera-tailwind';
import Panthera16ChevronRightIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/16/Panthera16ChevronRight';
import Panthera32RunsIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Runs';

import { DashboardWidget } from '../../../components/DashboardWidget';
import { NoData } from '../../../components/NoData';

import { WidgetRunRow } from '../../../components/WidgetRunRow';
import { IRun, RunStatusEnum } from '../../../types/Runs/run';

const fakeRuns: IRun[] = [
    {
        title: 'Test Run 12',
        number: 12,
        status: RunStatusEnum.InProgress,
        dateTimeEnd: 'Dec 12, Sat 8pm',
        dateTimeStart: '8pm Sun, Dec 13',
        issuesCount: 8,
        testsCount: 2,
        testers: [
            {
                avatar: 'https://testlio.s3-accelerate.amazonaws.com/user/53609/medium-1627029501.jpg',
                firstName: 'Andrei',
                lastName: 'Sukhomozgii'
            },
            {
                firstName: 'Karl',
                lastName: 'Kelder'
            },
            {
                firstName: 'Andrei',
                lastName: 'Sukhomozgii'
            }
        ]
    },
    {
        title: 'Test Run 9',
        number: 9,
        status: RunStatusEnum.Stopped,
        dateTimeEnd: 'Dec 11, Fri 8pm',
        dateTimeStart: '8pm Sat, Dec 12'
    },
    {
        title: 'Test Run 11',
        number: 11,
        status: RunStatusEnum.InProgressPercent,
        finishedPercent: 91,
        dateTimeEnd: 'Dec 12, Sat 8pm',
        dateTimeStart: '8pm Sun, Dec 13',
        issuesCount: 3,
        testsCount: 12,
        testers: [
            {
                avatar: 'https://testlio.s3-accelerate.amazonaws.com/user/53609/medium-1627029501.jpg',
                firstName: 'Andrei',
                lastName: 'Sukhomozgii'
            },
            {
                firstName: 'Karl',
                lastName: 'Kelder'
            }
        ]
    },
    {
        title: 'Test Run 10 - Login & Signup flow localizations - Portuguese',
        number: 10,
        status: RunStatusEnum.Draft,
        dateTimeEnd: 'Dec 12, Sat 8pm',
        dateTimeStart: '8pm Sun, Dec 13'
    },
    {
        title: 'Test Run 102 - Login & Signup flow localizations - Ukrainian',
        number: 102,
        status: RunStatusEnum.Finished,
        dateTimeEnd: 'Dec 12, Sat 8pm',
        dateTimeStart: '8pm Sun, Dec 13'
    },
    {
        title: 'Test Run 103 - Login & Signup flow localizations - Chinese',
        number: 103,
        status: RunStatusEnum.Draft,
        dateTimeEnd: 'Dec 12, Sat 8pm',
        dateTimeStart: '8pm Sun, Dec 13'
    }
];

export const RunsWidget = () => {
    return (
        <DashboardWidget
            title='Runs'
            count={fakeRuns.length}
            content={
                <div>
                    {fakeRuns.map((el) => (
                        <WidgetRunRow run={el} key={el.title} />
                    ))}
                </div>
            }
            noDataContent={<NoData title='Runs missing' icon={<Panthera32RunsIcon className='tw-w-12 tw-h-12' />} />}
            footerAction={
                <Button variant='plain-subdued' postfixIcon={<Panthera16ChevronRightIcon />}>
                    Manage runs
                </Button>
            }
        />
    );
};
