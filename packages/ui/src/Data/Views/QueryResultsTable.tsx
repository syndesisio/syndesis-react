import { EmptyState, Table } from 'patternfly-react';
import * as React from 'react';
import { QueryResults } from '../../../../models';

/**
 * @param queryResults - QueryResults object from a view query
 */
export interface IQueryResultsTableProps {
  /**
   * The localized text information that appears for this component when query results is null
   */
  i18nEmptyStateInfo: string;

  /**
   * The localized text title that appears for this component when query results is null
   */
  i18nEmptyStateTitle: string;

  /**
   * The QueryResults object containing column and row data.
   */
  queryResults: QueryResults;
}

/**
 * A component to display a table of query results from a deployed
 * data service view.
 *
 * This component is specific to Virtualization Views and converts QueryResults
 * data into column and row data compatible with patternfly-react Table component
 *
 */
export class QueryResultsTable extends React.Component<
  IQueryResultsTableProps
> {
  public rowKey: string;

  public constructor(props: IQueryResultsTableProps) {
    super(props);
    /**
     * the rowKey property is required by Table.Body
     * When creating columns info, cache this value using the first column's 'name' property
     */
    this.rowKey = '';
  }

  /*
   *  Header and Cell format objects are hard coded here for convenience
   */
  public headerFormat = (value: any) => <Table.Heading>{value}</Table.Heading>;

  public cellFormat = (value: any) => <Table.Cell>{value}</Table.Cell>;

  /*
   * Create N number of column fragments based on QueryResults.columnData array
   */
  public getColumns() {
    const columns: any[] = [];

    if (!this.props.queryResults.columns) {
      return columns;
    }

    this.rowKey = this.props.queryResults.columns[0].name;

    for (const theColumn of Array.from(this.props.queryResults.columns)) {
      const column = {
        cell: {
          formatters: [this.cellFormat],
        },
        header: {
          formatters: [this.headerFormat],
          label: theColumn.label,
        },
        property: theColumn.name,
      };
      columns.push(column);
    }

    return columns;
  }

  public getRows() {
    const rows: any[] = [];

    if (!this.props.queryResults.rows) {
      return [];
    }

    // The RowData object only constains string values for each column in the table
    // Need to create: an array of arrays of name/value pairs
    for (const rowData of Array.from(this.props.queryResults.rows)) {
      const theRow = {};

      for (let i = 0; this.props.queryResults.columns.length > i; i++) {
        theRow[this.props.queryResults.columns[i].name] = rowData.row[i];
      }

      rows.push(theRow);
    }

    return rows;
  }

  public render() {
    return (
      <>
        {this.props.queryResults &&
        this.props.queryResults.columns.length > 0 ? (
          <Table.PfProvider
            striped={true}
            bordered={true}
            hover={true}
            columns={this.getColumns()}
          >
            <Table.Header />
            <Table.Body rows={this.getRows()} rowKey={this.rowKey} />
          </Table.PfProvider>
        ) : (
          <EmptyState>
            <EmptyState.Title>
              {this.props.i18nEmptyStateTitle}
            </EmptyState.Title>
            <EmptyState.Info>{this.props.i18nEmptyStateInfo}</EmptyState.Info>
          </EmptyState>
        )}
      </>
    );
  }
}
