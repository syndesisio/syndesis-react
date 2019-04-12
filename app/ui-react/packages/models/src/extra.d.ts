import {
  Connection,
  ConfigurationProperty,
  IntegrationMetricsSummary,
  IntegrationOverview,
  WithId,
} from './models';

export interface StringMap<T> {
  [key: string]: T;
}

export interface BaseEntity extends WithId {
  kind?: string;
  name?: string;
}

// TODO remove when these values are advertised by the swagger
export interface IConfigurationProperty extends ConfigurationProperty {
  required?: boolean;
  secret?: boolean;
}

// Extended connection interface to add support for the 'iconFile' property
export interface IConnectionWithIconFile extends Connection {
  icon?: any;
  iconFile?: File;
}

export interface IntegrationWithOverview {
  integration: IntegrationOverview;
  overview?: IntegrationMetricsSummary;
}

export interface IntegrationWithMonitoring {
  integration: IntegrationOverview;
  monitoring?: IntegrationMonitoring;
}

export interface IntegrationMonitoring {
  deploymentVersion: number;
  detailedState: {
    value: string;
    currentStep: number;
    totalSteps: number;
  };
  value: string;
  id: string;
  integrationId: string;
  linkType: 'LOGS' | 'EVENTS';
  namespace: string;
  podName: string;
}

// Enum for the LeveledMessage level field
export enum MessageLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

// These are message codes that we know about
export enum MessageCode {
  SYNDESIS000 = 'SYNDESIS000', // generic message
  SYNDESIS001 = 'SYNDESIS001', // One or more properties have been updated
  SYNDESIS002 = 'SYNDESIS002', // One or more properties have been added or removed
  SYNDESIS003 = 'SYNDESIS003', // Connector has been deleted
  SYNDESIS004 = 'SYNDESIS004', // Extension has been deleted
  SYNDESIS005 = 'SYNDESIS005', // Action has been deleted
  SYNDESIS006 = 'SYNDESIS006', // One or more required properties is not set
  SYNDESIS007 = 'SYNDESIS007', // Secrets update needed
  SYNDESIS008 = 'SYNDESIS008', // Validation Error
}

// Integration status types and consts
export const PENDING = 'Pending';
export const PUBLISHED = 'Published';
export const UNPUBLISHED = 'Unpublished';
export const ERROR = 'Error';

export type IntegrationStatus =
  | 'Pending'
  | 'Published'
  | 'Unpublished'
  | 'Error';

export enum IntegrationType {
  SingleFlow = 'SingleFlow',
  ApiProvider = 'ApiProvider',
  MultiFlow = 'MultiFlow',
}

// These types are for the integration detailed state
// TODO: this should come from the swagger but it's missing
export enum ConsoleLinkType {
  Events = 'EVENTS',
  Logs = 'LOGS',
}

export enum DetailedStatus {
  Assembling = 'ASSEMBLING',
  Building = 'BUILDING',
  Deploying = 'DEPLOYNG',
  Starting = 'STARTING',
}

export interface DetailedState {
  value: DetailedStatus;
  currentStep: number;
  totalSteps: number;
}

export interface IntegrationStatusDetail {
  detailedState: DetailedState;
  linkType?: ConsoleLinkType;
  logsUrl?: string;
  eventsUrl?: string;
  id: string;
  integrationId: string;
  deploymentVersion: number;
  namespace: string;
  podName: string;
}

// These types are for the logging backend, not in the swagger
// TODO: this should come from the swagger but it's missing
export interface Activity extends BaseEntity {
  logts?: string;
  at: number;
  pod: string;
  ver: string;
  status: string;
  failed: boolean;
  steps?: ActivityStep[];
  metadata?: any;
}

export interface ActivityStep extends BaseEntity {
  at: number;
  duration?: number;
  isFailed: boolean;
  failure?: string;
  messages?: string[];
  output?: string;
  events?: any;
}

// Data shape kind enum when working with the DataShape type
export enum DataShapeKinds {
  ANY = 'any',
  JAVA = 'java',
  JSON_SCHEMA = 'json-schema',
  JSON_INSTANCE = 'json-instance',
  XML_SCHEMA = 'xml-schema',
  XML_SCHEMA_INSPECTED = 'xml-schema-inspected',
  XML_INSTANCE = 'xml-instance',
  NONE = 'none',
}

// Special sekret connection metadata keys
export const HIDE_FROM_STEP_SELECT = 'hide-from-step-select';
export const HIDE_FROM_CONNECTION_PAGES = 'hide-from-connection-pages';
