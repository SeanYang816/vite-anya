export interface AuthStateProps {
  token: string | null;
  isAuthenticated: boolean;
  user: null;
}

export interface RootStoreStateProps {
  auth: AuthStateProps;
}