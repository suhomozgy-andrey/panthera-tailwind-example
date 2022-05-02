export enum IssuePriorityEnum {
    High = 'high',
    Medium = 'medium',
    Low = 'low'
}

export interface IIssue {
    title: string;
    number: number;
    attachmentsAmount?: number;
    commentsAmount?: number;
    priority: IssuePriorityEnum;
    isFavorite: boolean;
}
