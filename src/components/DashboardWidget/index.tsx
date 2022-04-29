import classNames from 'classnames';
import { Button } from '@suhomozgy-andrey/panthera-tailwind';
import Panthera16ChevronRightIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/16/Panthera16ChevronRight';

import styles from './styles.module.scss';

interface IDashboardWidgetProps {
    title: string;
    count?: number;
    content?: React.ReactNode;
    footerAction?: React.ReactNode;
    noDataContent: React.ReactNode;
}

export const DashboardWidget = ({ title, count, content, footerAction, noDataContent }: IDashboardWidgetProps) => (
    <div
        className={classNames(
            styles.widget,
            'tw-flex tw-flex-col tw-border tw-border-solid tw-border-utility-darkest tw-border-opacity-12 tw-rounded-sm'
        )}
    >
        <div className='tw-px-4 tw-py-[14px] tw-border-solid tw-border-t-0 tw-border-x-0 tw-border-b tw-border-utility-darkest tw-border-opacity-4'>
            <span className='tw-mr-2'>My tasks</span> {count && <span className='tw-text-ink-lighter'>{count}</span>}
        </div>
        <div
            className={classNames('tw-px-6 tw-flex-grow', {
                'tw-overflow-auto': !!content,
                'tw-flex tw-items-center tw-justify-center': !content
            })}
        >
            {content ?? noDataContent}
        </div>
        <div className='tw-py-1 tw-flex tw-items-center tw-justify-end'>
            <Button variant='plain-subdued' postfixIcon={<Panthera16ChevronRightIcon />}>
                Manage tasks
            </Button>
        </div>
    </div>
);
