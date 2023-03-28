import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

import { useStore } from '@nanostores/react';
import { MyContractorData } from 'stores/myContractorStore';

import {
  MyLocationsDocument,
  useLocationCreateMutation,
  useLocationUpdateMutation
} from 'src/containers/Locations/graphql/Locations.generated';
import { FormData } from 'src/containers/Locations/types/types';

import SVGCheck from '../../assets/check-icon.svg';
import SVGCrossDelete from '../../assets/cross-delete-icon.svg';
import SVGLocationsIcon from '../../assets/table-locations-icon.svg';

import {
  _AddressInput,
  _CodeInput,
  _CommentTextInput,
  _IconCheck,
  _IconCrossDelete,
  _InputContainer,
  _InputValid,
  _LocationsNameInput,
  _NameInput,
  _PhoneInput,
  _TableCell,
  _TableCellCentered,
  _TableIconsAdd,
  _TableRowForm
} from './styles';

type TableRowProps = {
  node?: FormData;
  isEdit?: boolean;
  setIsEdit?: (b: boolean) => void;
};

export const RowForm: FC<TableRowProps> = ({ isEdit, setIsEdit, node }) => {
  const { t } = useTranslation('common');

  const [createLocationMutation] = useLocationCreateMutation();
  const [updateLocationMutaion] = useLocationUpdateMutation();
  const { data: contractorData } = useStore(MyContractorData);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: node
  });

  const onSubmit = async (data: FormData) => {
    try {
      if (isEdit) {
        return await updateLocationMutaion({
          variables: {
            input: {
              address: data.address,
              contactPerson: data.contactPerson,
              contactPhone: data.contactPhone,
              description: data?.description,
              externalId: data.externalId,
              title: data.title,
              id: data?.id,
              contactEmail: ''
            }
          },
          awaitRefetchQueries: true,
          refetchQueries: [MyLocationsDocument]
        });
      } else {
        return await createLocationMutation({
          variables: {
            input: {
              address: data?.address,
              contactPerson: data?.contactPerson,
              contactPhone: data?.contactPhone,
              description: data?.description,
              externalId: data?.externalId,
              title: data?.title,
              contactEmail: '',
              contractorId: contractorData?.id || ''
            }
          },
          awaitRefetchQueries: true,
          refetchQueries: [MyLocationsDocument]
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsEdit?.(false);
    }
  };

  return (
    <_TableRowForm onSubmit={handleSubmit(onSubmit)}>
      <_TableCellCentered>
        <SVGLocationsIcon height="1.8rem" width="2rem" />
      </_TableCellCentered>
      <_TableCell>
        <_InputContainer>
          <_LocationsNameInput noValid={errors?.title} type="text" {...register('title', { required: true })} />
          {errors?.title?.type === 'required' && <_InputValid>{t('fieldNotFilled')}</_InputValid>}
        </_InputContainer>
      </_TableCell>
      <_TableCell>
        <_InputContainer>
          <_CodeInput noValid={errors?.externalId} type="text" {...register('externalId', { required: true })} />
          {errors?.externalId?.type === 'required' && <_InputValid>{t('fieldNotFilled')}</_InputValid>}
        </_InputContainer>
      </_TableCell>
      <_TableCell>
        <_InputContainer>
          <_AddressInput noValid={errors?.address} type="text" {...register('address', { required: true })} />
          {errors?.address?.type === 'required' && <_InputValid>{t('fieldNotFilled')}</_InputValid>}
        </_InputContainer>
      </_TableCell>
      <_TableCell>
        <_InputContainer>
          <_NameInput noValid={errors?.contactPerson} type="text" {...register('contactPerson', { required: true })} />
          {errors?.contactPerson?.type === 'required' && <_InputValid>{t('fieldNotFilled')}</_InputValid>}
        </_InputContainer>
      </_TableCell>
      <_TableCell>
        <_InputContainer>
          <_PhoneInput noValid={errors?.contactPhone} type="text" {...register('contactPhone', { required: true })} />
          {errors?.contactPhone?.type === 'required' && <_InputValid>{t('fieldNotFilled')}</_InputValid>}
        </_InputContainer>
      </_TableCell>
      <_TableCell>
        <_InputContainer>
          <_CommentTextInput
            noValid={errors?.description}
            type="text"
            {...register('description', { required: true })}
          />
          {errors?.description?.type === 'required' && <_InputValid>{t('fieldNotFilled')}</_InputValid>}
        </_InputContainer>
      </_TableCell>
      <_TableCell>
        <_TableIconsAdd>
          <_IconCrossDelete onClick={() => setIsEdit?.(false)}>
            <SVGCrossDelete height="1.2rem" width="1.2rem" />
          </_IconCrossDelete>
          <_IconCheck type="submit">
            <SVGCheck height="1.4rem" width="1.8rem" />
          </_IconCheck>
        </_TableIconsAdd>
      </_TableCell>
    </_TableRowForm>
  );
};
