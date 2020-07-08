export interface TableListItem {
  name?: string,
  email?: string,
  position?: string,
  department?: string,
  score?: number,
  publicPhoto?: string,
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
}

export interface TableListParams {
  username?: string,
  name?: string,
  email?: string,
  position?: string,
  department?: string,
  score?: number,
}
