/**
 * Key Value Mapping
 */
enum State {
  loading,
  done,
  error,
}

type GlobalApiStatus = {
  getUser: State;
  paginatedUsers: State | undefined;
  banUser: State | null;
  getPosts: State;
};

type UserApiStatus = {
  getUser: State;
  paginatedUsers: State | undefined;
  banUser: State | null;
};

type UserApiStatus2 = {
  getUser: GlobalApiStatus['getUser'];
  paginatedUsers: GlobalApiStatus['paginatedUsers'];
  banUser: GlobalApiStatus['banUser'];
};

type UserApisStatus3 = {
  [k in 'getUser' | 'paginatedUsers' | 'banUser']: GlobalApiStatus[k];
};

// Pick: 유틸리티 타입.
type UserApisStatus4 = Pick<
  GlobalApiStatus,
  'getUser' | 'paginatedUsers' | 'banUser'
>;

// Omit: 유틸리티 타입.
type UserApisStatus5 = Omit<GlobalApiStatus, 'getPosts'>;

/**
 * keyof
 */
type AllKeys = keyof GlobalApiStatus;
const key: AllKeys = 'getUser';

type UserApisStatus6 = {
  [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
};

// Exclude: 유틸리티 타입.
type UserApisStatus7 = {
  [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k];
};

/**
 * interface key value mapping
 */
interface LoadingStatus {
  type: 'loading';
  data: string[];
}

interface ErrorStatus {
  type: 'error';
  data: string[];
}

type FetchStatus = LoadingStatus | ErrorStatus;
type StatusType = FetchStatus['type']; // 'loading' | 'error'
