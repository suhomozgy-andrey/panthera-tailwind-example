import Panthera16TimerIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/16/Panthera16Timer';

import { ITask } from '../../types/Tasks/task';
import { getTaskStatusBadge, getTaskTypeName } from '../../utils/Tasks';

interface IWidgetTaskRowProps {
    task: ITask;
}

export const WidgetTaskRow = ({ task }: IWidgetTaskRowProps) => {
    const { title, status, dateTime, type } = task;
    return (
        <div className='tw-py-2 tw-border-solid tw-border-t-0 tw-border-x-0 tw-border-b tw-border-utility-darkest tw-border-opacity-4'>
            <div className='tw-mb-2 tw-flex tw-items-start tw-justify-between tw-gap-2'>
                <span className='tw-text-sm '>{title}</span>
                {getTaskStatusBadge(status)}
            </div>
            <div className='tw-flex tw-items-center tw-flex-wrap'>
                <span className='tw-flex tw-items-center tw-mr-3 tw-text-xs tw-text-ink-lighter'>
                    <Panthera16TimerIcon />
                    {dateTime}
                </span>
                <span className='tw-text-xs tw-text-ink-lighter'>{getTaskTypeName(type)}</span>
            </div>
        </div>
    );
};
