import * as Types from '../../../gql-types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  Date: any;
  DateTime: any;
  GqlDuration: any;
  JwtPermissions: any;
  Permissions: any;
  SECRET: any;
  Uuid: any;
};

export type AuthorizedUserSnapshot = {
  __typename?: 'AuthorizedUserSnapshot';
  contractorId: Scalars['Uuid'];
  permissions: Scalars['JwtPermissions'];
  userId: Scalars['Uuid'];
};

export type ContractorBindRoleInput = {
  id: Scalars['ID'];
  roleId: Scalars['ID'];
};

export type ContractorBindRoleResult = {
  __typename?: 'ContractorBindRoleResult';
  roleBinding?: Maybe<ContractorRoleBindingType>;
};

export type ContractorDataInput = {
  contactEmail: Scalars['String'];
  contactPerson: Scalars['String'];
  contactPhone: Scalars['String'];
  correspondenceAddress: Scalars['String'];
  inn: Scalars['String'];
  juridicalAddress: Scalars['String'];
  ogrn: Scalars['String'];
  shortTitle: Scalars['String'];
  title: Scalars['String'];
};

/** Результат добавления нового избранного рынка */
export type ContractorMarketBindResult = {
  __typename?: 'ContractorMarketBindResult';
  contractorMarketBinding?: Maybe<ContractorMarketBindingSnapshot>;
};

/** Избранные рынки */
export type ContractorMarketBindingSnapshot = {
  __typename?: 'ContractorMarketBindingSnapshot';
  /** Организация */
  contractor: ContractorType;
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Идентификатор избранного рынка */
  id: Scalars['ID'];
  /** Рынок */
  market: MarketSnapshot;
};

export type ContractorResult = {
  __typename?: 'ContractorResult';
  contractor?: Maybe<ContractorType>;
};

export type ContractorRoleBindingType = {
  __typename?: 'ContractorRoleBindingType';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  role: ContractorRoleType;
};

export type ContractorRoleType = {
  __typename?: 'ContractorRoleType';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userRole?: Maybe<UserRoleType>;
  userRoles: UserRoleTypeConnection;
};

export type ContractorRoleTypeUserRoleArgs = {
  id: Scalars['ID'];
};

export type ContractorRoleTypeUserRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type ContractorRoleTypeConnection = {
  __typename?: 'ContractorRoleTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<ContractorRoleTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type ContractorRoleTypeEdge = {
  __typename?: 'ContractorRoleTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ContractorRoleType>;
};

export type ContractorType = {
  __typename?: 'ContractorType';
  contactEmail: Scalars['String'];
  contactPerson: Scalars['String'];
  contactPhone: Scalars['String'];
  coordinates?: Maybe<Scalars['String']>;
  correspondenceAddress: Scalars['String'];
  createdAt: Scalars['DateTime'];
  externalLocations: Array<LocationSnapshot>;
  /** Запрос одного предложения по списку идентификаторов учетной системы поставщика (внешние идентификаторы) */
  externalOffers: Array<OfferType>;
  /** Запрос избранных запчастей для организации, данные организации берутся из токена */
  favoriteProducts: FavoriteProductTypeConnection;
  id: Scalars['ID'];
  inn: Scalars['String'];
  juridicalAddress: Scalars['String'];
  locations: LocationSnapshotConnection;
  /** Запрос избранных рынков для организации, данные организации берутся из токена */
  marketBindings: Array<ContractorMarketBindingSnapshot>;
  /** Запрос предложений поставщика */
  offers: OfferTypeConnection;
  ogrn: Scalars['String'];
  orders: Array<OrderSnapshot>;
  ordersCount: Scalars['Int'];
  reports: ReportSnapshotConnection;
  role: ContractorRoleType;
  roleBindings: Array<ContractorRoleBindingType>;
  /** Запрос счетчиков количества показов за период */
  searchCountersByPeriod: OfferSearchCounterTypeConnection;
  selectionRequest: SelectionRequestSnapshotConnection;
  /** Настройки контрагента */
  settings: SettingsSnapshot;
  shortTitle: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users: UserTypeConnection;
};

export type ContractorTypeExternalLocationsArgs = {
  externalIds: Array<Scalars['String']>;
};

export type ContractorTypeExternalOffersArgs = {
  externalIds: Array<Scalars['String']>;
};

export type ContractorTypeFavoriteProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type ContractorTypeLocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type ContractorTypeOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type ContractorTypeOrdersArgs = {
  number?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type ContractorTypeOrdersCountArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type ContractorTypeReportsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type ContractorTypeSearchCountersByPeriodArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  from: Scalars['DateTime'];
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  to: Scalars['DateTime'];
};

export type ContractorTypeSelectionRequestArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type ContractorTypeUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type ContractorTypeConnection = {
  __typename?: 'ContractorTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<ContractorTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type ContractorTypeEdge = {
  __typename?: 'ContractorTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ContractorType>;
};

/** Результат удаления нового избранного рынка */
export type ContractorUnbindMarketResult = {
  __typename?: 'ContractorUnbindMarketResult';
  deletedContractorMarketBindingId?: Maybe<Scalars['ID']>;
};

export type CustomerSearchResult = {
  __typename?: 'CustomerSearchResult';
  id: Scalars['ID'];
  results: Array<PartySnapshot>;
  searchText?: Maybe<Scalars['String']>;
};

export type DeliverySnapshot = {
  __typename?: 'DeliverySnapshot';
  cost: Scalars['BigDecimal'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  items: Array<OrderItemSnapshot>;
  number: Scalars['String'];
  paymentStatus: PaymentStatus;
  status: Status;
  supplier: ContractorType;
  updatedAt: Scalars['DateTime'];
  warehouse: LocationSnapshot;
};

export type DeliveryUpdateResult = {
  __typename?: 'DeliveryUpdateResult';
  delivery?: Maybe<DeliverySnapshot>;
};

/** Объект для создание нового класса техники */
export type EquipmentClassCreateInput = {
  /** Комментарий */
  comment: Scalars['String'];
  /** Ключ для изображения по умолчанию для модели техники, изображение доступно через сервис file-storage */
  defaultModelImage?: InputMaybe<Scalars['Uuid']>;
  /** Массив ключей фотографий класса, сами изображения доступны по ключам через сервис file-storage */
  photos: Array<Scalars['Uuid']>;
  /** Уникальный токен */
  slug?: InputMaybe<Scalars['String']>;
  /** Описание */
  title: Scalars['String'];
  /** Тип класса техники, необходим для сортировки на фронте */
  type: Scalars['String'];
};

/** Результат создания нового класса техники */
export type EquipmentClassCreateResult = {
  __typename?: 'EquipmentClassCreateResult';
  equipmentClass?: Maybe<EquipmentClassType>;
};

/** Объект для удаления класса техники */
export type EquipmentClassDeleteInput = {
  /** Идентификатор класса техники */
  id: Scalars['ID'];
};

/** Результат удаления класса техники */
export type EquipmentClassDeleteResult = {
  __typename?: 'EquipmentClassDeleteResult';
  deletedId?: Maybe<Scalars['ID']>;
};

/** Класс техники */
export type EquipmentClassType = {
  __typename?: 'EquipmentClassType';
  /** Комментарий */
  comment: Scalars['String'];
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Ключ к картинке по умолчанию для моделей данного класса техники, доступно через сервис file-storage */
  defaultModelImage?: Maybe<Scalars['Uuid']>;
  /** Идентификатор класса техники */
  id: Scalars['ID'];
  /** Модели принадлежащие данному классу техники */
  models: EquipmentModelTypeConnection;
  /** Массив ключей фотографий, фото хранятся в файловом хранилище, доступ через сервис file-storage */
  photos: Array<Scalars['Uuid']>;
  /** Уникальный токен */
  slug: Scalars['String'];
  /** Описание */
  title: Scalars['String'];
  /** Тип класса техники, используется на фронте для сортировки */
  type: Scalars['String'];
  /** Дата последнего обновления записи */
  updatedAt: Scalars['DateTime'];
};

/** Класс техники */
export type EquipmentClassTypeModelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type EquipmentClassTypeConnection = {
  __typename?: 'EquipmentClassTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<EquipmentClassTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type EquipmentClassTypeEdge = {
  __typename?: 'EquipmentClassTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<EquipmentClassType>;
};

/** Объект для изменения класса техники */
export type EquipmentClassUpdateInput = {
  /** Комментарий */
  comment: Scalars['String'];
  /** Изображение по умолчанию для модели техники */
  defaultModelImage: Scalars['Uuid'];
  /** Идентификатор класса техники */
  id: Scalars['ID'];
  /** Массив ключей фотографий класса техники */
  photos: Array<Scalars['Uuid']>;
  /** Наименование */
  title: Scalars['String'];
};

/** Результат изменения класса техники */
export type EquipmentClassUpdateResult = {
  __typename?: 'EquipmentClassUpdateResult';
  equipmentClass?: Maybe<EquipmentClassType>;
};

/** Объект для создания модели техники */
export type EquipmentModelCreateInput = {
  /** Комментарий */
  comment: Scalars['String'];
  /** Идентификатор класса техники */
  equipmentClassId: Scalars['ID'];
  /** Высота */
  height?: InputMaybe<Scalars['Int']>;
  /** Длина */
  length?: InputMaybe<Scalars['Int']>;
  /** Идентификатор изготовителя техники */
  manufacturerId: Scalars['ID'];
  /** Массив ключей фотографий модели техники */
  photos: Array<Scalars['Uuid']>;
  /** Уникальный токен */
  slug?: InputMaybe<Scalars['String']>;
  /** Наименование */
  title: Scalars['String'];
  /** Вес */
  weight?: InputMaybe<Scalars['Int']>;
  /** Ширина */
  width?: InputMaybe<Scalars['Int']>;
};

/** Результат создания модели техники */
export type EquipmentModelCreateResult = {
  __typename?: 'EquipmentModelCreateResult';
  equipmentModel?: Maybe<EquipmentModelType>;
};

/** Объект для удаления модели техники */
export type EquipmentModelDeleteInput = {
  /** Идентификатор модели техники */
  id: Scalars['ID'];
};

/** Результат удаления модели техники */
export type EquipmentModelDeleteResult = {
  __typename?: 'EquipmentModelDeleteResult';
  deletedId?: Maybe<Scalars['ID']>;
};

/** Модель техники */
export type EquipmentModelType = {
  __typename?: 'EquipmentModelType';
  /** Комментарий */
  comment?: Maybe<Scalars['String']>;
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Класс модели техники */
  equipmentClass: EquipmentClassType;
  /** Высота модели */
  height?: Maybe<Scalars['Int']>;
  /** Идентификатор модели техники */
  id: Scalars['ID'];
  /** Длина модели */
  length?: Maybe<Scalars['Int']>;
  /** Производитель модели техники */
  manufacturer: ManufacturerType;
  /** Массив ключей фотографий, фото хранятся в файловом хранилище, доступ через сервис file-storage */
  photos: Array<Scalars['Uuid']>;
  /** Запчасти связанные с моделью техники */
  productsBinding: ProductModelBindingTypeConnection;
  /** Уникальный токен */
  slug?: Maybe<Scalars['String']>;
  /** Описание модели */
  title: Scalars['String'];
  /** Дата последнего изменения записи */
  updatedAt: Scalars['DateTime'];
  /** Вес модели */
  weight?: Maybe<Scalars['Int']>;
  /** Ширина модели */
  width?: Maybe<Scalars['Int']>;
};

/** Модель техники */
export type EquipmentModelTypeProductsBindingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type EquipmentModelTypeConnection = {
  __typename?: 'EquipmentModelTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<EquipmentModelTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type EquipmentModelTypeEdge = {
  __typename?: 'EquipmentModelTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<EquipmentModelType>;
};

/** Объект для изменения модели техники */
export type EquipmentModelUpdateInput = {
  /** Комментарий */
  comment: Scalars['String'];
  /** Высота */
  height?: InputMaybe<Scalars['Int']>;
  /** Идентификатор модели техники */
  id: Scalars['ID'];
  /** Длина */
  length?: InputMaybe<Scalars['Int']>;
  /** Массив ключей фотографий модели техники */
  photos: Array<Scalars['Uuid']>;
  /** Наименование */
  title: Scalars['String'];
  /** Вес */
  weight?: InputMaybe<Scalars['Int']>;
  /** Ширина */
  width?: InputMaybe<Scalars['Int']>;
};

/** Результат изменения модели техники */
export type EquipmentModelUpdateResult = {
  __typename?: 'EquipmentModelUpdateResult';
  equipmentModel?: Maybe<EquipmentModelType>;
};

/** Результат создания новой избранной запчасти */
export type FavoriteProductCreateResult = {
  __typename?: 'FavoriteProductCreateResult';
  favoriteProduct?: Maybe<FavoriteProductType>;
};

/** Результат удаления избранной запчасти */
export type FavoriteProductDeleteResult = {
  __typename?: 'FavoriteProductDeleteResult';
  deletedFavoriteProductId?: Maybe<Scalars['ID']>;
};

/** Избранная запчасть */
export type FavoriteProductType = {
  __typename?: 'FavoriteProductType';
  /** Организация */
  contractor: ContractorType;
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Идентификатор избранной запчасти */
  id: Scalars['ID'];
  /** Запчасть */
  product: ProductType;
};

/** A connection to a list of items. */
export type FavoriteProductTypeConnection = {
  __typename?: 'FavoriteProductTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<FavoriteProductTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type FavoriteProductTypeEdge = {
  __typename?: 'FavoriteProductTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<FavoriteProductType>;
};

/** Гео данные Яндекса */
export type GeocodeSnapshot = {
  __typename?: 'GeocodeSnapshot';
  /** Координаты адреса */
  coordinates: Scalars['String'];
  /** Найденный адрес */
  foundAddress: Scalars['String'];
  /** Идентификатор гео данных */
  id: Scalars['ID'];
  /** Искомый адрес */
  searchedAddress?: Maybe<Scalars['String']>;
};

export type LocationCreateInput = {
  address: Scalars['String'];
  city?: InputMaybe<Scalars['String']>;
  contactEmail: Scalars['String'];
  contactPerson: Scalars['String'];
  contactPhone: Scalars['String'];
  contractorId: Scalars['ID'];
  description: Scalars['String'];
  externalId: Scalars['String'];
  title: Scalars['String'];
};

export type LocationCreateResult = {
  __typename?: 'LocationCreateResult';
  location?: Maybe<LocationSnapshot>;
};

export type LocationDeleteExternalInput = {
  id: Scalars['String'];
  operationId: Scalars['Uuid'];
};

export type LocationDeleteInput = {
  id: Scalars['ID'];
};

export type LocationDeleteResult = {
  __typename?: 'LocationDeleteResult';
  deletedLocationId?: Maybe<Scalars['ID']>;
  operationId: Scalars['Uuid'];
};

export type LocationSnapshot = {
  __typename?: 'LocationSnapshot';
  address: Scalars['String'];
  canBeDeleted: Scalars['Boolean'];
  city: Scalars['String'];
  contactEmail: Scalars['String'];
  contactPerson: Scalars['String'];
  contactPhone: Scalars['String'];
  coordinates?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  externalId: Scalars['String'];
  id: Scalars['ID'];
  parties: PartySnapshotConnection;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type LocationSnapshotPartiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type LocationSnapshotConnection = {
  __typename?: 'LocationSnapshotConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<LocationSnapshotEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type LocationSnapshotEdge = {
  __typename?: 'LocationSnapshotEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<LocationSnapshot>;
};

export type LocationUpdateInput = {
  address: Scalars['String'];
  city?: InputMaybe<Scalars['String']>;
  contactEmail: Scalars['String'];
  contactPerson: Scalars['String'];
  contactPhone: Scalars['String'];
  description: Scalars['String'];
  externalId: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type LocationUpdateResult = {
  __typename?: 'LocationUpdateResult';
  location?: Maybe<LocationSnapshot>;
};

export type LocationUpsertExternalInput = {
  address: Scalars['String'];
  city?: InputMaybe<Scalars['String']>;
  contactEmail: Scalars['String'];
  contactPerson: Scalars['String'];
  contactPhone: Scalars['String'];
  description: Scalars['String'];
  externalId: Scalars['String'];
  operationId: Scalars['Uuid'];
  title: Scalars['String'];
};

export type LocationUpsertExternalResult = {
  __typename?: 'LocationUpsertExternalResult';
  location?: Maybe<LocationSnapshot>;
  operationId: Scalars['Uuid'];
};

export type LotSnapshot = {
  __typename?: 'LotSnapshot';
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  id: Scalars['ID'];
  orderItem?: Maybe<OrderItemSnapshot>;
  price: Scalars['BigDecimal'];
  priceWithoutVat?: Maybe<Scalars['BigDecimal']>;
  updatedAt: Scalars['DateTime'];
};

/** Объект с данным для создания производителя техники */
export type ManufacturerCreateInput = {
  /** Комментарий */
  comment: Scalars['String'];
  /** Страна производителя */
  country: Scalars['String'];
  /** Ключ к изображению с логотипом */
  logoImage?: InputMaybe<Scalars['Uuid']>;
  /** Уникальный токен */
  slug?: InputMaybe<Scalars['String']>;
  /** Описание */
  title: Scalars['String'];
};

/** Объект с результатом создания производителя техники */
export type ManufacturerCreateResult = {
  __typename?: 'ManufacturerCreateResult';
  manufacturer?: Maybe<ManufacturerType>;
};

/** Объект с данными для удаления производителя техники */
export type ManufacturerDeleteInput = {
  /** Идентификатор производителя */
  id: Scalars['ID'];
};

/** Объект с результатом удаления производителя техники */
export type ManufacturerDeleteResult = {
  __typename?: 'ManufacturerDeleteResult';
  deletedId?: Maybe<Scalars['ID']>;
};

/** Производитель техники */
export type ManufacturerType = {
  __typename?: 'ManufacturerType';
  /** Комментарий */
  comment?: Maybe<Scalars['String']>;
  /** Страна производитель */
  country: Scalars['String'];
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Идентификатор производителя техники */
  id: Scalars['ID'];
  /** Логотип производителя */
  logoImage?: Maybe<Scalars['Uuid']>;
  /** Модели выпускаемые данным производителем */
  models: EquipmentModelTypeConnection;
  /** Уникальный токен */
  slug: Scalars['String'];
  /** Наименование */
  title: Scalars['String'];
  /** Дата обновления записи */
  updatedAt: Scalars['DateTime'];
};

/** Производитель техники */
export type ManufacturerTypeModelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type ManufacturerTypeConnection = {
  __typename?: 'ManufacturerTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<ManufacturerTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type ManufacturerTypeEdge = {
  __typename?: 'ManufacturerTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ManufacturerType>;
};

/** Объект с данными для изменения производителя техники */
export type ManufacturerUpdateInput = {
  /** Комментарий */
  comment?: InputMaybe<Scalars['String']>;
  /** Страна производителя */
  country: Scalars['String'];
  /** Идентификатор производителя */
  id: Scalars['ID'];
  /** Ключ к изображению с логотипом */
  logoImage?: InputMaybe<Scalars['Uuid']>;
  /** Описание */
  title: Scalars['String'];
};

/** Объект результатом изменения производителя техники */
export type ManufacturerUpdateResult = {
  __typename?: 'ManufacturerUpdateResult';
  manufacturer?: Maybe<ManufacturerType>;
};

/** Объект для создания нового рынка */
export type MarketCreateInput = {
  /** Название рынка */
  title: Scalars['String'];
};

/** Результат создания рынка */
export type MarketCreateResult = {
  __typename?: 'MarketCreateResult';
  market?: Maybe<MarketSnapshot>;
};

/** Результат удаления рынка */
export type MarketDeleteResult = {
  __typename?: 'MarketDeleteResult';
  marketId?: Maybe<Scalars['ID']>;
};

/** Рынок */
export type MarketSnapshot = {
  __typename?: 'MarketSnapshot';
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Идентификатор рынка */
  id: Scalars['ID'];
  /** Название рынка */
  title: Scalars['String'];
  /** Дата обновления записи */
  updatedAt: Scalars['DateTime'];
};

/** Объект для изменения рынка */
export type MarketUpdateInput = {
  /** Название рынка */
  title: Scalars['String'];
};

/** Результат изменения рынка */
export type MarketUpdateResult = {
  __typename?: 'MarketUpdateResult';
  market?: Maybe<MarketSnapshot>;
};

export type Mutation = {
  __typename?: 'Mutation';
  contractorBindRole: ContractorBindRoleResult;
  contractorCreate: ContractorResult;
  contractorJuridicalAddressUpdate: ContractorResult;
  contractorMarketBind: ContractorMarketBindResult;
  /** Удаление избранного рынка */
  contractorMarketUnbind: ContractorUnbindMarketResult;
  contractorUpdate: ContractorResult;
  deliveryCancel: DeliveryUpdateResult;
  deliveryCompleteFulfillment: DeliveryUpdateResult;
  deliverySetPaid: DeliveryUpdateResult;
  deliveryTakeToFulfillment: DeliveryUpdateResult;
  deliveryUpdateCost: DeliveryUpdateResult;
  draftOrderGetOrCreate: OrderGetOrCreateDraftResult;
  /** Создание нового класса техники */
  equipmentClassCreate: EquipmentClassCreateResult;
  /** Удаление существующего класса техники */
  equipmentClassDelete: EquipmentClassDeleteResult;
  /** Изменение существующего класса техники */
  equipmentClassUpdate: EquipmentClassUpdateResult;
  /** Мутация создание модели техники */
  equipmentModelCreate: EquipmentModelCreateResult;
  /** Мутация удаление модели техники */
  equipmentModelDelete: EquipmentModelDeleteResult;
  /** Мутация изменение модели техники */
  equipmentModelUpdate: EquipmentModelUpdateResult;
  /** Мутация на создание новой избранной запчасти */
  favoriteProductCreate: FavoriteProductCreateResult;
  /** Мутация на удаление избранной запчасти */
  favoriteProductDelete: FavoriteProductDeleteResult;
  locationAddressUpdate: LocationUpdateResult;
  locationCreate: LocationCreateResult;
  locationDelete: LocationDeleteResult;
  locationDeleteByExternalId: LocationDeleteResult;
  locationUpdate: LocationUpdateResult;
  locationUpsertByExternalId: LocationUpsertExternalResult;
  locationUpsertByExternalIdUseContractor: LocationUpsertExternalResult;
  /** Создание производителя техники */
  manufacturerCreate: ManufacturerCreateResult;
  /** Удаление производителя техники */
  manufacturerDelete: ManufacturerDeleteResult;
  /** Изменение производителя техники */
  manufacturerUpdate: ManufacturerUpdateResult;
  /** Создание нового рынка */
  marketCreate: MarketCreateResult;
  /** Удаление рынка */
  marketDelete: MarketDeleteResult;
  /** Изменение рынка */
  marketUpdate: MarketUpdateResult;
  /** Создание новой новости */
  newsPostCreate: NewsPostCreateResult;
  /** Удаление новости */
  newsPostDelete: NewsPostDeleteResult;
  /** Изменение новости */
  newsPostUpdate: NewsPostUpdateResult;
  /** Создание предложения поставщика */
  offerCreate: OfferCreateResult;
  /** Удаление предложения поставщика */
  offerDelete: OfferDeleteResult;
  /** Удаление предложения поставщика по внешнему идентификатору */
  offerDeleteByExternalId: OfferDeleteResult;
  /** Удаление предложения поставщика по внешнему идентификатору */
  offerDeleteByExternalIdUseContractor: OfferDeleteResult;
  /** Удаление счетчика количества показов предложения поставщика */
  offerSearchCounterDelete: OfferSearchCounterDeleteResult;
  /** Изменение предложения поставщика */
  offerUpdate: OfferUpdateResult;
  /** Создание - изменение предложения поставщика по внешнему идентификатору */
  offerUpsertByExternalId: OfferUpsertExternalResult;
  /** Создание - изменение предложения поставщика по внешнему идентификатору, для указанного поставщика */
  offerUpsertByExternalIdUseContractor: OfferUpsertExternalResult;
  orderCancel: OrderSnapshot;
  orderChangeDestination: OrderChangeDestinationResult;
  /** Временный метод для смены статуса. Уберем после уточнения логики переходов по статусам */
  orderChangeStatus: OrderSnapshot;
  orderClear: OrderClearResult;
  orderComplete: OrderSnapshot;
  orderConfirm: OrderSnapshot;
  orderConfirmSupplies: OrderSnapshot;
  orderCreateDraft: OrderCreateDraftResult;
  orderDelete: OrderDeleteResult;
  orderItemAdjustQuantity: OrderItemAdjustQuantityResult;
  /** Временный метод для смены статуса. Уберем после уточнения логики переходов по статусам */
  orderItemChangeStatus: OrderItemSnapshot;
  orderItemCreate: OrderItemCreateResult;
  orderItemDelete: OrderItemDeleteResult;
  orderItemMove: OrderItemMoveResult;
  orderItemReleaseExpiredLots: OrderItemReleaseExpiredLotsResult;
  orderItemRenewLots: OrderItemRenewLotsResult;
  orderMarkAsSeen: OrderSnapshot;
  /** Актуализация корзины */
  orderRenewLots: OrderRenewLotsResult;
  orderSubmitToReturn: OrderSnapshot;
  orderSubmitToWork: OrderGiveToWorkResult;
  partyCreate: PartyCreateResult;
  partyDelete: PartyDeleteResult;
  partyDeleteByExternalId: PartyDeleteResult;
  partyDeleteByExternalIdForContractor: PartyDeleteResult;
  partySetEmptyForContractor: PartySetEmptyResult;
  partySetEmptyForLocation: PartySetEmptyResult;
  partyUpdate: PartyUpdateResult;
  partyUpsertByExternalId: PartyUpsertByExternalIdResult;
  partyUpsertByExternalIdForContractor: PartyUpsertByExternalIdResult;
  /** Создание новой запчасти */
  productCreate: ProductCreateResult;
  /** Удаление запчасти */
  productDelete: ProductDeleteResult;
  /** Создание новой связи запчасти с моделью техники */
  productModelBindingCreate: ProductModelBindingCreateResult;
  /** Удаление связи запчасти с моделью техники */
  productModelBindingDelete: ProductModelBindingDeleteResult;
  /** Создание новой связи запчасти и предложения поставщика */
  productOfferCreate: ProductOfferCreateResult;
  /** Изменение запчасти */
  productUpdate: ProductUpdateResult;
  /** Создание нового отчета */
  reportCreate: ReportCreateResult;
  /** Удаление отчета */
  reportDelete: ReportDeleteResult;
  selectedItemCreate: SelectedItemCreateResult;
  selectedItemDelete: SelectedItemDeleteResult;
  selectedItemUpdate: SelectedItemUpdateResult;
  selectionCreate: SelectionCreateResult;
  selectionCreateMany: SelectionCreateManyResult;
  selectionDelete: SelectionDeleteResult;
  selectionOfferParties: SelectionUpdateResult;
  selectionRequestComment: SelectionRequestUpdateResult;
  selectionRequestCreate: SelectionRequestCreateResult;
  selectionRequestSendToArchive: SelectionRequestUpdateResult;
  selectionRequestSendToCustomerApproval: SelectionRequestUpdateResult;
  selectionRequestSendToWork: SelectionRequestUpdateResult;
  selectionUpdate: SelectionUpdateResult;
  /** Обновление настроек клиентом */
  settingsUpdateByContractor: SettingsUpdateResult;
  /** Обновление настроек клиента вендором */
  settingsUpdateByVendor: SettingsUpdateResult;
  tokenCreate: TokenCreateResult;
  tokenDelete: TokenDeleteResult;
  userBindRole: UserBindRoleResult;
  /** Смена пароля пользователя */
  userChangePassword: UserResult;
  userCreate: UserResult;
  userDelete: UserDeleteResult;
  userUnbindRole: UserUnbindRoleResult;
  userUpdate: UserResult;
};

export type MutationContractorBindRoleArgs = {
  input: ContractorBindRoleInput;
};

export type MutationContractorCreateArgs = {
  adminData: UserDataInput;
  adminPassword: Scalars['SECRET'];
  contractorData: ContractorDataInput;
  contractorRoleId: Scalars['ID'];
};

export type MutationContractorJuridicalAddressUpdateArgs = {
  address: Scalars['String'];
  coordinates: Scalars['String'];
  id: Scalars['ID'];
};

export type MutationContractorMarketBindArgs = {
  contractorId: Scalars['ID'];
  marketId: Scalars['ID'];
};

export type MutationContractorMarketUnbindArgs = {
  id: Scalars['ID'];
};

export type MutationContractorUpdateArgs = {
  contractorData: ContractorDataInput;
  contractorId: Scalars['ID'];
  contractorRoleId?: InputMaybe<Scalars['ID']>;
};

export type MutationDeliveryCancelArgs = {
  deliveryId: Scalars['ID'];
};

export type MutationDeliveryCompleteFulfillmentArgs = {
  deliveryId: Scalars['ID'];
};

export type MutationDeliverySetPaidArgs = {
  deliveryId: Scalars['ID'];
};

export type MutationDeliveryTakeToFulfillmentArgs = {
  deliveryId: Scalars['ID'];
};

export type MutationDeliveryUpdateCostArgs = {
  cost: Scalars['BigDecimal'];
  deliveryId: Scalars['ID'];
};

export type MutationEquipmentClassCreateArgs = {
  input: EquipmentClassCreateInput;
};

export type MutationEquipmentClassDeleteArgs = {
  input: EquipmentClassDeleteInput;
};

export type MutationEquipmentClassUpdateArgs = {
  input: EquipmentClassUpdateInput;
};

export type MutationEquipmentModelCreateArgs = {
  input: EquipmentModelCreateInput;
};

export type MutationEquipmentModelDeleteArgs = {
  input: EquipmentModelDeleteInput;
};

export type MutationEquipmentModelUpdateArgs = {
  input: EquipmentModelUpdateInput;
};

export type MutationFavoriteProductCreateArgs = {
  productId: Scalars['ID'];
};

export type MutationFavoriteProductDeleteArgs = {
  favoriteProductId: Scalars['ID'];
};

export type MutationLocationAddressUpdateArgs = {
  address: Scalars['String'];
  coordinates: Scalars['String'];
  id: Scalars['ID'];
};

export type MutationLocationCreateArgs = {
  input: LocationCreateInput;
};

export type MutationLocationDeleteArgs = {
  input: LocationDeleteInput;
};

export type MutationLocationDeleteByExternalIdArgs = {
  input: LocationDeleteExternalInput;
};

export type MutationLocationUpdateArgs = {
  input: LocationUpdateInput;
};

export type MutationLocationUpsertByExternalIdArgs = {
  input: LocationUpsertExternalInput;
};

export type MutationLocationUpsertByExternalIdUseContractorArgs = {
  contractor: Scalars['ID'];
  input: LocationUpsertExternalInput;
};

export type MutationManufacturerCreateArgs = {
  input: ManufacturerCreateInput;
};

export type MutationManufacturerDeleteArgs = {
  input: ManufacturerDeleteInput;
};

export type MutationManufacturerUpdateArgs = {
  input: ManufacturerUpdateInput;
};

export type MutationMarketCreateArgs = {
  input: MarketCreateInput;
};

export type MutationMarketDeleteArgs = {
  marketId: Scalars['ID'];
};

export type MutationMarketUpdateArgs = {
  input: MarketUpdateInput;
  marketId: Scalars['ID'];
};

export type MutationNewsPostCreateArgs = {
  input: NewsPostCreateInput;
};

export type MutationNewsPostDeleteArgs = {
  newsPostId: Scalars['ID'];
};

export type MutationNewsPostUpdateArgs = {
  input: NewsPostUpdateInput;
  newsPostId: Scalars['ID'];
};

export type MutationOfferCreateArgs = {
  input: OfferCreateInput;
};

export type MutationOfferDeleteArgs = {
  input: OfferDeleteInput;
};

export type MutationOfferDeleteByExternalIdArgs = {
  input: OfferDeleteExternalInput;
};

export type MutationOfferDeleteByExternalIdUseContractorArgs = {
  contractor: Scalars['ID'];
  input: OfferDeleteExternalInput;
};

export type MutationOfferSearchCounterDeleteArgs = {
  input: OfferSearchCounterDeleteInput;
};

export type MutationOfferUpdateArgs = {
  input: OfferUpdateInput;
};

export type MutationOfferUpsertByExternalIdArgs = {
  input: OfferUpsertExternalInput;
};

export type MutationOfferUpsertByExternalIdUseContractorArgs = {
  contractor: Scalars['ID'];
  input: OfferUpsertExternalInput;
};

export type MutationOrderCancelArgs = {
  orderId: Scalars['ID'];
};

export type MutationOrderChangeDestinationArgs = {
  destinationId: Scalars['ID'];
  orderId: Scalars['ID'];
};

export type MutationOrderChangeStatusArgs = {
  orderId: Scalars['ID'];
  status: OrderStatus;
};

export type MutationOrderClearArgs = {
  orderId: Scalars['ID'];
};

export type MutationOrderCompleteArgs = {
  orderId: Scalars['ID'];
};

export type MutationOrderConfirmArgs = {
  orderId: Scalars['ID'];
};

export type MutationOrderConfirmSuppliesArgs = {
  orderId: Scalars['ID'];
};

export type MutationOrderDeleteArgs = {
  orderId: Scalars['ID'];
};

export type MutationOrderItemAdjustQuantityArgs = {
  increment: Scalars['Int'];
  orderItemId: Scalars['ID'];
};

export type MutationOrderItemChangeStatusArgs = {
  orderItemId: Scalars['ID'];
  status: OrderItemStatus;
};

export type MutationOrderItemCreateArgs = {
  orderId: Scalars['ID'];
  partyId: Scalars['ID'];
};

export type MutationOrderItemDeleteArgs = {
  orderItemId: Scalars['ID'];
};

export type MutationOrderItemMoveArgs = {
  destinationOrderId: Scalars['ID'];
  orderItemId: Scalars['ID'];
};

export type MutationOrderItemReleaseExpiredLotsArgs = {
  orderItemId: Scalars['ID'];
};

export type MutationOrderItemRenewLotsArgs = {
  orderItemId: Scalars['ID'];
};

export type MutationOrderMarkAsSeenArgs = {
  orderId: Scalars['ID'];
};

export type MutationOrderRenewLotsArgs = {
  orderId: Scalars['ID'];
};

export type MutationOrderSubmitToReturnArgs = {
  orderId: Scalars['ID'];
};

export type MutationOrderSubmitToWorkArgs = {
  orderId: Scalars['ID'];
};

export type MutationPartyCreateArgs = {
  input: PartyCreateInput;
};

export type MutationPartyDeleteArgs = {
  input: PartyDeleteInput;
};

export type MutationPartyDeleteByExternalIdArgs = {
  input: PartyDeleteByExternalIdInput;
};

export type MutationPartyDeleteByExternalIdForContractorArgs = {
  contractorId: Scalars['ID'];
  input: PartyDeleteByExternalIdInput;
};

export type MutationPartySetEmptyForContractorArgs = {
  input: PartySetEmptyForContractorInput;
};

export type MutationPartySetEmptyForLocationArgs = {
  input: PartySetEmptyForLocationInput;
};

export type MutationPartyUpdateArgs = {
  input: PartyUpdateInput;
};

export type MutationPartyUpsertByExternalIdArgs = {
  input: PartyUpsertByExternalIdInput;
};

export type MutationPartyUpsertByExternalIdForContractorArgs = {
  contractorId: Scalars['ID'];
  input: PartyUpsertByExternalIdInput;
};

export type MutationProductCreateArgs = {
  input: ProductCreateInput;
};

export type MutationProductDeleteArgs = {
  input: ProductDeleteInput;
};

export type MutationProductModelBindingCreateArgs = {
  input: ProductModelBindingCreateInput;
};

export type MutationProductModelBindingDeleteArgs = {
  input: ProductModelBindingDeleteInput;
};

export type MutationProductOfferCreateArgs = {
  input: ProductOfferCreateInput;
};

export type MutationProductUpdateArgs = {
  input: ProductUpdateInput;
};

export type MutationReportCreateArgs = {
  input: ReportCreateInput;
};

export type MutationReportDeleteArgs = {
  input: ReportDeleteInput;
};

export type MutationSelectedItemCreateArgs = {
  input: SelectedItemCreateInput;
};

export type MutationSelectedItemDeleteArgs = {
  selectedItemFQDN: Scalars['ID'];
};

export type MutationSelectedItemUpdateArgs = {
  input: SelectedItemUpdateInput;
};

export type MutationSelectionCreateArgs = {
  input: SelectionCreateInput;
};

export type MutationSelectionCreateManyArgs = {
  input: SelectionCreateManyInput;
};

export type MutationSelectionDeleteArgs = {
  selectionFQDN: Scalars['ID'];
};

export type MutationSelectionOfferPartiesArgs = {
  partiesIds: Array<Scalars['ID']>;
  selectionId: Scalars['ID'];
};

export type MutationSelectionRequestCommentArgs = {
  comment: Scalars['String'];
  selectionRequestId: Scalars['ID'];
};

export type MutationSelectionRequestCreateArgs = {
  input: SelectionRequestCreateInput;
};

export type MutationSelectionRequestSendToArchiveArgs = {
  selectionRequestId: Scalars['ID'];
};

export type MutationSelectionRequestSendToCustomerApprovalArgs = {
  selectionRequestId: Scalars['ID'];
};

export type MutationSelectionRequestSendToWorkArgs = {
  selectionRequestId: Scalars['ID'];
};

export type MutationSelectionUpdateArgs = {
  input: SelectionUpdateInput;
};

export type MutationSettingsUpdateByContractorArgs = {
  input: SettingsUpdateInput;
};

export type MutationSettingsUpdateByVendorArgs = {
  contractorId: Scalars['ID'];
  input: SettingsUpdateInput;
};

export type MutationTokenCreateArgs = {
  input: TokenCreateInput;
};

export type MutationTokenDeleteArgs = {
  input: TokenDeleteInput;
};

export type MutationUserBindRoleArgs = {
  input: UserBindRoleInput;
};

export type MutationUserChangePasswordArgs = {
  password: Scalars['SECRET'];
  userId: Scalars['ID'];
};

export type MutationUserCreateArgs = {
  contractorId: Scalars['ID'];
  userData: UserDataInput;
  userPassword: Scalars['SECRET'];
  userRoleId: Scalars['ID'];
};

export type MutationUserDeleteArgs = {
  input: UserDeleteInput;
};

export type MutationUserUnbindRoleArgs = {
  input: UserUnbindRoleInput;
};

export type MutationUserUpdateArgs = {
  userData: UserDataInput;
  userId: Scalars['ID'];
  userRoleId: Scalars['ID'];
};

/** Объект для создания новой новости */
export type NewsPostCreateInput = {
  /** Описание новости */
  description: Scalars['String'];
  /** Фото новости */
  photos?: InputMaybe<Array<Scalars['Uuid']>>;
  /** Заголовок новости */
  title: Scalars['String'];
};

/** Результат создания новости */
export type NewsPostCreateResult = {
  __typename?: 'NewsPostCreateResult';
  newsPost?: Maybe<NewsPostSnapshot>;
};

/** Результат для удаления новости */
export type NewsPostDeleteResult = {
  __typename?: 'NewsPostDeleteResult';
  /** Идентификатор новости */
  id?: Maybe<Scalars['ID']>;
};

/** Новость */
export type NewsPostSnapshot = {
  __typename?: 'NewsPostSnapshot';
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Описание новости */
  description: Scalars['String'];
  /** Идентификатор новости */
  id: Scalars['ID'];
  /** Фото новости */
  photos: Array<Scalars['Uuid']>;
  /** Заголовок новости */
  title: Scalars['String'];
  /** Дата обновления записи */
  updatedAt: Scalars['DateTime'];
};

/** Объект для изменения новости */
export type NewsPostUpdateInput = {
  /** Описание новости */
  description: Scalars['String'];
  /** Фото новости */
  photos?: InputMaybe<Array<Scalars['Uuid']>>;
  /** Заголовок новости */
  title: Scalars['String'];
};

/** Результат изменения новости */
export type NewsPostUpdateResult = {
  __typename?: 'NewsPostUpdateResult';
  newsPost?: Maybe<NewsPostSnapshot>;
};

/** Объект для создания предложения поставщика */
export type OfferCreateInput = {
  /** Идентификатор поставщика */
  contractorId: Scalars['ID'];
  /** Массив кроссномеров */
  crossNumbers: Array<Scalars['String']>;
  /** Описание */
  description: Scalars['String'];
  /** Идентификатор предложения в системе поставщика */
  externalId: Scalars['String'];
  /** Высота */
  height?: InputMaybe<Scalars['Int']>;
  /** Длина */
  length?: InputMaybe<Scalars['Int']>;
  /** Производитель */
  manufacturer: Scalars['String'];
  /** Признак оригинальности */
  origin: ProductOrigin;
  /** Код продукта */
  productCode: Scalars['String'];
  /** Состояние запчасти в предложении */
  state: ProductState;
  /** Наименование */
  title: Scalars['String'];
  /** Вес */
  weight?: InputMaybe<Scalars['Int']>;
  /** Ширина */
  width?: InputMaybe<Scalars['Int']>;
};

/** Результат создания предложения поставщика */
export type OfferCreateResult = {
  __typename?: 'OfferCreateResult';
  offer?: Maybe<OfferType>;
};

/** Результат удаления предложения поставщика */
export type OfferDeleteExternalInput = {
  /** Идентификатор предложения */
  id: Scalars['String'];
  /** Идентификатор выполняемой операции */
  operationId: Scalars['Uuid'];
};

/** Объект для удаления предложения поставщика */
export type OfferDeleteInput = {
  /** Идентификатор предложения */
  id: Scalars['ID'];
};

/** Результат удаления предложения поставщика */
export type OfferDeleteResult = {
  __typename?: 'OfferDeleteResult';
  deletedOfferId?: Maybe<Scalars['ID']>;
  /** Идентификатор выполняемой операции */
  operationId: Scalars['Uuid'];
};

/** Объект для удаления счетчика показов предложения поставщика */
export type OfferSearchCounterDeleteInput = {
  /** Идентификатор счетчика показов предложения */
  id: Scalars['ID'];
};

/** Результат удаления предложения поставщика */
export type OfferSearchCounterDeleteResult = {
  __typename?: 'OfferSearchCounterDeleteResult';
  deletedOfferSearchCounterId?: Maybe<Scalars['ID']>;
  /** Идентификатор выполняемой операции */
  operationId: Scalars['Uuid'];
};

/** Объект для запроса счетчиков количества показов предложения за период */
export type OfferSearchCounterPeriodInput = {
  /** Дата начала периода */
  from: Scalars['DateTime'];
  /** Дата окончания периода */
  to: Scalars['DateTime'];
};

/** Счетчик количества показов предложения в результатах поиска */
export type OfferSearchCounterType = {
  __typename?: 'OfferSearchCounterType';
  /** Количество показов в указанную дату */
  count: Scalars['Int'];
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Дата счетчика */
  date: Scalars['Date'];
  /** Идентификатор счетчика */
  id: Scalars['ID'];
  /** Организация поставщик */
  offer: OfferType;
  /** Дата последнего обновления */
  updatedAt: Scalars['DateTime'];
};

/** A connection to a list of items. */
export type OfferSearchCounterTypeConnection = {
  __typename?: 'OfferSearchCounterTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<OfferSearchCounterTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type OfferSearchCounterTypeEdge = {
  __typename?: 'OfferSearchCounterTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<OfferSearchCounterType>;
};

/** Предложение поставщика */
export type OfferType = {
  __typename?: 'OfferType';
  /** Организация поставщик */
  contractor: ContractorType;
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Кросс номера для этого предложения */
  crossNumbers: Array<Scalars['String']>;
  /** Описание */
  description: Scalars['String'];
  /** Идентификатор предложения в системе учета поставщика */
  externalId: Scalars['String'];
  /** Высота */
  height?: Maybe<Scalars['Int']>;
  /** Идентификатор предложения */
  id: Scalars['ID'];
  /** Длина */
  length?: Maybe<Scalars['Int']>;
  /** Производитель */
  manufacturer: Scalars['String'];
  /** Признак оригинальности предложения */
  origin: ProductOrigin;
  parties: PartySnapshotConnection;
  /** Код продукта */
  productCode: Scalars['String'];
  /** Продукт связанный с этим предложением */
  productOffer?: Maybe<ProductOfferType>;
  /** Запрос счетчиков количества показов за период */
  searchCounterByPeriod: Array<OfferSearchCounterType>;
  /** Статус предложения */
  state: ProductState;
  /** Наименование */
  title: Scalars['String'];
  /** Дата последнего обновления */
  updatedAt: Scalars['DateTime'];
  /** Вес */
  weight?: Maybe<Scalars['Int']>;
  /** Ширина */
  width?: Maybe<Scalars['Int']>;
};

/** Предложение поставщика */
export type OfferTypePartiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** Предложение поставщика */
export type OfferTypeSearchCounterByPeriodArgs = {
  input: OfferSearchCounterPeriodInput;
};

/** A connection to a list of items. */
export type OfferTypeConnection = {
  __typename?: 'OfferTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<OfferTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type OfferTypeEdge = {
  __typename?: 'OfferTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<OfferType>;
};

/** Объект для изменения предложения поставщика */
export type OfferUpdateInput = {
  /** Массив кроссномеров */
  crossNumbers: Array<Scalars['String']>;
  /** Описание */
  description: Scalars['String'];
  /** Идентификатор предложения в системе поставщика */
  externalId: Scalars['String'];
  /** Высота */
  height?: InputMaybe<Scalars['Int']>;
  /** Идентификатор предложения */
  id: Scalars['ID'];
  /** Длина */
  length?: InputMaybe<Scalars['Int']>;
  /** Производитель */
  manufacturer: Scalars['String'];
  /** Признак оригинальности */
  origin: ProductOrigin;
  /** Код продукта */
  productCode: Scalars['String'];
  /** Состояние запчасти в предложении */
  state: ProductState;
  /** Наименование */
  title: Scalars['String'];
  /** Вес */
  weight?: InputMaybe<Scalars['Int']>;
  /** Ширина */
  width?: InputMaybe<Scalars['Int']>;
};

/** Результат изменения предложения поставщика */
export type OfferUpdateResult = {
  __typename?: 'OfferUpdateResult';
  offer?: Maybe<OfferType>;
};

/** Объект для создания - изменения предложения поставщика используя внешний идентификатор */
export type OfferUpsertExternalInput = {
  /** Массив кроссномеров */
  crossNumbers: Array<Scalars['String']>;
  /** Описание */
  description: Scalars['String'];
  /** Идентификатор предложения в системе поставщика */
  externalId: Scalars['String'];
  /** Высота запчасти */
  height?: InputMaybe<Scalars['Int']>;
  /** Длина запчасти */
  length?: InputMaybe<Scalars['Int']>;
  /** Производитель */
  manufacturer: Scalars['String'];
  /** Идентификатор выполняемой операции */
  operationId: Scalars['Uuid'];
  /** Признак оригинальности */
  origin: ProductOrigin;
  /** Код продукта */
  productCode: Scalars['String'];
  /** Состояние запчасти в предложении */
  state: ProductState;
  /** Наименование */
  title: Scalars['String'];
  /** Вес запчасти */
  weight?: InputMaybe<Scalars['Int']>;
  /** Ширина запчасти */
  width?: InputMaybe<Scalars['Int']>;
};

/** Результат создания - изменения предложения поставщика используя внешний идентификатор */
export type OfferUpsertExternalResult = {
  __typename?: 'OfferUpsertExternalResult';
  offer?: Maybe<OfferType>;
  /** Идентификатор выполняемой операции */
  operationId: Scalars['Uuid'];
};

export type OrderChangeDestinationResult = {
  __typename?: 'OrderChangeDestinationResult';
  order: OrderSnapshot;
};

export type OrderClearResult = {
  __typename?: 'OrderClearResult';
  order: OrderSnapshot;
};

export type OrderCreateDraftResult = {
  __typename?: 'OrderCreateDraftResult';
  order: OrderSnapshot;
};

export type OrderDeleteResult = {
  __typename?: 'OrderDeleteResult';
  deletedOrderId?: Maybe<Scalars['ID']>;
};

export type OrderGetOrCreateDraftResult = {
  __typename?: 'OrderGetOrCreateDraftResult';
  order: OrderSnapshot;
};

export type OrderGiveToWorkResult = {
  __typename?: 'OrderGiveToWorkResult';
  order: OrderSnapshot;
};

export type OrderItemAdjustQuantityResult = {
  __typename?: 'OrderItemAdjustQuantityResult';
  orderItem: OrderItemSnapshot;
};

export type OrderItemCreateResult = {
  __typename?: 'OrderItemCreateResult';
  orderItem: OrderItemSnapshot;
};

export type OrderItemDeleteResult = {
  __typename?: 'OrderItemDeleteResult';
  deletedOrderItemId: Scalars['ID'];
};

export type OrderItemMoveResult = {
  __typename?: 'OrderItemMoveResult';
  orderItem: OrderItemSnapshot;
};

export type OrderItemReleaseExpiredLotsResult = {
  __typename?: 'OrderItemReleaseExpiredLotsResult';
  orderItem: OrderItemSnapshot;
};

export type OrderItemRenewLotsResult = {
  __typename?: 'OrderItemRenewLotsResult';
  orderItem: OrderItemSnapshot;
  successful: Scalars['Boolean'];
};

export type OrderItemSnapshot = {
  __typename?: 'OrderItemSnapshot';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lots: Array<LotSnapshot>;
  lotsAreExpired: Scalars['Boolean'];
  lotsCount: Scalars['Int'];
  lotsExpiresAt: Scalars['DateTime'];
  order: OrderSnapshot;
  party: PartySnapshot;
  quantity: Scalars['Int'];
  status: OrderItemStatus;
  updatedAt: Scalars['DateTime'];
};

export type OrderItemSnapshotLotsArgs = {
  number?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type OrderItemSnapshotLotsCountArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export enum OrderItemStatus {
  Agreed = 'AGREED',
  ApprovalRequired = 'APPROVAL_REQUIRED',
  Canceled = 'CANCELED',
  Draft = 'DRAFT',
  ReplacementRequired = 'REPLACEMENT_REQUIRED'
}

export type OrderRenewLotsResult = {
  __typename?: 'OrderRenewLotsResult';
  order: OrderSnapshot;
};

export type OrderSnapshot = {
  __typename?: 'OrderSnapshot';
  createdAt: Scalars['DateTime'];
  deliveries: Array<DeliverySnapshot>;
  destination?: Maybe<LocationSnapshot>;
  id: Scalars['ID'];
  items: Array<OrderItemSnapshot>;
  itemsCount: Scalars['Int'];
  number: Scalars['String'];
  orderedBy?: Maybe<UserType>;
  status: OrderStatus;
  statusChangedAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type OrderSnapshotItemsArgs = {
  number?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type OrderSnapshotItemsCountArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export enum OrderStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  CustomerConfirmationRequired = 'CUSTOMER_CONFIRMATION_REQUIRED',
  Delivery = 'DELIVERY',
  Draft = 'DRAFT',
  New = 'NEW',
  Return = 'RETURN',
  SupplierConfirmationRequired = 'SUPPLIER_CONFIRMATION_REQUIRED'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PartyConnection = {
  __typename?: 'PartyConnection';
  edges: Array<PartyEdge>;
  pageInfo: PageInfo;
  query?: Maybe<Scalars['String']>;
};

export type PartyCreateInput = {
  amount: Scalars['Int'];
  comment?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<Scalars['GqlDuration']>;
  externalId: Scalars['String'];
  factory?: InputMaybe<Scalars['String']>;
  locationId: Scalars['ID'];
  offerId: Scalars['ID'];
  photos?: InputMaybe<Array<Scalars['Uuid']>>;
  price: Scalars['BigDecimal'];
  priceWithoutVat?: InputMaybe<Scalars['BigDecimal']>;
};

export type PartyCreateResult = {
  __typename?: 'PartyCreateResult';
  party?: Maybe<PartySnapshot>;
};

export type PartyDeleteByExternalIdInput = {
  externalId: Scalars['String'];
  operationId: Scalars['Uuid'];
};

export type PartyDeleteInput = {
  operationId: Scalars['Uuid'];
  partyId: Scalars['ID'];
};

export type PartyDeleteResult = {
  __typename?: 'PartyDeleteResult';
  deletedPartyId?: Maybe<Scalars['ID']>;
  operationId: Scalars['Uuid'];
};

export type PartyEdge = {
  __typename?: 'PartyEdge';
  cursor: Scalars['String'];
  node: PartySnapshot;
};

export type PartySetEmptyForContractorInput = {
  operationId: Scalars['Uuid'];
};

export type PartySetEmptyForLocationInput = {
  locationId: Scalars['ID'];
  operationId: Scalars['Uuid'];
};

export type PartySetEmptyResult = {
  __typename?: 'PartySetEmptyResult';
  operationId: Scalars['Uuid'];
};

export type PartySnapshot = {
  __typename?: 'PartySnapshot';
  amount: Scalars['Int'];
  available: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  deliveryTime: Scalars['GqlDuration'];
  externalId: Scalars['String'];
  factory?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  location: LocationSnapshot;
  lots: Array<LotSnapshot>;
  lotsCount: Scalars['Int'];
  myDraftOrderItems: Array<OrderItemSnapshot>;
  offer: OfferType;
  photos: Array<Scalars['Uuid']>;
  price: Scalars['BigDecimal'];
  priceWithoutVat?: Maybe<Scalars['BigDecimal']>;
  updatedAt: Scalars['DateTime'];
};

export type PartySnapshotLotsArgs = {
  number?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type PartySnapshotLotsCountArgs = {
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type PartySnapshotConnection = {
  __typename?: 'PartySnapshotConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<PartySnapshotEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type PartySnapshotEdge = {
  __typename?: 'PartySnapshotEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PartySnapshot>;
};

export type PartyUpdateInput = {
  available: Scalars['Int'];
  comment?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<Scalars['GqlDuration']>;
  externalId?: InputMaybe<Scalars['String']>;
  factory?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['ID']>;
  partyId: Scalars['ID'];
  photos?: InputMaybe<Array<Scalars['Uuid']>>;
  price: Scalars['BigDecimal'];
  priceWithoutVat?: InputMaybe<Scalars['BigDecimal']>;
};

export type PartyUpdateResult = {
  __typename?: 'PartyUpdateResult';
  party?: Maybe<PartySnapshot>;
};

export type PartyUpsertByExternalIdInput = {
  amount: Scalars['Int'];
  comment?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<Scalars['GqlDuration']>;
  externalId: Scalars['String'];
  factory?: InputMaybe<Scalars['String']>;
  locationId: Scalars['ID'];
  offerId: Scalars['ID'];
  operationId: Scalars['Uuid'];
  photos?: InputMaybe<Array<Scalars['Uuid']>>;
  price: Scalars['BigDecimal'];
  priceWithoutVat?: InputMaybe<Scalars['BigDecimal']>;
};

export type PartyUpsertByExternalIdResult = {
  __typename?: 'PartyUpsertByExternalIdResult';
  operationId: Scalars['Uuid'];
  party?: Maybe<PartySnapshot>;
};

export enum PaymentStatus {
  NotPaid = 'NOT_PAID',
  Paid = 'PAID'
}

/** Объект для создания новой запчасти */
export type ProductCreateInput = {
  /** Код запчасти */
  code: Scalars['String'];
  /** Описание */
  description: Scalars['String'];
  /** Высота запчасти */
  height?: InputMaybe<Scalars['Int']>;
  /** Длина запчасти */
  length?: InputMaybe<Scalars['Int']>;
  /** Производитель */
  manufacturer: Scalars['String'];
  /** Признак оригинальности */
  origin: ProductOrigin;
  /** Массив ключей фотографий запчасти */
  photos: Array<Scalars['Uuid']>;
  /** Наименование */
  title: Scalars['String'];
  /** Вес запчасти */
  weight?: InputMaybe<Scalars['Int']>;
  /** Ширина запчасти */
  width?: InputMaybe<Scalars['Int']>;
};

/** Результат создания запчасти */
export type ProductCreateResult = {
  __typename?: 'ProductCreateResult';
  product?: Maybe<ProductType>;
};

/** Объект для удаления запчасти */
export type ProductDeleteInput = {
  /** Идентификатор запчасти */
  id: Scalars['ID'];
};

/** Результат удаления запчасти */
export type ProductDeleteResult = {
  __typename?: 'ProductDeleteResult';
  /** Идентификатор запчасти */
  deletedProductId?: Maybe<Scalars['ID']>;
};

/** Объект для создания связи запчасти с моделью техники */
export type ProductModelBindingCreateInput = {
  /** Идентификатор модели техники */
  equipmentModelId: Scalars['ID'];
  /** Идентификатор запчасти */
  productId: Scalars['ID'];
};

/** Результат создания связи запчасти с моделью техники */
export type ProductModelBindingCreateResult = {
  __typename?: 'ProductModelBindingCreateResult';
  productModelBinding?: Maybe<ProductModelBindingType>;
};

/** Объект для удаления связи запчасти с моделью техники */
export type ProductModelBindingDeleteInput = {
  /** Идентификатор связи */
  id: Scalars['ID'];
};

/** Результат удаления связи запчасти с моделью техники */
export type ProductModelBindingDeleteResult = {
  __typename?: 'ProductModelBindingDeleteResult';
  /** Идентификатор связи */
  deletedProductModelBindingId?: Maybe<Scalars['ID']>;
};

/** Связь запчасти и модели техники */
export type ProductModelBindingType = {
  __typename?: 'ProductModelBindingType';
  /** Дата создания связи */
  createdAt: Scalars['DateTime'];
  /** Идентификатор связи */
  id: Scalars['ID'];
  /** Модель техники */
  model: EquipmentModelType;
  /** Запчасть */
  product: ProductType;
};

/** A connection to a list of items. */
export type ProductModelBindingTypeConnection = {
  __typename?: 'ProductModelBindingTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<ProductModelBindingTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type ProductModelBindingTypeEdge = {
  __typename?: 'ProductModelBindingTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ProductModelBindingType>;
};

/** Объект для создания связи запчасти и предложения поставщика */
export type ProductOfferCreateInput = {
  /** Идентификатор предложения */
  offerId: Scalars['ID'];
  /** Идентификатор запчасти */
  productId: Scalars['ID'];
};

/** Результат создания связи запчасти и предложения поставщика */
export type ProductOfferCreateResult = {
  __typename?: 'ProductOfferCreateResult';
  productOffer?: Maybe<ProductOfferType>;
};

/** Объект связка запчасти и предложения поставщика */
export type ProductOfferType = {
  __typename?: 'ProductOfferType';
  createdAt: Scalars['DateTime'];
  /** Идентификатор связки */
  id: Scalars['ID'];
  /** Предложение поставщика */
  offer: OfferType;
  /** Запчасть */
  product: ProductType;
};

/** A connection to a list of items. */
export type ProductOfferTypeConnection = {
  __typename?: 'ProductOfferTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<ProductOfferTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type ProductOfferTypeEdge = {
  __typename?: 'ProductOfferTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ProductOfferType>;
};

export enum ProductOrigin {
  Duplicate = 'DUPLICATE',
  Oem = 'OEM',
  Original = 'ORIGINAL',
  Unknown = 'UNKNOWN'
}

export enum ProductState {
  New = 'NEW',
  Restored = 'RESTORED',
  Unknown = 'UNKNOWN',
  Used = 'USED'
}

/** Запчасть к спец технике */
export type ProductType = {
  __typename?: 'ProductType';
  cheapestOption?: Maybe<PartySnapshot>;
  /** Код запчасти */
  code: Scalars['String'];
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Описание */
  description: Scalars['String'];
  /** Высота запчасти */
  height?: Maybe<Scalars['Int']>;
  /** Идентификатор запчасти */
  id: Scalars['ID'];
  /** Длина запчасти */
  length?: Maybe<Scalars['Int']>;
  /** Производитель */
  manufacturer: Scalars['String'];
  /** Модели техники к которым подходит запчасть */
  modelsBinding: ProductModelBindingTypeConnection;
  /** Предложения поставщиков связанные с этой запчастью */
  offers: ProductOfferTypeConnection;
  /** Признак оригинальности запчасти */
  origin: ProductOrigin;
  /** Массив ключей фотографий, фото хранятся в файловом хранилище, доступ через сервис file-storage */
  photos: Array<Scalars['Uuid']>;
  /** Наименование */
  title: Scalars['String'];
  /** Дата последнего изменения записи */
  updatedAt: Scalars['DateTime'];
  /** Вес запчасти */
  weight?: Maybe<Scalars['Int']>;
  /** Ширина запчасти */
  width?: Maybe<Scalars['Int']>;
};

/** Запчасть к спец технике */
export type ProductTypeModelsBindingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** Запчасть к спец технике */
export type ProductTypeOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type ProductTypeConnection = {
  __typename?: 'ProductTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<ProductTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type ProductTypeEdge = {
  __typename?: 'ProductTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ProductType>;
};

/** Объект для изменения запчасти */
export type ProductUpdateInput = {
  /** Код запчасти */
  code: Scalars['String'];
  /** Описание */
  description: Scalars['String'];
  /** Высота запчасти */
  height?: InputMaybe<Scalars['Int']>;
  /** Идентификатор запчасти */
  id: Scalars['ID'];
  /** Длина запчасти */
  length?: InputMaybe<Scalars['Int']>;
  /** Производитель */
  manufacturer: Scalars['String'];
  /** Признак оригинальности */
  origin: ProductOrigin;
  /** Массив ключей фотографий запчасти */
  photos: Array<Scalars['Uuid']>;
  /** Наименование */
  title: Scalars['String'];
  /** Вес запчасти */
  weight?: InputMaybe<Scalars['Int']>;
  /** Ширина запчасти */
  width?: InputMaybe<Scalars['Int']>;
};

/** Результат изменения запчасти */
export type ProductUpdateResult = {
  __typename?: 'ProductUpdateResult';
  product?: Maybe<ProductType>;
};

export type PublicStatsSnapshot = {
  __typename?: 'PublicStatsSnapshot';
  /** Количество зарегистрированных покупателей */
  customersCount: Scalars['Int'];
  /** Количество предложений */
  offersCount: Scalars['Int'];
  /** Количество зарегистрированных поставщиков */
  suppliersCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  contractor?: Maybe<ContractorType>;
  /** Поиск контрагента по slug */
  contractorBySlug?: Maybe<ContractorType>;
  contractorIds: Array<Scalars['ID']>;
  /** Запрос избранного рынка по идентификатору */
  contractorMarketBinding?: Maybe<ContractorMarketBindingSnapshot>;
  contractorRole?: Maybe<ContractorRoleType>;
  contractorRoleBinding?: Maybe<ContractorRoleBindingType>;
  contractorRoles: ContractorRoleTypeConnection;
  contractors: ContractorTypeConnection;
  contractorsCount: Scalars['Int'];
  customerSearch: CustomerSearchResult;
  delivery: DeliverySnapshot;
  /** Запрос класса техники по идентификатору */
  equipmentClass?: Maybe<EquipmentClassType>;
  /** Запрос списка классов техники */
  equipmentClasses: EquipmentClassTypeConnection;
  /** Запрос модели по идентификатору */
  equipmentModel?: Maybe<EquipmentModelType>;
  /** Запрос списка моделей техники */
  equipmentModels: EquipmentModelTypeConnection;
  /** Запрос избранной запчасти по идентификатору, доступны только избранные запчасти организации прописанной в  токене */
  favoriteProduct?: Maybe<FavoriteProductType>;
  location?: Maybe<LocationSnapshot>;
  locations: LocationSnapshotConnection;
  locationsCount: Scalars['Int'];
  lot: LotSnapshot;
  /** Запрос производителя техники по идентификатору */
  manufacturer?: Maybe<ManufacturerType>;
  /** Запрос производителей техники */
  manufacturers: ManufacturerTypeConnection;
  /** Запрос рынка по идентификатору */
  market: MarketSnapshot;
  /** Запрос рынков */
  markets: Array<MarketSnapshot>;
  /** Запрос количества рынков */
  marketsCount: Scalars['Int'];
  me?: Maybe<UserType>;
  myContractor?: Maybe<ContractorType>;
  /** Запрос новости по идентификатору */
  newsPost?: Maybe<NewsPostSnapshot>;
  /** Запрос новостей */
  newsPosts: Array<NewsPostSnapshot>;
  /** Запрос количества новостей */
  newsPostsCount: Scalars['Int'];
  /** Запрос предложения по идентификатору */
  offer?: Maybe<OfferType>;
  /** Запрос счетчика количества показов по идентификатору */
  offerSearchCounter?: Maybe<OfferSearchCounterType>;
  offersCount: Scalars['Int'];
  order: OrderSnapshot;
  orderItem: OrderItemSnapshot;
  orders: Array<OrderSnapshot>;
  party: PartySnapshot;
  /** Запрос запчасти по идентификатору */
  product?: Maybe<ProductType>;
  /** Запрос связи по идентификатору */
  productModel?: Maybe<ProductModelBindingType>;
  /** Запрос по идентификатору связки запчасти и предложения поставщика */
  productOffer?: Maybe<ProductOfferType>;
  /** Запрос запчастей */
  products: ProductTypeConnection;
  /** Группа публичных метрик маркетплейса */
  publicStats: PublicStatsSnapshot;
  /** Запрос отчета по идентификатору */
  report?: Maybe<ReportSnapshot>;
  selectedItem: SelectedItemSnapshot;
  selection: SelectionSnapshot;
  selectionRequest: SelectionRequestSnapshot;
  selectionRequests: SelectionRequestSnapshotConnection;
  /** Получение настроек клиента */
  settings: SettingsSnapshot;
  token?: Maybe<TokenType>;
  user?: Maybe<UserType>;
  userAuthenticatedByPassword?: Maybe<AuthorizedUserSnapshot>;
  userRoleBinding?: Maybe<UserRoleBindingType>;
  vendorSearch: PartyConnection;
  /** Запрос гео данных яндекса по идентификатору */
  yandexGeocode?: Maybe<GeocodeSnapshot>;
  /** Запрос гео данных яндекса по адресу */
  yandexGeocodeByAddress?: Maybe<GeocodeSnapshot>;
  /** Запрос гео данных яндекса по координатам */
  yandexGeocodeByCoordinates?: Maybe<GeocodeSnapshot>;
};

export type QueryContractorArgs = {
  id: Scalars['ID'];
};

export type QueryContractorBySlugArgs = {
  slug: Scalars['String'];
};

export type QueryContractorMarketBindingArgs = {
  id: Scalars['ID'];
};

export type QueryContractorRoleArgs = {
  id: Scalars['ID'];
};

export type QueryContractorRoleBindingArgs = {
  id: Scalars['ID'];
};

export type QueryContractorRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryContractorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryContractorsCountArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type QueryCustomerSearchArgs = {
  count?: InputMaybe<Scalars['Int']>;
  searchText?: InputMaybe<Scalars['String']>;
};

export type QueryDeliveryArgs = {
  id: Scalars['ID'];
};

export type QueryEquipmentClassArgs = {
  id: Scalars['ID'];
};

export type QueryEquipmentClassesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryEquipmentModelArgs = {
  id: Scalars['ID'];
};

export type QueryEquipmentModelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryFavoriteProductArgs = {
  id: Scalars['ID'];
};

export type QueryLocationArgs = {
  id: Scalars['ID'];
};

export type QueryLocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryLocationsCountArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type QueryLotArgs = {
  id: Scalars['ID'];
};

export type QueryManufacturerArgs = {
  id: Scalars['ID'];
};

export type QueryManufacturersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryMarketArgs = {
  id: Scalars['ID'];
};

export type QueryMarketsArgs = {
  number?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryMarketsCountArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type QueryNewsPostArgs = {
  id: Scalars['ID'];
};

export type QueryNewsPostsArgs = {
  number?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryNewsPostsCountArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type QueryOfferArgs = {
  id: Scalars['ID'];
};

export type QueryOfferSearchCounterArgs = {
  id: Scalars['ID'];
};

export type QueryOffersCountArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type QueryOrderArgs = {
  id: Scalars['ID'];
};

export type QueryOrderItemArgs = {
  id: Scalars['ID'];
};

export type QueryOrdersArgs = {
  number?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryPartyArgs = {
  id: Scalars['ID'];
};

export type QueryProductArgs = {
  id: Scalars['ID'];
};

export type QueryProductModelArgs = {
  id: Scalars['ID'];
};

export type QueryProductOfferArgs = {
  id: Scalars['ID'];
};

export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryReportArgs = {
  id: Scalars['ID'];
};

export type QuerySelectedItemArgs = {
  fqdn: Scalars['ID'];
};

export type QuerySelectionArgs = {
  fqdn: Scalars['ID'];
};

export type QuerySelectionRequestArgs = {
  fqdn: Scalars['ID'];
};

export type QuerySelectionRequestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QuerySettingsArgs = {
  contractorId: Scalars['ID'];
};

export type QueryTokenArgs = {
  id: Scalars['ID'];
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryUserAuthenticatedByPasswordArgs = {
  password: Scalars['SECRET'];
  phone: Scalars['String'];
};

export type QueryUserRoleBindingArgs = {
  id: Scalars['ID'];
};

export type QueryVendorSearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryYandexGeocodeArgs = {
  id: Scalars['ID'];
};

export type QueryYandexGeocodeByAddressArgs = {
  address: Scalars['String'];
};

export type QueryYandexGeocodeByCoordinatesArgs = {
  coordinates: Scalars['String'];
};

/** Объект для создания новой отчета */
export type ReportCreateInput = {
  /** Id организации для которой создается отчет */
  contractorId?: InputMaybe<Scalars['ID']>;
  /** Дата начала периода сбора данных */
  dateFrom: Scalars['DateTime'];
  /** Дата окончания периода сбора данных */
  dateTo: Scalars['DateTime'];
  /** Назначение отчета */
  species: ReportSpecies;
  /** Дата старта генерации отчета */
  startDate?: InputMaybe<Scalars['DateTime']>;
  /** Периодичность выполнения отчета */
  type?: InputMaybe<ReportType>;
};

/** Результат создания отчета */
export type ReportCreateResult = {
  __typename?: 'ReportCreateResult';
  report?: Maybe<ReportSnapshot>;
};

/** Объект для удаления отчета */
export type ReportDeleteInput = {
  /** Идентификатор отчета */
  id: Scalars['ID'];
};

/** Результат удаления отчета */
export type ReportDeleteResult = {
  __typename?: 'ReportDeleteResult';
  /** Идентификатор отчета */
  deletedReportId?: Maybe<Scalars['ID']>;
};

/** Отчет по количеству показов предложений поставщика в результатах поиска */
export type ReportSnapshot = {
  __typename?: 'ReportSnapshot';
  /** Организация запросившая отчет */
  contractor: ContractorType;
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Идентификатор отчета */
  id: Scalars['ID'];
  /** Ключ для запроса файла отчета в файловом хранилище */
  reportFileKey?: Maybe<Scalars['String']>;
  /** Назначение отчета */
  species: ReportSpecies;
  /** Дата начала создания отчета */
  startDate: Scalars['DateTime'];
  /** Статус отчета */
  status: Scalars['String'];
  /** Наименование отчета */
  title: Scalars['String'];
  /** Периодичность выполнения отчета */
  type: ReportType;
  /** Дата последнего изменения записи */
  updatedAt: Scalars['DateTime'];
};

/** A connection to a list of items. */
export type ReportSnapshotConnection = {
  __typename?: 'ReportSnapshotConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<ReportSnapshotEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type ReportSnapshotEdge = {
  __typename?: 'ReportSnapshotEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ReportSnapshot>;
};

export enum ReportSpecies {
  NewContractorsLocationsOffersCounter = 'NEW_CONTRACTORS_LOCATIONS_OFFERS_COUNTER',
  OffersSearchCounter = 'OFFERS_SEARCH_COUNTER'
}

export enum ReportType {
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  OneShot = 'ONE_SHOT',
  Weekly = 'WEEKLY'
}

export type SelectedItemCreateInput = {
  partyFQDN: Scalars['ID'];
  quantity: Scalars['Int'];
  selectionFQDN: Scalars['ID'];
};

export type SelectedItemCreateResult = {
  __typename?: 'SelectedItemCreateResult';
  selectedItem: SelectedItemSnapshot;
};

export type SelectedItemDeleteResult = {
  __typename?: 'SelectedItemDeleteResult';
  deletedSelectedItemId?: Maybe<Scalars['ID']>;
};

export type SelectedItemSnapshot = {
  __typename?: 'SelectedItemSnapshot';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  party: PartySnapshot;
  quantity: Scalars['Int'];
  selection: SelectionSnapshot;
  updatedAt: Scalars['DateTime'];
};

export type SelectedItemUpdateInput = {
  quantity: Scalars['Int'];
  selectedItemFQDN: Scalars['ID'];
};

export type SelectedItemUpdateResult = {
  __typename?: 'SelectedItemUpdateResult';
  selectedItem: SelectedItemSnapshot;
};

export type SelectionCreateInput = {
  desiredQuantity: Scalars['Int'];
  manufacturer: Scalars['String'];
  productCode: Scalars['String'];
  selectionRequestFQDN: Scalars['ID'];
  title: Scalars['String'];
};

export type SelectionCreateManyInput = {
  selectionRequestId: Scalars['ID'];
  selections: Array<SelectionInput>;
};

export type SelectionCreateManyResult = {
  __typename?: 'SelectionCreateManyResult';
  selections: Array<SelectionSnapshot>;
};

export type SelectionCreateResult = {
  __typename?: 'SelectionCreateResult';
  selection: SelectionSnapshot;
};

export type SelectionDeleteResult = {
  __typename?: 'SelectionDeleteResult';
  deletedSelectionId?: Maybe<Scalars['ID']>;
};

export type SelectionInput = {
  desiredQuantity: Scalars['Int'];
  manufacturer: Scalars['String'];
  productCode: Scalars['String'];
  title: Scalars['String'];
};

export type SelectionRequestCreateInput = {
  comment: Scalars['String'];
  selections?: InputMaybe<Array<SelectionInput>>;
};

export type SelectionRequestCreateResult = {
  __typename?: 'SelectionRequestCreateResult';
  selectionRequest: SelectionRequestSnapshot;
};

export type SelectionRequestSnapshot = {
  __typename?: 'SelectionRequestSnapshot';
  comment?: Maybe<Scalars['String']>;
  contractor: ContractorType;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  number: Scalars['String'];
  selections: SelectionSnapshotConnection;
  status: SelectionRequestStatus;
  updatedAt: Scalars['DateTime'];
};

export type SelectionRequestSnapshotSelectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type SelectionRequestSnapshotConnection = {
  __typename?: 'SelectionRequestSnapshotConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<SelectionRequestSnapshotEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type SelectionRequestSnapshotEdge = {
  __typename?: 'SelectionRequestSnapshotEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<SelectionRequestSnapshot>;
};

export enum SelectionRequestStatus {
  Archived = 'ARCHIVED',
  ForCustomerApproval = 'FOR_CUSTOMER_APPROVAL',
  InWork = 'IN_WORK',
  New = 'NEW'
}

export type SelectionRequestUpdateResult = {
  __typename?: 'SelectionRequestUpdateResult';
  selectionRequest: SelectionRequestSnapshot;
};

export type SelectionSnapshot = {
  __typename?: 'SelectionSnapshot';
  createdAt: Scalars['DateTime'];
  desiredQuantity: Scalars['Int'];
  id: Scalars['ID'];
  items: Array<SelectedItemSnapshot>;
  manufacturer: Scalars['String'];
  offeredParties: Array<PartySnapshot>;
  productCode: Scalars['String'];
  selectionRequest: SelectionRequestSnapshot;
  status: SelectionStatus;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SelectionSnapshotItemsArgs = {
  number?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type SelectionSnapshotConnection = {
  __typename?: 'SelectionSnapshotConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<SelectionSnapshotEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type SelectionSnapshotEdge = {
  __typename?: 'SelectionSnapshotEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<SelectionSnapshot>;
};

export enum SelectionStatus {
  InWork = 'IN_WORK',
  New = 'NEW'
}

export type SelectionUpdateInput = {
  desiredQuantity?: InputMaybe<Scalars['Int']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  productCode?: InputMaybe<Scalars['String']>;
  selectionFQDN: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type SelectionUpdateResult = {
  __typename?: 'SelectionUpdateResult';
  selection: SelectionSnapshot;
};

/** Настройки клиента */
export type SettingsSnapshot = {
  __typename?: 'SettingsSnapshot';
  /** Организация */
  contractor: ContractorType;
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Идентификатор настроек */
  id: Scalars['ID'];
  /** Процент наценки клиента */
  pricePercentMargin?: Maybe<Scalars['Int']>;
  /** Дата обновления записи */
  updatedAt: Scalars['DateTime'];
  /** НДС клиента */
  vat?: Maybe<Scalars['Int']>;
};

/** Объект для обновления настроек клиента */
export type SettingsUpdateInput = {
  /** Добавление НДС к цене */
  hasVat?: InputMaybe<Scalars['Boolean']>;
  /** % наценки клиента */
  pricePercentMargin?: InputMaybe<Scalars['Int']>;
};

/** Результат обновления настроек клиента */
export type SettingsUpdateResult = {
  __typename?: 'SettingsUpdateResult';
  settings: SettingsSnapshot;
};

export enum Status {
  AwaitShipment = 'AWAIT_SHIPMENT',
  Canceled = 'CANCELED',
  CustomerConfirmationRequired = 'CUSTOMER_CONFIRMATION_REQUIRED',
  Delivered = 'DELIVERED',
  Delivering = 'DELIVERING',
  SupplierConfirmationRequired = 'SUPPLIER_CONFIRMATION_REQUIRED'
}

export type TokenCreateInput = {
  description: Scalars['String'];
  title: Scalars['String'];
  userId: Scalars['ID'];
};

export type TokenCreateResult = {
  __typename?: 'TokenCreateResult';
  token?: Maybe<TokenType>;
  tokenData?: Maybe<Scalars['String']>;
};

export type TokenDeleteInput = {
  id: Scalars['ID'];
};

export type TokenDeleteResult = {
  __typename?: 'TokenDeleteResult';
  deletedTokenId?: Maybe<Scalars['ID']>;
};

export type TokenType = {
  __typename?: 'TokenType';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  hash: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type UserBindRoleInput = {
  id: Scalars['ID'];
  roleId: Scalars['ID'];
  subjectContractorId?: InputMaybe<Scalars['ID']>;
};

export type UserBindRoleResult = {
  __typename?: 'UserBindRoleResult';
  roleBinding?: Maybe<UserRoleBindingType>;
};

export type UserDataInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleName: Scalars['String'];
  phone: Scalars['String'];
};

export type UserDeleteInput = {
  id: Scalars['ID'];
};

export type UserDeleteResult = {
  __typename?: 'UserDeleteResult';
  deletedUserId?: Maybe<Scalars['ID']>;
};

export type UserResult = {
  __typename?: 'UserResult';
  user?: Maybe<UserType>;
};

export type UserRoleBindingType = {
  __typename?: 'UserRoleBindingType';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  role: UserRoleType;
  subjectContractor: ContractorType;
};

export type UserRoleType = {
  __typename?: 'UserRoleType';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  permissions: Scalars['Permissions'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** A connection to a list of items. */
export type UserRoleTypeConnection = {
  __typename?: 'UserRoleTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<UserRoleTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type UserRoleTypeEdge = {
  __typename?: 'UserRoleTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<UserRoleType>;
};

export type UserType = {
  __typename?: 'UserType';
  contractor: ContractorType;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  middleName: Scalars['String'];
  phone: Scalars['String'];
  role?: Maybe<UserRoleType>;
  roleBindings: Array<UserRoleBindingType>;
  updatedAt: Scalars['DateTime'];
};

/** A connection to a list of items. */
export type UserTypeConnection = {
  __typename?: 'UserTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<UserTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type UserTypeEdge = {
  __typename?: 'UserTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<UserType>;
};

export type UserUnbindRoleInput = {
  id: Scalars['ID'];
};

export type UserUnbindRoleResult = {
  __typename?: 'UserUnbindRoleResult';
  deletedRoleBindingId?: Maybe<Scalars['ID']>;
};

export type MyLocationsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MyLocationsQuery = {
  __typename?: 'Query';
  myContractor?: {
    __typename?: 'ContractorType';
    id: string;
    locations: {
      __typename?: 'LocationSnapshotConnection';
      edges?: Array<{
        __typename?: 'LocationSnapshotEdge';
        cursor: string;
        node?: {
          __typename?: 'LocationSnapshot';
          address: string;
          contactPerson: string;
          contactPhone: string;
          description: string;
          externalId: string;
          id: string;
          title: string;
          updatedAt: any;
          canBeDeleted: boolean;
        } | null;
      } | null> | null;
    };
  } | null;
};

export type LocationCreateMutationVariables = Types.Exact<{
  input: Types.LocationCreateInput;
}>;

export type LocationCreateMutation = {
  __typename?: 'Mutation';
  locationCreate: {
    __typename?: 'LocationCreateResult';
    location?: {
      __typename?: 'LocationSnapshot';
      address: string;
      contactEmail: string;
      contactPerson: string;
      contactPhone: string;
      createdAt: any;
      description: string;
      externalId: string;
      id: string;
      title: string;
      updatedAt: any;
    } | null;
  };
};

export type LocationDeleteMutationVariables = Types.Exact<{
  input: Types.LocationDeleteInput;
}>;

export type LocationDeleteMutation = {
  __typename?: 'Mutation';
  locationDelete: { __typename?: 'LocationDeleteResult'; deletedLocationId?: string | null; operationId: any };
};

export type LocationUpdateMutationVariables = Types.Exact<{
  input: Types.LocationUpdateInput;
}>;

export type LocationUpdateMutation = {
  __typename?: 'Mutation';
  locationUpdate: {
    __typename?: 'LocationUpdateResult';
    location?: {
      __typename?: 'LocationSnapshot';
      address: string;
      contactEmail: string;
      contactPerson: string;
      contactPhone: string;
      description: string;
      externalId: string;
      id: string;
      title: string;
    } | null;
  };
};

export const MyLocationsDocument = gql`
  query MyLocations {
    myContractor {
      id
      locations(first: 100) {
        edges {
          cursor
          node {
            address
            contactPerson
            contactPhone
            description
            externalId
            id
            title
            updatedAt
            canBeDeleted
          }
        }
      }
    }
  }
`;

/**
 * __useMyLocationsQuery__
 *
 * To run a query within a React component, call `useMyLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyLocationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyLocationsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<MyLocationsQuery, MyLocationsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<MyLocationsQuery, MyLocationsQueryVariables>(MyLocationsDocument, options);
}
export function useMyLocationsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyLocationsQuery, MyLocationsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<MyLocationsQuery, MyLocationsQueryVariables>(MyLocationsDocument, options);
}
export type MyLocationsQueryHookResult = ReturnType<typeof useMyLocationsQuery>;
export type MyLocationsLazyQueryHookResult = ReturnType<typeof useMyLocationsLazyQuery>;
export type MyLocationsQueryResult = Apollo.QueryResult<MyLocationsQuery, MyLocationsQueryVariables>;
export const LocationCreateDocument = gql`
  mutation LocationCreate($input: LocationCreateInput!) {
    locationCreate(input: $input) {
      location {
        address
        contactEmail
        contactPerson
        contactPhone
        createdAt
        description
        externalId
        id
        title
        updatedAt
      }
    }
  }
`;
export type LocationCreateMutationFn = Apollo.MutationFunction<LocationCreateMutation, LocationCreateMutationVariables>;

/**
 * __useLocationCreateMutation__
 *
 * To run a mutation, you first call `useLocationCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLocationCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [locationCreateMutation, { data, loading, error }] = useLocationCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLocationCreateMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<LocationCreateMutation, LocationCreateMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<LocationCreateMutation, LocationCreateMutationVariables>(
    LocationCreateDocument,
    options
  );
}
export type LocationCreateMutationHookResult = ReturnType<typeof useLocationCreateMutation>;
export type LocationCreateMutationResult = Apollo.MutationResult<LocationCreateMutation>;
export type LocationCreateMutationOptions = Apollo.BaseMutationOptions<
  LocationCreateMutation,
  LocationCreateMutationVariables
>;
export const LocationDeleteDocument = gql`
  mutation LocationDelete($input: LocationDeleteInput!) {
    locationDelete(input: $input) {
      deletedLocationId
      operationId
    }
  }
`;
export type LocationDeleteMutationFn = Apollo.MutationFunction<LocationDeleteMutation, LocationDeleteMutationVariables>;

/**
 * __useLocationDeleteMutation__
 *
 * To run a mutation, you first call `useLocationDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLocationDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [locationDeleteMutation, { data, loading, error }] = useLocationDeleteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLocationDeleteMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<LocationDeleteMutation, LocationDeleteMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<LocationDeleteMutation, LocationDeleteMutationVariables>(
    LocationDeleteDocument,
    options
  );
}
export type LocationDeleteMutationHookResult = ReturnType<typeof useLocationDeleteMutation>;
export type LocationDeleteMutationResult = Apollo.MutationResult<LocationDeleteMutation>;
export type LocationDeleteMutationOptions = Apollo.BaseMutationOptions<
  LocationDeleteMutation,
  LocationDeleteMutationVariables
>;
export const LocationUpdateDocument = gql`
  mutation LocationUpdate($input: LocationUpdateInput!) {
    locationUpdate(input: $input) {
      location {
        address
        contactEmail
        contactPerson
        contactPhone
        description
        externalId
        id
        title
      }
    }
  }
`;
export type LocationUpdateMutationFn = Apollo.MutationFunction<LocationUpdateMutation, LocationUpdateMutationVariables>;

/**
 * __useLocationUpdateMutation__
 *
 * To run a mutation, you first call `useLocationUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLocationUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [locationUpdateMutation, { data, loading, error }] = useLocationUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLocationUpdateMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<LocationUpdateMutation, LocationUpdateMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<LocationUpdateMutation, LocationUpdateMutationVariables>(
    LocationUpdateDocument,
    options
  );
}
export type LocationUpdateMutationHookResult = ReturnType<typeof useLocationUpdateMutation>;
export type LocationUpdateMutationResult = Apollo.MutationResult<LocationUpdateMutation>;
export type LocationUpdateMutationOptions = Apollo.BaseMutationOptions<
  LocationUpdateMutation,
  LocationUpdateMutationVariables
>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {}
};
export default result;
