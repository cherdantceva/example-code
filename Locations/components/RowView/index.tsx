import { FC } from 'react';

import { LocationSnapshot } from 'src/containers/Locations/graphql/Locations.generated';

import SVGDelete from '../../assets/delete-icon.svg';
import SVGEdit from '../../assets/edit_icon.svg';
import SVGLocationsIcon from '../../assets/table-locations-icon.svg';

import {
  _Address,
  _Code,
  _CommentText,
  _IconDelete,
  _IconEdit,
  _LocationsName,
  _Name,
  _Phone,
  _TableCell,
  _TableCellCentered,
  _TableIcons,
  _TableRow
} from './styles';

type RowViewProps = {
  node?: Partial<LocationSnapshot>;
  setOpenModal: (b: boolean) => void;
  setEdit: (b: boolean) => void;
};
export const RowView: FC<RowViewProps> = ({ node, setOpenModal, setEdit }) => (
  <_TableRow>
    <_TableCellCentered>
      <SVGLocationsIcon height="1.8rem" width="2rem" />
    </_TableCellCentered>
    <_TableCell>
      <_LocationsName>{node?.title}</_LocationsName>
    </_TableCell>
    <_TableCell>
      <_Code>{node?.externalId}</_Code>
    </_TableCell>
    <_TableCell>
      <_Address>{node?.address}</_Address>
    </_TableCell>
    <_TableCell>
      <_Name>{node?.contactPerson}</_Name>
    </_TableCell>
    <_TableCell>
      <_Phone>{node?.contactPhone}</_Phone>
    </_TableCell>
    <_TableCell>
      <_CommentText>{node?.description}</_CommentText>
    </_TableCell>
    <_TableCell>
      <_TableIcons>
        <_IconEdit onClick={() => setEdit(true)}>
          <SVGEdit />
        </_IconEdit>
        <_IconDelete onClick={() => setOpenModal(true)}>
          <SVGDelete height="1.8rem" width="1.4rem" />
        </_IconDelete>
      </_TableIcons>
    </_TableCell>
  </_TableRow>
);
