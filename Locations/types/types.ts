import { LocationSnapshot } from '../graphql/Locations.generated';

export type FormData = Omit<LocationSnapshot, '__typename' | 'createdAt' | 'updatedAt' | 'parties'>;
