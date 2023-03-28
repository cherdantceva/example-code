import React, { FC, useState } from 'react';
import { InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { getServerSideProps } from 'pages/stocks';

import { TableLocations } from '../TableLocations';
import { _Button, _LocationsHeader, _LocationsRoot, _Title } from './styles';

export const Locations: FC = (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { t } = useTranslation('common');
  const [addRow, setAddRow] = useState(false);

  return (
    <_LocationsRoot>
      <_LocationsHeader>
        <_Title>{t('storageManagement')}</_Title>
        <_Button
          onClick={() => {
            setAddRow(true);
          }}
        >
          {t('addLocation')}
        </_Button>
      </_LocationsHeader>
      <TableLocations addRow={addRow} setAddRow={setAddRow} />
    </_LocationsRoot>
  );
};
