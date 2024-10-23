import type { AuthenticationPageProps, User } from '@staticcms/core';
import type { FC } from 'react';
export interface GitGatewayAuthenticationPageProps extends AuthenticationPageProps {
    handleAuth: (email: string, password: string) => Promise<User | string>;
}
declare const GitGatewayAuthenticationPage: FC<GitGatewayAuthenticationPageProps>;
export default GitGatewayAuthenticationPage;
