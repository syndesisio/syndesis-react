// Extension Types
export enum ExtensionType {
  Connectors = 'Connectors',
  Libraries = 'Libraries',
  Steps = 'Steps',
}

export interface IAction {
  name: string;
  description?: string;
}

// Represents an Extension used by customizations.
export interface IExtension {
  actions: IAction[];
  description?: string;
  extensionId?: string;
  extensionType: ExtensionType;
  name: string;
  uses: number;
}

// Represents an Integration used by customizations.
export interface IIntegration {
  description?: string;
  name: string;
}
