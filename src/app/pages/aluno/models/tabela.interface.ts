import { NzTableSortOrder } from 'ng-zorro-antd/table';

export interface TableHeaderConfig {
  align: 'left' | 'right' | 'center' | null;
  compare?: any;
  priority?: boolean;
  title?: string;
  width?: string;
  sortOrder?: NzTableSortOrder;
}
