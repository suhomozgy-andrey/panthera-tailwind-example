import Panthera16CommentsIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/16/Panthera16Comments';
import Panthera16AttachFileIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/16/Panthera16AttachFile';
import Panthera16StarFilledIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/16/Panthera16StarFilled';

import { IIssue } from '../../types/Issues/issue';
import { getPriorityElementByType } from '../../utils/Issues';

interface IWidgetIssueRowProps {
    issue: IIssue;
}

export const WidgetIssueRow = ({
    issue: { title, number, commentsAmount, attachmentsAmount, priority, isFavorite }
}: IWidgetIssueRowProps) => (
    <div className='tw-py-2 tw-border-solid tw-border-t-0 tw-border-x-0 tw-border-b tw-border-utility-darkest tw-border-opacity-4 tw-gap-2 tw-flex tw-flex-col'>
        <div className='tw-flex tw-items-start tw-justify-between tw-gap-2 tw-w-full'>
            <span className='tw-text-sm'>{title}</span>
            {getPriorityElementByType(priority)}
        </div>
        <div className='tw-flex tw-items-center tw-mr-3 tw-text-xs tw-text-ink-lighter tw-gap-3 tw-w-full'>
            {isFavorite && <Panthera16StarFilledIcon className='tw-text-yellow-main' />}
            <span>{`#${number}`}</span>
            {commentsAmount && (
                <span className='tw-flex tw-items-center'>
                    <Panthera16CommentsIcon />
                    {commentsAmount ?? '-'}
                </span>
            )}
            {attachmentsAmount && (
                <span className='tw-flex tw-items-center'>
                    <Panthera16AttachFileIcon />
                    {attachmentsAmount ?? '-'}
                </span>
            )}
        </div>
    </div>
);
