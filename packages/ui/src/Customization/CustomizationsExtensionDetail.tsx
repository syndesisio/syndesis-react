import {
  Button,
  Card,
  CardBody,
  CardHeading,
  CardTitle,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from 'patternfly-react';
import * as React from 'react';
import './CustomizationsExtensionDetail.css';
import { ExtensionType, IExtension, IIntegration } from './models';

export interface IExtensionDetailProps {
  extension: IExtension;
  i18nDelete: string;
  i18nDeleteTip?: string;
  i18nDescription: string;
  i18nIdMessage: string;
  i18nLastUpdate: string;
  i18nLastUpdateDate: string;
  i18nName: string;
  i18nOverview: string;
  i18nSupportedConnectors: string;
  i18nSupportedLibraries: string;
  i18nSupportedSteps: string;
  i18nType: string;
  i18nTypeMessage: string;
  i18nUpdate: string;
  i18nUpdateTip?: string;
  i18nUsage: string;
  i18nUsageMessage: string;
  onDelete: (extensionName: string) => void;
  onSelectIntegration: (integrationId: string) => void;
  onUpdate: (extensionName: string) => void;
  usedByIntegrations?: IIntegration[];
}

export class CustomizationsExtensionDetail extends React.Component<
  IExtensionDetailProps
> {
  public constructor(props: IExtensionDetailProps) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  public createCardBody() {
    return (
      <>
        {this.createOverviewSection()}
        {this.createSupportsSection()}
        {this.createUsageSection()}
      </>
    );
  }

  public createCardHeading() {
    return (
      <CardTitle>
        <Row>
          <h1 className={'col-sm-8 extension-title'}>
            {this.props.extension.name}
            {this.props.extension.extensionId ? (
              <span className={'extension-id'}>{this.props.i18nIdMessage}</span>
            ) : null}
          </h1>
          <div className="col-sm-4 text-right">
            <OverlayTrigger overlay={this.getUpdateTooltip()} placement="top">
              <Button bsStyle="primary" onClick={this.onUpdate}>
                {this.props.i18nUpdate}
              </Button>
            </OverlayTrigger>
            <OverlayTrigger overlay={this.getDeleteTooltip()} placement="top">
              <Button
                bsStyle="default"
                disabled={this.props.extension.uses !== 0}
                onClick={this.onDelete}
              >
                {this.props.i18nDelete}
              </Button>
            </OverlayTrigger>
          </div>
        </Row>
      </CardTitle>
    );
  }

  public createOverviewSection() {
    return (
      <div className="extension-group">
        <h3>{this.props.i18nOverview}</h3>
        <dl className="dl-horizontal">
          <dt>{this.props.i18nName}</dt>
          <dd>{this.props.extension.name}</dd>
          <dt>{this.props.i18nDescription}</dt>
          <dd>
            {this.props.extension.description
              ? this.props.extension.description
              : ''}
          </dd>
          <dt>{this.props.i18nType}</dt>
          <dd>{this.props.i18nTypeMessage}</dd>
          <dt>{this.props.i18nLastUpdate}</dt>
          <dd>{this.props.i18nLastUpdateDate}</dd>
        </dl>
      </div>
    );
  }

  public createSupportsSection() {
    const msgForType = (extType: ExtensionType) => {
      switch (extType) {
        case ExtensionType.Steps:
          return this.props.i18nSupportedSteps;
        case ExtensionType.Connectors:
          return this.props.i18nSupportedConnectors;
        case ExtensionType.Libraries:
          return this.props.i18nSupportedLibraries;
      }
    };
    const supportedMsg = msgForType(this.props.extension.extensionType);

    return (
      <div className="extension-group">
        <h3>{supportedMsg}</h3>
        <Row>
          <div className="col-xs-offset-1 col-xs-11">
            {this.props.extension.actions.map(action => (
              <div>
                <strong>{action.name}</strong> - {action.description}
              </div>
            ))}
          </div>
        </Row>
      </div>
    );
  }

  public createUsageSection() {
    return (
      <div className="extension-group">
        <h3>{this.props.i18nUsage}</h3>
        <Row>
          <div className="col-xs-offset-1 col-xs-11">
            <p>{this.props.i18nUsageMessage}</p>
            {this.props.usedByIntegrations ? (
              <Table.PfProvider
                striped={true}
                bordered={true}
                hover={true}
                columns={this.getColumns()}
              >
                <Table.Header />
                <Table.Body
                  rows={this.props.usedByIntegrations}
                  rowKey="name"
                />
              </Table.PfProvider>
            ) : null}
          </div>
        </Row>
      </div>
    );
  }

  public getColumns() {
    const headerFormat = (value: string) => (
      <Table.Heading>{value}</Table.Heading>
    );

    const clickableValueFormat = (
      value: string,
      { rowData }: { rowData: any }
    ) => {
      // rowData is an Integration type so 'name' property is what makes the integration unique
      const onClick = () => this.onIntegrationSelected(rowData.name);
      return (
        <Table.Cell>
          <a href="javascript:void(0)" onClick={onClick}>
            {value}
          </a>
        </Table.Cell>
      );
    };

    // Creates 2 columns:
    // 1. first column is integration name
    // 2. second column is optional integration description.
    return [
      {
        cell: {
          formatters: [clickableValueFormat],
        },
        header: {
          formatters: [headerFormat],
          label: this.props.i18nName,
        },
        property: 'name', // must match the name of the Integration.name property
      },
      {
        cell: {
          formatters: [(value: string) => <Table.Cell>{value}</Table.Cell>],
        },
        header: {
          formatters: [headerFormat],
          label: this.props.i18nDescription,
        },
        property: 'description', // must match the name of the Integration.description property
      },
    ];
  }

  public getDeleteTooltip() {
    return (
      <Tooltip id="deleteTip">
        {this.props.i18nDeleteTip
          ? this.props.i18nDeleteTip
          : this.props.i18nDelete}
      </Tooltip>
    );
  }

  public getUpdateTooltip() {
    return (
      <Tooltip id="updateTip">
        {this.props.i18nUpdateTip
          ? this.props.i18nUpdateTip
          : this.props.i18nUpdate}
      </Tooltip>
    );
  }

  public onDelete() {
    this.props.onDelete(this.props.extension.name);
  }

  public onIntegrationSelected(integrationId: string) {
    this.props.onSelectIntegration(integrationId);
  }

  public onUpdate() {
    this.props.onUpdate(this.props.extension.name);
  }

  public render() {
    return (
      <Card matchHeight={true}>
        <CardHeading>{this.createCardHeading()}</CardHeading>
        <CardBody>{this.createCardBody()}</CardBody>
      </Card>
    );
  }
}
