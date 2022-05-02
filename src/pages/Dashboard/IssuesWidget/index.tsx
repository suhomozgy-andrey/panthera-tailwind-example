import { Link } from 'react-router-dom';
import { Button } from '@suhomozgy-andrey/panthera-tailwind';
import Panthera16ChevronRightIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/16/Panthera16ChevronRight';
import Panthera32IssuesIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Issues';

import { DashboardWidget } from '../../../components/DashboardWidget';
import { NoData } from '../../../components/NoData';

import { WidgetIssueRow } from '../../../components/WidgetIssueRow';
import { IIssue, IssuePriorityEnum } from '../../../types/Issues/issue';

const fakeIssues: IIssue[] = [
    {
        title: '[Login] Unable to enter password',
        number: 332433,
        priority: IssuePriorityEnum.High,
        attachmentsAmount: 1,
        commentsAmount: 2,
        isFavorite: false
    },
    {
        title: '[Filters] Sorting from A to Z does not sort filters that start with a number',
        number: 653453,
        priority: IssuePriorityEnum.Low,
        attachmentsAmount: 1,
        commentsAmount: 2,
        isFavorite: false
    },
    {
        title: '[Sign up] Application crashes when entering Greek characters',
        number: 25232,
        priority: IssuePriorityEnum.Medium,
        attachmentsAmount: 1,
        commentsAmount: 2,
        isFavorite: true
    },
    {
        title: '[Profile] Avatar not updated on main navigation',
        number: 34545,
        priority: IssuePriorityEnum.Low,
        attachmentsAmount: 1,
        commentsAmount: 2,
        isFavorite: false
    },
    {
        title: '[Attachments] Uploading a *.png file does not render a preview',
        number: 525252,
        priority: IssuePriorityEnum.Low,
        attachmentsAmount: 1,
        commentsAmount: 2,
        isFavorite: false
    }
];

export const IssuesWidget = () => {
    return (
        <DashboardWidget
            title='Issues'
            count={fakeIssues.length}
            content={
                <div>
                    {fakeIssues.map((el) => (
                        <WidgetIssueRow issue={el} key={el.number} />
                    ))}
                </div>
            }
            noDataContent={
                <NoData title='Issues missing' icon={<Panthera32IssuesIcon className='tw-w-12 tw-h-12' />} />
            }
            footerAction={
                <Button variant='plain-subdued' postfixIcon={<Panthera16ChevronRightIcon />}>
                    Manage issues
                </Button>
            }
        />
    );
};
