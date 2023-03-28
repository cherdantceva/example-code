import { LocationSnapshot } from 'src/containers/Locations/graphql/Locations.generated';
import { FormData } from 'src/containers/Locations/types/types';

const defaultFormData: FormData = {
  id: '',
  address: '',
  contactEmail: '',
  contactPerson: '',
  contactPhone: '',
  description: '',
  externalId: '',
  title: '',
  city: '',
  canBeDeleted: true
};

export const getFormData = (node?: Partial<LocationSnapshot> | null): FormData => {
  if (!node) return defaultFormData;
  return {
    ...defaultFormData,
    ...node
  };
};
