import * as React from 'react';
import ContentLoader from 'react-content-loader';

export interface IIntegrationsListSkeletonProps {
  width: number;
  style?: any;
}

export const IntegrationsListSkeleton = ({
  width,
  style
}: IIntegrationsListSkeletonProps) => (
  <ContentLoader
    height={356}
    width={width}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    style={style}
  >
    <circle cx="30" cy="40" r="16" />
    <circle cx="70" cy="40" r="16" />
    <rect x="105" y="35" rx="5" ry="5" width="200" height="15" />
    <rect x={width - 100} y="35" rx="5" ry="5" width="80" height="15" />

    <circle cx="30" cy="110" r="16" />
    <circle cx="70" cy="110" r="16" />
    <rect x="105" y="105" rx="5" ry="5" width="180" height="15" />
    <rect x={width - 100} y="105" rx="5" ry="5" width="80" height="15" />

    <circle cx="30" cy="180" r="16" />
    <circle cx="70" cy="180" r="16" />
    <rect x="105" y="175" rx="5" ry="5" width="195" height="15" />
    <rect x={width - 100} y="175" rx="5" ry="5" width="85" height="15" />

    <circle cx="30" cy="250" r="16" />
    <circle cx="70" cy="250" r="16" />
    <rect x="105" y="245" rx="5" ry="5" width="225" height="15" />
    <rect x={width - 100} y="245" rx="5" ry="5" width="85" height="15" />

    <circle cx="30" cy="320" r="16" />
    <circle cx="70" cy="320" r="16" />
    <rect x="105" y="315" rx="5" ry="5" width="165" height="15" />
    <rect x={width - 100} y="315" rx="5" ry="5" width="85" height="15" />
  </ContentLoader>
);
