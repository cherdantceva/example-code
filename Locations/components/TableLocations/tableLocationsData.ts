import { t } from 'i18next';

type TableLocationsHeaderItem = {
  name: string;
  sortKey: string;
  sortable: boolean;
};

export const tableLocationsHeaderItems: Array<TableLocationsHeaderItem> = [
  { name: '', sortKey: '', sortable: false },
  { name: t('warehouseName'), sortKey: 'title', sortable: true },
  { name: t('supplierInformationSystemCode'), sortKey: 'externalId', sortable: true },
  { name: t('address'), sortKey: 'address', sortable: true },
  { name: t('nameOfContactPerson'), sortKey: 'contactPerson', sortable: true },
  { name: t('phone'), sortKey: 'contactPhone', sortable: true },
  { name: t('comment'), sortKey: 'description', sortable: true },
  { name: '', sortKey: '', sortable: false }
];
