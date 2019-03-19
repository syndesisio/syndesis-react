import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import { Alert as PF3Alert } from 'patternfly-react';
import {
  Alert,
  AlertGroup,
  AlertProps,
  AlertVariant,
  OneOf,
  AlertActionCloseButton,
} from '@patternfly/react-core';
import * as React from 'react';

const stories = storiesOf('Notifications', module);

stories.add('AlertGroup - Multiple PF3 Alerts', () => {
  return (
    <AlertGroup className="list-unstyled">
      <PF3Alert type="error">
        <span>PF3: Something has gone wrong...</span>
      </PF3Alert>
      <PF3Alert type="warning">
        <span>PF3: Warning</span>
      </PF3Alert>
      <PF3Alert type="success">
        <span>
          PF3: Well done! You successfully read this important alert message.
        </span>
      </PF3Alert>
      <PF3Alert type="info">
        <span>PF3: Info</span>
      </PF3Alert>
    </AlertGroup>
  );
});

stories.add('AlertGroup - Multiple PF4 Alerts', () => {
  return (
    <AlertGroup className="list-unstyled">
      <Alert title="PF4 Success Alert" variant="success" />
      <Alert title="PF4 Error Alert" variant="danger" />
      <Alert title="PF4 Warning Alert" variant="warning" />
      <Alert title="PF4 Info Alert" variant="info" />
    </AlertGroup>
  );
});

const logAddNotification = action('Added notification');
const logRemoveNotification = action('Removed notification');

stories.add(
  'AlertGroup - PF3 Alert on click',
  withState<{ notifications: { title: string; type: string }[] }>({
    notifications: [],
  })(({ store }) => {
    const addNotification = (title: string, type: string) => {
      store.set({
        notifications: [...store.state.notifications, { type, title }],
      });
      logAddNotification();
    };
    const removeNotification = (index: number) => {
      const newNotificationList = store.state.notifications.filter(
        (el, idx) => !(idx === index)
      );
      store.set({
        notifications: newNotificationList,
      });
      logRemoveNotification();
    };
    return (
      <>
        <button
          type="button"
          onClick={() =>
            addNotification('Success notification Title!', 'success')
          }
        >
          Add Success notification
        </button>
        <button
          type="button"
          onClick={() => addNotification('Error notification Title!', 'error')}
        >
          Add Error notification
        </button>
        <button
          type="button"
          onClick={() => addNotification('Info notification Title!', 'info')}
        >
          Add Info notification
        </button>
        <button
          type="button"
          onClick={() =>
            addNotification('Warning notification Title!', 'warning')
          }
        >
          Add Warning notification
        </button>
        <AlertGroup className="list-unstyled">
          {store.state.notifications.map((notification, index) => (
            <PF3Alert
              type={notification.type}
              onDismiss={() => removeNotification(index)}
              key={index}
            >
              <span>{notification.title}</span>
            </PF3Alert>
          ))}
        </AlertGroup>
      </>
    );
  })
);

type Variant = OneOf<typeof AlertVariant, keyof typeof AlertVariant>;

stories.add(
  'AlertGroup - PF4 Alert on click',
  withState<{ notifications: AlertProps[] }>({ notifications: [] })(
    ({ store }) => {
      const addNotification = (title: string, variant: Variant) => {
        store.set({
          notifications: [...store.state.notifications, { variant, title }],
        });
        logAddNotification();
      };
      const removeNotification = (index: number) => {
        const newNotificationList = store.state.notifications.filter(
          (el, idx) => !(idx === index)
        );
        store.set({
          notifications: newNotificationList,
        });
        logRemoveNotification();
      };
      return (
        <>
          <button
            type="button"
            onClick={() =>
              addNotification('Success notification Title!', 'success')
            }
          >
            Add Success notification
          </button>
          <button
            type="button"
            onClick={() =>
              addNotification('Danger notification Title!', 'danger')
            }
          >
            Add Error notification
          </button>
          <button
            type="button"
            onClick={() => addNotification('Info notification Title!', 'info')}
          >
            Add Info notification
          </button>
          <button
            type="button"
            onClick={() =>
              addNotification('Warning notification Title!', 'warning')
            }
          >
            Add Warning notification
          </button>
          <AlertGroup className="list-unstyled">
            {store.state.notifications.map((notification, index) => (
              <Alert
                variant={notification.variant}
                title={notification.title}
                action={
                  <AlertActionCloseButton
                    onClose={() => removeNotification(index)}
                  />
                }
                key={index}
              />
            ))}
          </AlertGroup>
        </>
      );
    }
  )
);
