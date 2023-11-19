export interface AuthStateProps {
  token: string | null;
  isAuthenticated: boolean;
  user: null;
  loading: boolean;
  error: null;
}

export interface RootStoreStateProps {
  auth: AuthStateProps;
}