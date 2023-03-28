import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

import { FormData } from 'src/containers/Locations/types/types';
import { Modal } from 'src/ui/views/Modal';

import { RowForm } from '../RowForm';
import { RowView } from '../RowView';
import { _ModalText, _ModalTitle } from './styles';

type TableRowProps = {
  node?: FormData;
  handleAccept?: () => void;
  handleCancel?: () => void;
  handleDelete?: () => void;
  handleCreateCancel?: () => void;
  onRemove?: () => void;
  setSendData?: (data: FormData) => void;
  editReset?: boolean;
  setEditReset?: (b: boolean) => void;
};

export const TableRow: FC<TableRowProps> = ({ node, onRemove, editReset, setEditReset }) => {
  const { t } = useTranslation('common');
  const [isEdit, setIsEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (editReset) {
      setIsEdit(false);
      setEditReset?.(false);
    }
  }, [editReset, setEditReset]);

  return (
    <>
      <Modal openModal={openModal} setOpenModal={setOpenModal} onRemove={onRemove}>
        <>
          <_ModalTitle>{t('shouldTheWarehouseBeDeleted')}</_ModalTitle>
          <_ModalText>{t('warehouseDeletionWarning')}</_ModalText>
        </>
      </Modal>
      {!isEdit && <RowView node={node} setEdit={setIsEdit} setOpenModal={setOpenModal} />}
      {isEdit && <RowForm isEdit={isEdit} node={node} setIsEdit={setIsEdit} />}
    </>
  );
};
