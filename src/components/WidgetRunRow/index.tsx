import { Avatar, Tooltip } from '@suhomozgy-andrey/panthera-tailwind';
import Panthera16IssuesIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/16/Panthera16Issues';
import Panthera16TestsIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/16/Panthera16Tests';
import Panthera24HorizontalDotsIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/24/Panthera24HorizontalDots';
import classNames from 'classnames';

import { IRun } from '../../types/Runs/run';
import { getRunStatusBadge } from '../../utils/Runs';

interface IWidgetRunRowProps {
    run: IRun;
}

export const WidgetRunRow = ({ run }: IWidgetRunRowProps) => {
    const {
        title,
        number,
        status,
        dateTimeStart,
        finishedPercent,
        dateTimeEnd,
        issuesCount,
        testsCount,
        testers = []
    } = run;
    return (
        <div className='tw-py-2 tw-border-solid tw-border-t-0 tw-border-x-0 tw-border-b tw-border-utility-darkest tw-border-opacity-4 tw-gap-2 tw-flex tw-flex-col'>
            <div className='tw-flex tw-items-start tw-justify-between tw-gap-2 tw-w-full'>
                <span className='tw-text-sm'>{title}</span>
                {getRunStatusBadge(status, finishedPercent)}
            </div>
            <div className='tw-flex tw-items-center tw-mr-3 tw-text-xs tw-text-ink-lighter tw-w-full'>
                {dateTimeStart} - {dateTimeEnd}
            </div>
            <div className='tw-flex tw-items-center tw-justify-between tw-mr-3 tw-text-xs tw-text-ink-lighter tw-gap-3 tw-w-full'>
                <div className='tw-flex tw-items-center tw-mr-3 tw-text-xs tw-text-ink-lighter tw-gap-3'>
                    <span>{`RUN-${number}`}</span>
                    <span className='tw-flex tw-items-center'>
                        <Panthera16TestsIcon />
                        {testsCount ?? '-'}
                    </span>
                    <span className='tw-flex tw-items-center'>
                        <Panthera16IssuesIcon />
                        {issuesCount ?? '-'}
                    </span>
                </div>
                {testers?.length > 0 && (
                    <div className='tw-flex'>
                        {testers?.map((tester, index) =>
                            index <= 1 ? (
                                <Avatar
                                    size='xxs'
                                    key={index}
                                    src={tester.avatar}
                                    className={classNames('tw-bg-primary-main', {
                                        '-tw-ml-1': index > 0
                                    })}
                                    children={
                                        !tester.avatar
                                            ? `${tester.firstName.charAt(0)}${tester.lastName.charAt(0)}`
                                            : undefined
                                    }
                                />
                            ) : (
                                <Avatar
                                    size='xxs'
                                    key={index}
                                    className={classNames({
                                        '-tw-ml-1': index > 0
                                    })}
                                    icon={<Panthera24HorizontalDotsIcon />}
                                />
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
