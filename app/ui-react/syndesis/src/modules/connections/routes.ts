/* tslint:disable:object-literal-sort-keys */
import { include } from 'named-urls';

export default include('/connections', {
  connections: '',
  create: include('create', {
    selectConnector: 'connection-basics',
    configureConnector: 'configure-fields/:connectorId',
    review: 'review',
    root: '',
  }),
});