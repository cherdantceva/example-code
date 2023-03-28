import React, { FC, useState } from 'react';
import { useTranslation } from 'next-i18next';

import { TableLocations } from 'src/containers/Locations/components/TableLocations';

import { _Button, _LocationsHeader, _LocationsRoot, _Title } from './styles';

export const Locations: FC = () => {
  const { t } = useTranslation('common');
  const [isRowAdded, setIsRowAdded] = useState(false);
  return (
    <_LocationsRoot>
      <_LocationsHeader>
        <_Title>{t('storageManagement')}</_Title>
        <_Button
          onClick={() => {
            setIsRowAdded(true);
          }}
        >
          <_Title>{t('addLocation')}</_Title>
        </_Button>
      </_LocationsHeader>
      <TableLocations isRowAdded={isRowAdded} setIsRowAdded={setIsRowAdded} />
    </_LocationsRoot>
  );
};
