import { RestDataService } from '@syndesis/models';
//import { WithVirtualization } from '@syndesis/api';
import * as React from 'react';
//import VirtualizationNavBar from '../components/VirtualizationNavBar';
// import { Breadcrumb } from '@syndesis/ui';
// import { Link } from 'react-router-dom';
//import { Translation } from 'react-i18next';
// import resolvers from '../resolvers';
//import { WithLoader, WithRouteData } from '@syndesis/utils';
// import {
//   ViewListView,
//   // ViewListItem,
//   ViewListSkeleton
// } from '@syndesis/ui';

/**
 * @param virtualizationId - the ID of the virtualization whose details are being shown by this page.
 */
export interface IVirtualizationDetailRouteParams {
  virtualizationId: string;
}

/**
 * @param virtualizationId - the extension whose details are being shown by this page. If
 * exists, it must equal to the [virtualizationId]{@link IVirtualizationDetailRouteParams#virtualizationId}.
 * This is used to immediately show the details to the user, without
 * any loader; the backend will be called nonetheless to ensure that we are
 * working with the latest data available. This will be used when navigating from the
 * [VirtualizationsPage]{@link VirtualizationsPage}.
 */
export interface IVirtualizationDetailRouteState {
  virtualization?: RestDataService;
}

export default class VirtualizationDetailsPage extends React.Component {
  public handleVirtualizationSelected(virtualizationId: string) {
    alert("TODO: Show integration '" + virtualizationId + "'");
  }
  public render() {
    return 'in virtualization detail';
  }
}