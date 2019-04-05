import * as React from 'react';
export declare type INotificationType = 'success' | 'info' | 'warning' | 'error';
export interface INotification {
    key: string;
    message: string;
    type: INotificationType;
}
export interface INotificationsProps {
    notifications: INotification[];
    notificationTimerDelay: number;
    removeNotificationAction(notification: INotification): void;
}
export declare class Notifications extends React.Component<INotificationsProps> {
    render(): JSX.Element;
}
