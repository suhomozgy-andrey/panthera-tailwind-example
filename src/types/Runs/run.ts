import { IUser } from '../Users/user';

export enum RunStatusEnum {
    InProgress = 'InProgress',
    InProgressPercent = 'InProgressPercent',
    Stopped = 'Stopped',
    Draft = 'Draft',
    Finished = 'Finished'
}

export interface IRun {
    title: string;
    number: number;
    dateTimeStart: string;
    dateTimeEnd: string;
    testsCount?: number;
    issuesCount?: number;
    finishedPercent?: number;
    status: RunStatusEnum;
    testers?: IUser[];
}
