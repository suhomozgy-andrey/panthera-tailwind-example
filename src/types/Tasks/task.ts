export enum TaskStatusEnum {
    Accepted = 'Accepted',
    InReview = 'InReview'
}

export enum TaskTypeEnum {
    TestExecution = 'TestExecution',
    IssueReproduction = 'IssueReproduction',
    TestersSupport = 'TestersSupport'
}

export interface ITask {
    title: string;
    dateTime: string;
    status: TaskStatusEnum;
    type: TaskTypeEnum;
}
