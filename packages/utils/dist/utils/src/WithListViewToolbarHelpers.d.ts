import { IActiveFilter, IFilterType, ISortType } from '@syndesis/ui';
import * as React from 'react';
export interface IWithListViewToolbarHelpers extends IWithListViewToolbarHelpersState {
    onClearFilters(event: React.MouseEvent<HTMLAnchorElement>): void;
    onFilterAdded(title: string, value: string): void;
    onFilterValueSelected(filterValue: {
        id: string;
        title: string;
    }): void;
    onRemoveFilter(filter: IActiveFilter): void;
    onSelectFilterType(filterType: IFilterType): void;
    onToggleCurrentSortDirection(): void;
    onUpdateCurrentSortType(sortType: string): void;
    onUpdateCurrentValue(event: Event): void;
    onValueKeyPress(keyEvent: KeyboardEvent): void;
}
export interface IWithListViewToolbarHelpersProps {
    defaultFilterType: IFilterType;
    defaultSortType: ISortType;
    children(props: IWithListViewToolbarHelpers): any;
}
export interface IWithListViewToolbarHelpersState {
    activeFilters: IActiveFilter[];
    currentFilterType: IFilterType;
    currentSortType: string;
    currentValue: any;
    filterCategory: any;
    isSortAscending: boolean;
}
export declare class WithListViewToolbarHelpers extends React.Component<IWithListViewToolbarHelpersProps, IWithListViewToolbarHelpersState> {
    constructor(props: IWithListViewToolbarHelpersProps);
    onUpdateCurrentValue: (event: Event) => void;
    onValueKeyPress: (keyEvent: KeyboardEvent) => void;
    onFilterAdded: (title: string, value: string) => void;
    onSelectFilterType: (filterType: IFilterType) => void;
    onFilterValueSelected: (filterValue: {
        id: string;
        title: string;
    }) => void;
    onRemoveFilter: (filter: IActiveFilter) => void;
    onClearFilters: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    onToggleCurrentSortDirection: () => void;
    onUpdateCurrentSortType: (sortType: string) => void;
    render(): any;
}
