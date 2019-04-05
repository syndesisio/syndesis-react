import * as React from 'react';
export interface IUptimeMetricProps {
    start: number;
    i18nTitle: string;
}
export declare class UptimeMetric extends React.PureComponent<IUptimeMetricProps> {
    render(): JSX.Element;
}
