import React, { FC, useCallback, useState } from 'react';

import { useSortableData } from 'src/lib/hooks/useSortableData';
import { getFormData } from '../TableRow/helpers/getFormData';

import {
  MyLocationsDocument,
  useLocationDeleteMutation,
  useMyLocationsQuery
} from 'src/containers/Locations/graphql/Locations.generated';

import SVGdefault from '../../assets/default.svg';
import SVGascending from '../../assets/sort_ascending.svg';
import SVGdescending from '../../assets/sort_descending.svg';

import { RowForm } from '../RowForm';
import { TableRow } from '../TableRow';
import {
  _TableBody,
  _TableContainer,
  _TableHeaderItem,
  _TableHeaderRow,
  _TableLocationsHeader,
  _TableLocationsRoot
} from './styles';
import { tableLocationsHeaderItems } from './tableLocationsData';

type TableLocationsProps = {
  isRowAdded: boolean;
  setIsRowAdded: (b: boolean) => void;
};

export const TableLocations: FC<TableLocationsProps> = ({ isRowAdded, setIsRowAdded }) => {
  const { data, loading, error } = useMyLocationsQuery();
  const [removeLocationMutation] = useLocationDeleteMutation();
  const locations = data?.myContractor?.locations?.edges || [];
  const [editReset, setEditReset] = useState(false);

  const { items, requestSort, sortConfig } = useSortableData(locations, {
    key: 'title',
    direction: 'ascending'
  });

  const getSortDirection = useCallback(
    (name: string) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    },
    [sortConfig]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const handleDelete = (id: string) =>
    removeLocationMutation({
      variables: {
        input: { id }
      },
      awaitRefetchQueries: true,
      refetchQueries: [MyLocationsDocument]
    });
  return (
    <_TableLocationsRoot>
      {(locations.length > 0 || isRowAdded) && (
        <_TableLocationsHeader>
          <_TableHeaderRow>
            {tableLocationsHeaderItems.map((headerItem, key) => (
              <_TableHeaderItem
                key={key}
                onClick={() => {
                  if (headerItem.sortable) {
                    requestSort(headerItem.sortKey);
                  }
                }}
              >
                {headerItem.name}&nbsp;
                {getSortDirection(headerItem.sortKey) === 'ascending' && (
                  <SVGascending height="1.5rem" width="1.6rem" />
                )}
                {getSortDirection(headerItem.sortKey) === 'descending' && (
                  <SVGdescending height="1.5rem" width="1.6rem" />
                )}
                {!getSortDirection(headerItem.sortKey) && headerItem.sortable && (
                  <SVGdefault height="1.5rem" width="1.6rem" />
                )}
              </_TableHeaderItem>
            ))}
          </_TableHeaderRow>
        </_TableLocationsHeader>
      )}
      <_TableContainer isEmpty={locations?.length === 0 && !isRowAdded}>
        <_TableBody isEmpty={locations?.length === 0 && !isRowAdded}>
          {items?.map((location) => (
            <TableRow
              key={location?.node?.id}
              editReset={editReset}
              node={getFormData(location?.node)}
              setEditReset={setEditReset}
              onRemove={() => handleDelete(location?.node?.id || '')}
            />
          ))}
          {isRowAdded && <RowForm setIsEdit={setIsRowAdded} />}
        </_TableBody>
      </_TableContainer>
    </_TableLocationsRoot>
  );
};
