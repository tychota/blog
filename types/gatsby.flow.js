/* @flow */

export type IGraphQLResponseRoot = {
  data?: IQuery,
  errors?: Array<IGraphQLResponseError>
};

export type IGraphQLResponseError = {
  /** Required for all errors */
  message: string,
  locations?: Array<IGraphQLResponseErrorLocation>,
  /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
  [propName: string]: any
};

export type IGraphQLResponseErrorLocation = {
  line: number,
  column: number
};

export type IQuery = {
  /**
   * Connection to all SitePage nodes
   */
  allSitePage: ISitePageConnection | null,

  /**
   * Connection to all SitePlugin nodes
   */
  allSitePlugin: ISitePluginConnection | null,

  /**
   * Connection to all Directory nodes
   */
  allDirectory: IDirectoryConnection | null,

  /**
   * Connection to all File nodes
   */
  allFile: IFileConnection | null,

  /**
   * Connection to all MarkdownRemark nodes
   */
  allMarkdownRemark: IMarkdownRemarkConnection | null,
  sitePage: ISitePage | null,
  sitePlugin: ISitePlugin | null,
  site: ISite | null,
  directory: IDirectory | null,
  file: IFile | null,
  markdownRemark: IMarkdownRemark | null
};

export type IAllSitePageOnQueryArguments = {
  skip?: number | null,
  limit?: number | null,
  sort?: ISitePageConnectionSort | null,
  filter?: IFilterSitePage | null
};

export type IAllSitePluginOnQueryArguments = {
  skip?: number | null,
  limit?: number | null,
  sort?: ISitePluginConnectionSort | null,
  filter?: IFilterSitePlugin | null
};

export type IAllDirectoryOnQueryArguments = {
  skip?: number | null,
  limit?: number | null,
  sort?: IDirectoryConnectionSort | null,
  filter?: IFilterDirectory | null
};

export type IAllFileOnQueryArguments = {
  skip?: number | null,
  limit?: number | null,
  sort?: IFileConnectionSort | null,
  filter?: IFilterFile | null
};

export type IAllMarkdownRemarkOnQueryArguments = {
  skip?: number | null,
  limit?: number | null,
  sort?: IMarkdownRemarkConnectionSort | null,
  filter?: IFilterMarkdownRemark | null
};

export type ISitePageOnQueryArguments = {
  jsonName?: ISitePageJsonNameQueryString | null,
  internalComponentName?: ISitePageInternalComponentNameQueryString | null,
  path?: ISitePagePathQueryString2 | null,
  component?: ISitePageComponentQueryString | null,
  componentChunkName?: ISitePageComponentChunkNameQueryString | null,
  pluginCreator?: ISitePagePluginCreatorInputObject | null,
  pluginCreatorId?: ISitePagePluginCreatorIdQueryString2 | null,
  componentPath?: ISitePageComponentPathQueryString | null,
  id?: ISitePageIdQueryString2 | null,
  internal?: ISitePageInternalInputObject2 | null
};

export type ISitePluginOnQueryArguments = {
  resolve?: ISitePluginResolveQueryString2 | null,
  id?: ISitePluginIdQueryString2 | null,
  name?: ISitePluginNameQueryString2 | null,
  version?: ISitePluginVersionQueryString2 | null,
  pluginOptions?: ISitePluginPluginOptionsInputObject2 | null,
  nodeAPIs?: ISitePluginNodeApIsQueryList2 | null,
  pluginFilepath?: ISitePluginPluginFilepathQueryString2 | null,
  packageJson?: ISitePluginPackageJsonInputObject2 | null,
  internal?: ISitePluginInternalInputObject2 | null
};

export type ISiteOnQueryArguments = {
  siteMetadata?: ISiteSiteMetadataInputObject2 | null,
  port?: ISitePortQueryString2 | null,
  host?: ISiteHostQueryString2 | null,
  pathPrefix?: ISitePathPrefixQueryString2 | null,
  polyfill?: ISitePolyfillQueryBoolean2 | null,
  buildTime?: ISiteBuildTimeQueryString2 | null,
  id?: ISiteIdQueryString2 | null,
  internal?: ISiteInternalInputObject2 | null
};

export type IDirectoryOnQueryArguments = {
  id?: IDirectoryIdQueryString2 | null,
  internal?: IDirectoryInternalInputObject2 | null,
  sourceInstanceName?: IDirectorySourceInstanceNameQueryString2 | null,
  absolutePath?: IDirectoryAbsolutePathQueryString2 | null,
  relativePath?: IDirectoryRelativePathQueryString2 | null,
  extension?: IDirectoryExtensionQueryString2 | null,
  size?: IDirectorySizeQueryInteger2 | null,
  prettySize?: IDirectoryPrettySizeQueryString2 | null,
  modifiedTime?: IDirectoryModifiedTimeQueryString2 | null,
  accessTime?: IDirectoryAccessTimeQueryString2 | null,
  changeTime?: IDirectoryChangeTimeQueryString2 | null,
  birthTime?: IDirectoryBirthTimeQueryString2 | null,
  root?: IDirectoryRootQueryString2 | null,
  dir?: IDirectoryDirQueryString2 | null,
  base?: IDirectoryBaseQueryString2 | null,
  ext?: IDirectoryExtQueryString2 | null,
  name?: IDirectoryNameQueryString2 | null,
  relativeDirectory?: IDirectoryRelativeDirectoryQueryString2 | null,
  dev?: IDirectoryDevQueryInteger2 | null,
  mode?: IDirectoryModeQueryInteger2 | null,
  nlink?: IDirectoryNlinkQueryInteger2 | null,
  uid?: IDirectoryUidQueryInteger2 | null,
  gid?: IDirectoryGidQueryInteger2 | null,
  rdev?: IDirectoryRdevQueryInteger2 | null,
  blksize?: IDirectoryBlksizeQueryInteger2 | null,
  ino?: IDirectoryInoQueryInteger2 | null,
  blocks?: IDirectoryBlocksQueryInteger2 | null,
  atimeMs?: IDirectoryAtimeMsQueryFloat2 | null,
  mtimeMs?: IDirectoryMtimeMsQueryFloat2 | null,
  ctimeMs?: IDirectoryCtimeMsQueryFloat2 | null,
  birthtimeMs?: IDirectoryBirthtimeMsQueryFloat2 | null,
  atime?: IDirectoryAtimeQueryString2 | null,
  mtime?: IDirectoryMtimeQueryString2 | null,
  ctime?: IDirectoryCtimeQueryString2 | null,
  birthtime?: IDirectoryBirthtimeQueryString2 | null
};

export type IFileOnQueryArguments = {
  id?: IFileIdQueryString2 | null,
  internal?: IFileInternalInputObject2 | null,
  sourceInstanceName?: IFileSourceInstanceNameQueryString2 | null,
  absolutePath?: IFileAbsolutePathQueryString2 | null,
  relativePath?: IFileRelativePathQueryString2 | null,
  extension?: IFileExtensionQueryString2 | null,
  size?: IFileSizeQueryInteger2 | null,
  prettySize?: IFilePrettySizeQueryString2 | null,
  modifiedTime?: IFileModifiedTimeQueryString2 | null,
  accessTime?: IFileAccessTimeQueryString2 | null,
  changeTime?: IFileChangeTimeQueryString2 | null,
  birthTime?: IFileBirthTimeQueryString2 | null,
  root?: IFileRootQueryString2 | null,
  dir?: IFileDirQueryString2 | null,
  base?: IFileBaseQueryString2 | null,
  ext?: IFileExtQueryString2 | null,
  name?: IFileNameQueryString2 | null,
  relativeDirectory?: IFileRelativeDirectoryQueryString2 | null,
  dev?: IFileDevQueryInteger2 | null,
  mode?: IFileModeQueryInteger2 | null,
  nlink?: IFileNlinkQueryInteger2 | null,
  uid?: IFileUidQueryInteger2 | null,
  gid?: IFileGidQueryInteger2 | null,
  rdev?: IFileRdevQueryInteger2 | null,
  blksize?: IFileBlksizeQueryInteger2 | null,
  ino?: IFileInoQueryInteger2 | null,
  blocks?: IFileBlocksQueryInteger2 | null,
  atimeMs?: IFileAtimeMsQueryFloat2 | null,
  mtimeMs?: IFileMtimeMsQueryFloat2 | null,
  ctimeMs?: IFileCtimeMsQueryFloat2 | null,
  birthtimeMs?: IFileBirthtimeMsQueryFloat2 | null,
  atime?: IFileAtimeQueryString2 | null,
  mtime?: IFileMtimeQueryString2 | null,
  ctime?: IFileCtimeQueryString2 | null,
  birthtime?: IFileBirthtimeQueryString2 | null,
  publicURL?: IPublicUrlQueryString3 | null
};

export type IMarkdownRemarkOnQueryArguments = {
  id?: IMarkdownRemarkIdQueryString2 | null,
  internal?: IMarkdownRemarkInternalInputObject2 | null,
  frontmatter?: IMarkdownRemarkFrontmatterInputObject2 | null,
  excerpt?: IExcerptQueryString3 | null,
  rawMarkdownBody?: IMarkdownRemarkRawMarkdownBodyQueryString2 | null,
  fileAbsolutePath?: IMarkdownRemarkFileAbsolutePathQueryString2 | null,
  html?: IHtmlQueryString3 | null,
  headings?: IHeadingsQueryList3 | null,
  timeToRead?: ITimeToReadQueryInt3 | null,
  tableOfContents?: ITableOfContentsQueryString3 | null,
  wordCount?: IWordCountTypeName3 | null
};

export type ISitePageConnectionSort = {
  fields: Array<SitePageConnectionSortByFieldsEnum | null>,

  /**
   * @default "ASC"
   */
  order?: SitePageConnectionSortOrderValues | null
};

type SitePageConnectionSortByFieldsEnum =
  | "jsonName"
  | "internalComponentName"
  | "path"
  | "component"
  | "componentChunkName"
  | "pluginCreator___NODE"
  | "pluginCreatorId"
  | "componentPath"
  | "id"
  | "parent"
  | "internal___type"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___owner";

type SitePageConnectionSortOrderValues = "ASC" | "DESC";

/**
 * Filter connection on its fields
 */
export type IFilterSitePage = {
  jsonName?: ISitePageConnectionJsonNameQueryString | null,
  internalComponentName?: ISitePageConnectionInternalComponentNameQueryString | null,
  path?: ISitePageConnectionPathQueryString2 | null,
  component?: ISitePageConnectionComponentQueryString | null,
  componentChunkName?: ISitePageConnectionComponentChunkNameQueryString | null,
  pluginCreator?: ISitePageConnectionPluginCreatorInputObject | null,
  pluginCreatorId?: ISitePageConnectionPluginCreatorIdQueryString2 | null,
  componentPath?: ISitePageConnectionComponentPathQueryString | null,
  id?: ISitePageConnectionIdQueryString2 | null,
  internal?: ISitePageConnectionInternalInputObject2 | null
};

export type ISitePageConnectionJsonNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionInternalComponentNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionComponentQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionComponentChunkNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorInputObject = {
  resolve?: ISitePageConnectionPluginCreatorResolveQueryString | null,
  id?: ISitePageConnectionPluginCreatorIdQueryString | null,
  name?: ISitePageConnectionPluginCreatorNameQueryString | null,
  version?: ISitePageConnectionPluginCreatorVersionQueryString | null,
  pluginOptions?: ISitePageConnectionPluginCreatorPluginOptionsInputObject | null,
  nodeAPIs?: ISitePageConnectionPluginCreatorNodeApIsQueryList | null,
  pluginFilepath?: ISitePageConnectionPluginCreatorPluginFilepathQueryString | null,
  packageJson?: ISitePageConnectionPluginCreatorPackageJsonInputObject | null,
  parent?: ISitePageConnectionPluginCreatorParentQueryString | null,
  internal?: ISitePageConnectionPluginCreatorInternalInputObject | null
};

export type ISitePageConnectionPluginCreatorResolveQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorIdQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorVersionQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorPluginOptionsInputObject = {
  name?: ISitePageConnectionPluginCreatorPluginOptionsNameQueryString | null,
  path?: ISitePageConnectionPluginCreatorPluginOptionsPathQueryString | null,
  pathCheck?: ISitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean | null
};

export type ISitePageConnectionPluginCreatorPluginOptionsNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorPluginOptionsPathQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean = {
  eq?: boolean | null,
  ne?: boolean | null,
  in?: Array<boolean | null> | null,
  nin?: Array<boolean | null> | null
};

export type ISitePageConnectionPluginCreatorNodeApIsQueryList = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorPluginFilepathQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorPackageJsonInputObject = {
  name?: ISitePageConnectionPluginCreatorPackageJsonNameQueryString | null,
  description?: ISitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null,
  version?: ISitePageConnectionPluginCreatorPackageJsonVersionQueryString | null,
  main?: ISitePageConnectionPluginCreatorPackageJsonMainQueryString | null,
  license?: ISitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null,
  dependencies?: ISitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null,
  devDependencies?: ISitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null,
  peerDependencies?: ISitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null,
  keywords?: ISitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null
};

export type ISitePageConnectionPluginCreatorPackageJsonNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorPackageJsonDescriptionQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorPackageJsonVersionQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorPackageJsonMainQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorPackageJsonLicenseQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorPackageJsonDependenciesQueryList = {
  elemMatch?: ISitePageConnectionPluginCreatorPackageJsonDependenciesInputObject | null
};

export type ISitePageConnectionPluginCreatorPackageJsonDependenciesInputObject = {
  name?: ISitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null,
  version?: ISitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null
};

export type ISitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList = {
  elemMatch?: ISitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject | null
};

export type ISitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject = {
  name?: ISitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null,
  version?: ISitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null
};

export type ISitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList = {
  elemMatch?: ISitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject | null
};

export type ISitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject = {
  name?: ISitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null,
  version?: ISitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null
};

export type ISitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorPackageJsonKeywordsQueryList = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorParentQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorInternalInputObject = {
  contentDigest?: ISitePageConnectionPluginCreatorInternalContentDigestQueryString | null,
  type?: ISitePageConnectionPluginCreatorInternalTypeQueryString | null,
  owner?: ISitePageConnectionPluginCreatorInternalOwnerQueryString | null
};

export type ISitePageConnectionPluginCreatorInternalContentDigestQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorInternalTypeQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorInternalOwnerQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionPluginCreatorIdQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionComponentPathQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionIdQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionInternalInputObject2 = {
  type?: ISitePageConnectionInternalTypeQueryString2 | null,
  contentDigest?: ISitePageConnectionInternalContentDigestQueryString2 | null,
  description?: ISitePageConnectionInternalDescriptionQueryString | null,
  owner?: ISitePageConnectionInternalOwnerQueryString2 | null
};

export type ISitePageConnectionInternalTypeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionInternalContentDigestQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionInternalDescriptionQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageConnectionInternalOwnerQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

/**
 * A connection to a list of items.
 */
export type ISitePageConnection = {
  /**
   * Information to aid in pagination.
   */
  pageInfo: IPageInfo,

  /**
   * A list of edges.
   */
  edges: Array<ISitePageEdge | null> | null,
  totalCount: number | null,
  distinct: Array<string | null> | null,
  group: Array<ISitePageGroupConnectionConnection | null> | null
};

export type IDistinctOnSitePageConnectionArguments = {
  field?: SitePageDistinctEnum | null
};

export type IGroupOnSitePageConnectionArguments = {
  skip?: number | null,
  limit?: number | null,
  field?: SitePageGroupEnum | null
};

/**
 * Information about pagination in a connection.
 */
export type IPageInfo = {
  /**
   * When paginating, are there more items?
   */
  hasNextPage: boolean
};

/**
 * An edge in a connection.
 */
export type ISitePageEdge = {
  /**
   * The item at the end of the edge
   */
  node: ISitePage | null,

  /**
   * The next edge in the connection
   */
  next: ISitePage | null,

  /**
   * The previous edge in the connection
   */
  previous: ISitePage | null
};

/**
 * Node of type SitePage
 */
export type ISitePage = {
  /**
   * The id of this node.
   */
  id: string,

  /**
   * The parent of this node.
   */
  parent: Node | null,

  /**
   * The children of this node.
   */
  children: Array<Node | null> | null,
  jsonName: string | null,
  internalComponentName: string | null,
  path: string | null,
  component: string | null,
  componentChunkName: string | null,
  pluginCreator: ISitePlugin | null,
  pluginCreatorId: string | null,
  componentPath: string | null,
  internal: IInternal7 | null
};

/**
 * An object with an id, parent, and children
 */
type Node =
  | ISitePage
  | ISitePlugin
  | IDirectory
  | IFile
  | IMarkdownRemark
  | ISite;

/**
 * An object with an id, parent, and children
 */
export type INode = {
  /**
   * The id of the node.
   */
  id: string,

  /**
   * The parent of this node.
   */
  parent: Node | null,

  /**
   * The children of this node.
   */
  children: Array<Node | null> | null
};

/**
 * Node of type SitePlugin
 */
export type ISitePlugin = {
  /**
   * The id of this node.
   */
  id: string,

  /**
   * The parent of this node.
   */
  parent: Node | null,

  /**
   * The children of this node.
   */
  children: Array<Node | null> | null,
  resolve: string | null,
  name: string | null,
  version: string | null,
  pluginOptions: IPluginOptions2 | null,
  nodeAPIs: Array<string | null> | null,
  pluginFilepath: string | null,
  packageJson: IPackageJson2 | null,
  internal: IInternal8 | null
};

export type IPluginOptions2 = {
  name: string | null,
  path: string | null,
  pathCheck: boolean | null
};

export type IPackageJson2 = {
  name: string | null,
  description: string | null,
  version: string | null,
  main: string | null,
  license: string | null,
  dependencies: Array<IDependencies2 | null> | null,
  devDependencies: Array<IDevDependencies2 | null> | null,
  peerDependencies: Array<IPeerDependencies2 | null> | null,
  keywords: Array<string | null> | null
};

export type IDependencies2 = {
  name: string | null,
  version: string | null
};

export type IDevDependencies2 = {
  name: string | null,
  version: string | null
};

export type IPeerDependencies2 = {
  name: string | null,
  version: string | null
};

export type IInternal8 = {
  contentDigest: string | null,
  type: string | null,
  owner: string | null
};

export type IInternal7 = {
  type: string | null,
  contentDigest: string | null,
  description: string | null,
  owner: string | null
};

type SitePageDistinctEnum =
  | "jsonName"
  | "internalComponentName"
  | "path"
  | "component"
  | "componentChunkName"
  | "pluginCreator___NODE"
  | "pluginCreatorId"
  | "componentPath"
  | "id"
  | "parent"
  | "internal___type"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___owner";

type SitePageGroupEnum =
  | "jsonName"
  | "internalComponentName"
  | "path"
  | "component"
  | "componentChunkName"
  | "pluginCreator___NODE"
  | "pluginCreatorId"
  | "componentPath"
  | "id"
  | "parent"
  | "internal___type"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___owner";

/**
 * A connection to a list of items.
 */
export type ISitePageGroupConnectionConnection = {
  /**
   * Information to aid in pagination.
   */
  pageInfo: IPageInfo,

  /**
   * A list of edges.
   */
  edges: Array<ISitePageGroupConnectionEdge | null> | null,
  field: string | null,
  fieldValue: string | null,
  totalCount: number | null
};

/**
 * An edge in a connection.
 */
export type ISitePageGroupConnectionEdge = {
  /**
   * The item at the end of the edge
   */
  node: ISitePage | null,

  /**
   * The next edge in the connection
   */
  next: ISitePage | null,

  /**
   * The previous edge in the connection
   */
  previous: ISitePage | null
};

export type ISitePluginConnectionSort = {
  fields: Array<SitePluginConnectionSortByFieldsEnum | null>,

  /**
   * @default "ASC"
   */
  order?: SitePluginConnectionSortOrderValues | null
};

type SitePluginConnectionSortByFieldsEnum =
  | "resolve"
  | "id"
  | "name"
  | "version"
  | "pluginOptions___name"
  | "pluginOptions___path"
  | "pluginOptions___pathCheck"
  | "nodeAPIs"
  | "pluginFilepath"
  | "packageJson___name"
  | "packageJson___description"
  | "packageJson___version"
  | "packageJson___main"
  | "packageJson___author"
  | "packageJson___license"
  | "packageJson___dependencies"
  | "packageJson___devDependencies"
  | "packageJson___peerDependencies"
  | "packageJson___keywords"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___owner";

type SitePluginConnectionSortOrderValues = "ASC" | "DESC";

/**
 * Filter connection on its fields
 */
export type IFilterSitePlugin = {
  resolve?: ISitePluginConnectionResolveQueryString2 | null,
  id?: ISitePluginConnectionIdQueryString2 | null,
  name?: ISitePluginConnectionNameQueryString2 | null,
  version?: ISitePluginConnectionVersionQueryString2 | null,
  pluginOptions?: ISitePluginConnectionPluginOptionsInputObject2 | null,
  nodeAPIs?: ISitePluginConnectionNodeApIsQueryList2 | null,
  pluginFilepath?: ISitePluginConnectionPluginFilepathQueryString2 | null,
  packageJson?: ISitePluginConnectionPackageJsonInputObject2 | null,
  internal?: ISitePluginConnectionInternalInputObject2 | null
};

export type ISitePluginConnectionResolveQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionIdQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionVersionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionPluginOptionsInputObject2 = {
  name?: ISitePluginConnectionPluginOptionsNameQueryString2 | null,
  path?: ISitePluginConnectionPluginOptionsPathQueryString2 | null,
  pathCheck?: ISitePluginConnectionPluginOptionsPathCheckQueryBoolean2 | null
};

export type ISitePluginConnectionPluginOptionsNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionPluginOptionsPathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionPluginOptionsPathCheckQueryBoolean2 = {
  eq?: boolean | null,
  ne?: boolean | null,
  in?: Array<boolean | null> | null,
  nin?: Array<boolean | null> | null
};

export type ISitePluginConnectionNodeApIsQueryList2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionPluginFilepathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionPackageJsonInputObject2 = {
  name?: ISitePluginConnectionPackageJsonNameQueryString2 | null,
  description?: ISitePluginConnectionPackageJsonDescriptionQueryString2 | null,
  version?: ISitePluginConnectionPackageJsonVersionQueryString2 | null,
  main?: ISitePluginConnectionPackageJsonMainQueryString2 | null,
  license?: ISitePluginConnectionPackageJsonLicenseQueryString2 | null,
  dependencies?: ISitePluginConnectionPackageJsonDependenciesQueryList2 | null,
  devDependencies?: ISitePluginConnectionPackageJsonDevDependenciesQueryList2 | null,
  peerDependencies?: ISitePluginConnectionPackageJsonPeerDependenciesQueryList2 | null,
  keywords?: ISitePluginConnectionPackageJsonKeywordsQueryList2 | null
};

export type ISitePluginConnectionPackageJsonNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionPackageJsonDescriptionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionPackageJsonVersionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionPackageJsonMainQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionPackageJsonLicenseQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionPackageJsonDependenciesQueryList2 = {
  elemMatch?: ISitePluginConnectionPackageJsonDependenciesInputObject2 | null
};

export type ISitePluginConnectionPackageJsonDependenciesInputObject2 = {
  name?: ISitePluginConnectionPackageJsonDependenciesNameQueryString2 | null,
  version?: ISitePluginConnectionPackageJsonDependenciesVersionQueryString2 | null
};

export type ISitePluginConnectionPackageJsonDependenciesNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionPackageJsonDependenciesVersionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionPackageJsonDevDependenciesQueryList2 = {
  elemMatch?: ISitePluginConnectionPackageJsonDevDependenciesInputObject2 | null
};

export type ISitePluginConnectionPackageJsonDevDependenciesInputObject2 = {
  name?: ISitePluginConnectionPackageJsonDevDependenciesNameQueryString2 | null,
  version?: ISitePluginConnectionPackageJsonDevDependenciesVersionQueryString2 | null
};

export type ISitePluginConnectionPackageJsonDevDependenciesNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionPackageJsonDevDependenciesVersionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionPackageJsonPeerDependenciesQueryList2 = {
  elemMatch?: ISitePluginConnectionPackageJsonPeerDependenciesInputObject2 | null
};

export type ISitePluginConnectionPackageJsonPeerDependenciesInputObject2 = {
  name?: ISitePluginConnectionPackageJsonPeerDependenciesNameQueryString2 | null,
  version?: ISitePluginConnectionPackageJsonPeerDependenciesVersionQueryString2 | null
};

export type ISitePluginConnectionPackageJsonPeerDependenciesNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionPackageJsonPeerDependenciesVersionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionPackageJsonKeywordsQueryList2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionInternalInputObject2 = {
  contentDigest?: ISitePluginConnectionInternalContentDigestQueryString2 | null,
  type?: ISitePluginConnectionInternalTypeQueryString2 | null,
  owner?: ISitePluginConnectionInternalOwnerQueryString2 | null
};

export type ISitePluginConnectionInternalContentDigestQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionInternalTypeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginConnectionInternalOwnerQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

/**
 * A connection to a list of items.
 */
export type ISitePluginConnection = {
  /**
   * Information to aid in pagination.
   */
  pageInfo: IPageInfo,

  /**
   * A list of edges.
   */
  edges: Array<ISitePluginEdge | null> | null,
  totalCount: number | null,
  distinct: Array<string | null> | null,
  group: Array<ISitePluginGroupConnectionConnection | null> | null
};

export type IDistinctOnSitePluginConnectionArguments = {
  field?: SitePluginDistinctEnum | null
};

export type IGroupOnSitePluginConnectionArguments = {
  skip?: number | null,
  limit?: number | null,
  field?: SitePluginGroupEnum | null
};

/**
 * An edge in a connection.
 */
export type ISitePluginEdge = {
  /**
   * The item at the end of the edge
   */
  node: ISitePlugin | null,

  /**
   * The next edge in the connection
   */
  next: ISitePlugin | null,

  /**
   * The previous edge in the connection
   */
  previous: ISitePlugin | null
};

type SitePluginDistinctEnum =
  | "resolve"
  | "id"
  | "name"
  | "version"
  | "pluginOptions___name"
  | "pluginOptions___path"
  | "pluginOptions___pathCheck"
  | "nodeAPIs"
  | "pluginFilepath"
  | "packageJson___name"
  | "packageJson___description"
  | "packageJson___version"
  | "packageJson___main"
  | "packageJson___author"
  | "packageJson___license"
  | "packageJson___dependencies"
  | "packageJson___devDependencies"
  | "packageJson___peerDependencies"
  | "packageJson___keywords"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___owner";

type SitePluginGroupEnum =
  | "resolve"
  | "id"
  | "name"
  | "version"
  | "pluginOptions___name"
  | "pluginOptions___path"
  | "pluginOptions___pathCheck"
  | "nodeAPIs"
  | "pluginFilepath"
  | "packageJson___name"
  | "packageJson___description"
  | "packageJson___version"
  | "packageJson___main"
  | "packageJson___author"
  | "packageJson___license"
  | "packageJson___dependencies"
  | "packageJson___devDependencies"
  | "packageJson___peerDependencies"
  | "packageJson___keywords"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___owner";

/**
 * A connection to a list of items.
 */
export type ISitePluginGroupConnectionConnection = {
  /**
   * Information to aid in pagination.
   */
  pageInfo: IPageInfo,

  /**
   * A list of edges.
   */
  edges: Array<ISitePluginGroupConnectionEdge | null> | null,
  field: string | null,
  fieldValue: string | null,
  totalCount: number | null
};

/**
 * An edge in a connection.
 */
export type ISitePluginGroupConnectionEdge = {
  /**
   * The item at the end of the edge
   */
  node: ISitePlugin | null,

  /**
   * The next edge in the connection
   */
  next: ISitePlugin | null,

  /**
   * The previous edge in the connection
   */
  previous: ISitePlugin | null
};

export type IDirectoryConnectionSort = {
  fields: Array<DirectoryConnectionSortByFieldsEnum | null>,

  /**
   * @default "ASC"
   */
  order?: DirectoryConnectionSortOrderValues | null
};

type DirectoryConnectionSortByFieldsEnum =
  | "id"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___description"
  | "internal___owner"
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "blksize"
  | "ino"
  | "blocks"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "birthtimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime";

type DirectoryConnectionSortOrderValues = "ASC" | "DESC";

/**
 * Filter connection on its fields
 */
export type IFilterDirectory = {
  id?: IDirectoryConnectionIdQueryString2 | null,
  internal?: IDirectoryConnectionInternalInputObject2 | null,
  sourceInstanceName?: IDirectoryConnectionSourceInstanceNameQueryString2 | null,
  absolutePath?: IDirectoryConnectionAbsolutePathQueryString2 | null,
  relativePath?: IDirectoryConnectionRelativePathQueryString2 | null,
  extension?: IDirectoryConnectionExtensionQueryString2 | null,
  size?: IDirectoryConnectionSizeQueryInteger2 | null,
  prettySize?: IDirectoryConnectionPrettySizeQueryString2 | null,
  modifiedTime?: IDirectoryConnectionModifiedTimeQueryString2 | null,
  accessTime?: IDirectoryConnectionAccessTimeQueryString2 | null,
  changeTime?: IDirectoryConnectionChangeTimeQueryString2 | null,
  birthTime?: IDirectoryConnectionBirthTimeQueryString2 | null,
  root?: IDirectoryConnectionRootQueryString2 | null,
  dir?: IDirectoryConnectionDirQueryString2 | null,
  base?: IDirectoryConnectionBaseQueryString2 | null,
  ext?: IDirectoryConnectionExtQueryString2 | null,
  name?: IDirectoryConnectionNameQueryString2 | null,
  relativeDirectory?: IDirectoryConnectionRelativeDirectoryQueryString2 | null,
  dev?: IDirectoryConnectionDevQueryInteger2 | null,
  mode?: IDirectoryConnectionModeQueryInteger2 | null,
  nlink?: IDirectoryConnectionNlinkQueryInteger2 | null,
  uid?: IDirectoryConnectionUidQueryInteger2 | null,
  gid?: IDirectoryConnectionGidQueryInteger2 | null,
  rdev?: IDirectoryConnectionRdevQueryInteger2 | null,
  blksize?: IDirectoryConnectionBlksizeQueryInteger2 | null,
  ino?: IDirectoryConnectionInoQueryInteger2 | null,
  blocks?: IDirectoryConnectionBlocksQueryInteger2 | null,
  atimeMs?: IDirectoryConnectionAtimeMsQueryFloat2 | null,
  mtimeMs?: IDirectoryConnectionMtimeMsQueryFloat2 | null,
  ctimeMs?: IDirectoryConnectionCtimeMsQueryFloat2 | null,
  birthtimeMs?: IDirectoryConnectionBirthtimeMsQueryFloat2 | null,
  atime?: IDirectoryConnectionAtimeQueryString2 | null,
  mtime?: IDirectoryConnectionMtimeQueryString2 | null,
  ctime?: IDirectoryConnectionCtimeQueryString2 | null,
  birthtime?: IDirectoryConnectionBirthtimeQueryString2 | null
};

export type IDirectoryConnectionIdQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionInternalInputObject2 = {
  contentDigest?: IDirectoryConnectionInternalContentDigestQueryString2 | null,
  type?: IDirectoryConnectionInternalTypeQueryString2 | null,
  description?: IDirectoryConnectionInternalDescriptionQueryString2 | null,
  owner?: IDirectoryConnectionInternalOwnerQueryString2 | null
};

export type IDirectoryConnectionInternalContentDigestQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionInternalTypeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionInternalDescriptionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionInternalOwnerQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionSourceInstanceNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionAbsolutePathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionRelativePathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionExtensionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionSizeQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryConnectionPrettySizeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionModifiedTimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionAccessTimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionChangeTimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionBirthTimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionRootQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionDirQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionBaseQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionExtQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionRelativeDirectoryQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionDevQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryConnectionModeQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryConnectionNlinkQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryConnectionUidQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryConnectionGidQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryConnectionRdevQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryConnectionBlksizeQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryConnectionInoQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryConnectionBlocksQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryConnectionAtimeMsQueryFloat2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryConnectionMtimeMsQueryFloat2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryConnectionCtimeMsQueryFloat2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryConnectionBirthtimeMsQueryFloat2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryConnectionAtimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionMtimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionCtimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryConnectionBirthtimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

/**
 * A connection to a list of items.
 */
export type IDirectoryConnection = {
  /**
   * Information to aid in pagination.
   */
  pageInfo: IPageInfo,

  /**
   * A list of edges.
   */
  edges: Array<IDirectoryEdge | null> | null,
  totalCount: number | null,
  distinct: Array<string | null> | null,
  group: Array<IDirectoryGroupConnectionConnection | null> | null
};

export type IDistinctOnDirectoryConnectionArguments = {
  field?: DirectoryDistinctEnum | null
};

export type IGroupOnDirectoryConnectionArguments = {
  skip?: number | null,
  limit?: number | null,
  field?: DirectoryGroupEnum | null
};

/**
 * An edge in a connection.
 */
export type IDirectoryEdge = {
  /**
   * The item at the end of the edge
   */
  node: IDirectory | null,

  /**
   * The next edge in the connection
   */
  next: IDirectory | null,

  /**
   * The previous edge in the connection
   */
  previous: IDirectory | null
};

/**
 * Node of type Directory
 */
export type IDirectory = {
  /**
   * The id of this node.
   */
  id: string,

  /**
   * The parent of this node.
   */
  parent: Node | null,

  /**
   * The children of this node.
   */
  children: Array<Node | null> | null,
  internal: IInternal9 | null,
  sourceInstanceName: string | null,
  absolutePath: string | null,
  relativePath: string | null,
  extension: string | null,
  size: number | null,
  prettySize: string | null,
  modifiedTime: any | null,
  accessTime: any | null,
  changeTime: any | null,
  birthTime: any | null,
  root: string | null,
  dir: string | null,
  base: string | null,
  ext: string | null,
  name: string | null,
  relativeDirectory: string | null,
  dev: number | null,
  mode: number | null,
  nlink: number | null,
  uid: number | null,
  gid: number | null,
  rdev: number | null,
  blksize: number | null,
  ino: number | null,
  blocks: number | null,
  atimeMs: number | null,
  mtimeMs: number | null,
  ctimeMs: number | null,
  birthtimeMs: number | null,
  atime: any | null,
  mtime: any | null,
  ctime: any | null,
  birthtime: any | null
};

export type IModifiedTimeOnDirectoryArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

export type IAccessTimeOnDirectoryArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

export type IChangeTimeOnDirectoryArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

export type IBirthTimeOnDirectoryArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

export type IAtimeOnDirectoryArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

export type IMtimeOnDirectoryArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

export type ICtimeOnDirectoryArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

export type IBirthtimeOnDirectoryArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

export type IInternal9 = {
  contentDigest: string | null,
  type: string | null,
  description: string | null,
  owner: string | null
};

type DirectoryDistinctEnum =
  | "id"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___description"
  | "internal___owner"
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "blksize"
  | "ino"
  | "blocks"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "birthtimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime";

type DirectoryGroupEnum =
  | "id"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___description"
  | "internal___owner"
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "blksize"
  | "ino"
  | "blocks"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "birthtimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime";

/**
 * A connection to a list of items.
 */
export type IDirectoryGroupConnectionConnection = {
  /**
   * Information to aid in pagination.
   */
  pageInfo: IPageInfo,

  /**
   * A list of edges.
   */
  edges: Array<IDirectoryGroupConnectionEdge | null> | null,
  field: string | null,
  fieldValue: string | null,
  totalCount: number | null
};

/**
 * An edge in a connection.
 */
export type IDirectoryGroupConnectionEdge = {
  /**
   * The item at the end of the edge
   */
  node: IDirectory | null,

  /**
   * The next edge in the connection
   */
  next: IDirectory | null,

  /**
   * The previous edge in the connection
   */
  previous: IDirectory | null
};

export type IFileConnectionSort = {
  fields: Array<FileConnectionSortByFieldsEnum | null>,

  /**
   * @default "ASC"
   */
  order?: FileConnectionSortOrderValues | null
};

type FileConnectionSortByFieldsEnum =
  | "id"
  | "children"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___mediaType"
  | "internal___description"
  | "internal___owner"
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "blksize"
  | "ino"
  | "blocks"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "birthtimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "publicURL";

type FileConnectionSortOrderValues = "ASC" | "DESC";

/**
 * Filter connection on its fields
 */
export type IFilterFile = {
  id?: IFileConnectionIdQueryString2 | null,
  internal?: IFileConnectionInternalInputObject2 | null,
  sourceInstanceName?: IFileConnectionSourceInstanceNameQueryString2 | null,
  absolutePath?: IFileConnectionAbsolutePathQueryString2 | null,
  relativePath?: IFileConnectionRelativePathQueryString2 | null,
  extension?: IFileConnectionExtensionQueryString2 | null,
  size?: IFileConnectionSizeQueryInteger2 | null,
  prettySize?: IFileConnectionPrettySizeQueryString2 | null,
  modifiedTime?: IFileConnectionModifiedTimeQueryString2 | null,
  accessTime?: IFileConnectionAccessTimeQueryString2 | null,
  changeTime?: IFileConnectionChangeTimeQueryString2 | null,
  birthTime?: IFileConnectionBirthTimeQueryString2 | null,
  root?: IFileConnectionRootQueryString2 | null,
  dir?: IFileConnectionDirQueryString2 | null,
  base?: IFileConnectionBaseQueryString2 | null,
  ext?: IFileConnectionExtQueryString2 | null,
  name?: IFileConnectionNameQueryString2 | null,
  relativeDirectory?: IFileConnectionRelativeDirectoryQueryString2 | null,
  dev?: IFileConnectionDevQueryInteger2 | null,
  mode?: IFileConnectionModeQueryInteger2 | null,
  nlink?: IFileConnectionNlinkQueryInteger2 | null,
  uid?: IFileConnectionUidQueryInteger2 | null,
  gid?: IFileConnectionGidQueryInteger2 | null,
  rdev?: IFileConnectionRdevQueryInteger2 | null,
  blksize?: IFileConnectionBlksizeQueryInteger2 | null,
  ino?: IFileConnectionInoQueryInteger2 | null,
  blocks?: IFileConnectionBlocksQueryInteger2 | null,
  atimeMs?: IFileConnectionAtimeMsQueryFloat2 | null,
  mtimeMs?: IFileConnectionMtimeMsQueryFloat2 | null,
  ctimeMs?: IFileConnectionCtimeMsQueryFloat2 | null,
  birthtimeMs?: IFileConnectionBirthtimeMsQueryFloat2 | null,
  atime?: IFileConnectionAtimeQueryString2 | null,
  mtime?: IFileConnectionMtimeQueryString2 | null,
  ctime?: IFileConnectionCtimeQueryString2 | null,
  birthtime?: IFileConnectionBirthtimeQueryString2 | null,
  publicURL?: IPublicUrlQueryString4 | null
};

export type IFileConnectionIdQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionInternalInputObject2 = {
  contentDigest?: IFileConnectionInternalContentDigestQueryString2 | null,
  type?: IFileConnectionInternalTypeQueryString2 | null,
  mediaType?: IFileConnectionInternalMediaTypeQueryString2 | null,
  description?: IFileConnectionInternalDescriptionQueryString2 | null,
  owner?: IFileConnectionInternalOwnerQueryString2 | null
};

export type IFileConnectionInternalContentDigestQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionInternalTypeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionInternalMediaTypeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionInternalDescriptionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionInternalOwnerQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionSourceInstanceNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionAbsolutePathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionRelativePathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionExtensionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionSizeQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileConnectionPrettySizeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionModifiedTimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionAccessTimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionChangeTimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionBirthTimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionRootQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionDirQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionBaseQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionExtQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionRelativeDirectoryQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionDevQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileConnectionModeQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileConnectionNlinkQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileConnectionUidQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileConnectionGidQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileConnectionRdevQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileConnectionBlksizeQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileConnectionInoQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileConnectionBlocksQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileConnectionAtimeMsQueryFloat2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileConnectionMtimeMsQueryFloat2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileConnectionCtimeMsQueryFloat2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileConnectionBirthtimeMsQueryFloat2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileConnectionAtimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionMtimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionCtimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileConnectionBirthtimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IPublicUrlQueryString4 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

/**
 * A connection to a list of items.
 */
export type IFileConnection = {
  /**
   * Information to aid in pagination.
   */
  pageInfo: IPageInfo,

  /**
   * A list of edges.
   */
  edges: Array<IFileEdge | null> | null,
  totalCount: number | null,
  distinct: Array<string | null> | null,
  group: Array<IFileGroupConnectionConnection | null> | null
};

export type IDistinctOnFileConnectionArguments = {
  field?: FileDistinctEnum | null
};

export type IGroupOnFileConnectionArguments = {
  skip?: number | null,
  limit?: number | null,
  field?: FileGroupEnum | null
};

/**
 * An edge in a connection.
 */
export type IFileEdge = {
  /**
   * The item at the end of the edge
   */
  node: IFile | null,

  /**
   * The next edge in the connection
   */
  next: IFile | null,

  /**
   * The previous edge in the connection
   */
  previous: IFile | null
};

/**
 * Node of type File
 */
export type IFile = {
  /**
   * The id of this node.
   */
  id: string,

  /**
   * The parent of this node.
   */
  parent: Node | null,

  /**
   * The children of this node.
   */
  children: Array<Node | null> | null,

  /**
   * The child of this node of type markdownRemark
   */
  childMarkdownRemark: IMarkdownRemark | null,
  internal: IInternal10 | null,
  sourceInstanceName: string | null,
  absolutePath: string | null,
  relativePath: string | null,
  extension: string | null,
  size: number | null,
  prettySize: string | null,
  modifiedTime: any | null,
  accessTime: any | null,
  changeTime: any | null,
  birthTime: any | null,
  root: string | null,
  dir: string | null,
  base: string | null,
  ext: string | null,
  name: string | null,
  relativeDirectory: string | null,
  dev: number | null,
  mode: number | null,
  nlink: number | null,
  uid: number | null,
  gid: number | null,
  rdev: number | null,
  blksize: number | null,
  ino: number | null,
  blocks: number | null,
  atimeMs: number | null,
  mtimeMs: number | null,
  ctimeMs: number | null,
  birthtimeMs: number | null,
  atime: any | null,
  mtime: any | null,
  ctime: any | null,
  birthtime: any | null,

  /**
   * Copy file to static directory and return public url to it
   */
  publicURL: string | null
};

export type IModifiedTimeOnFileArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

export type IAccessTimeOnFileArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

export type IChangeTimeOnFileArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

export type IBirthTimeOnFileArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

export type IAtimeOnFileArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

export type IMtimeOnFileArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

export type ICtimeOnFileArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

export type IBirthtimeOnFileArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

/**
 * Node of type MarkdownRemark
 */
export type IMarkdownRemark = {
  /**
   * The id of this node.
   */
  id: string,

  /**
   * The parent of this node.
   */
  parent: Node | null,

  /**
   * The children of this node.
   */
  children: Array<Node | null> | null,
  internal: IInternal11 | null,
  frontmatter: IFrontmatter2 | null,
  rawMarkdownBody: string | null,
  fileAbsolutePath: string | null,
  html: string | null,
  htmlAst: any | null,
  excerpt: string | null,
  headings: Array<IMarkdownHeading | null> | null,
  timeToRead: number | null,
  tableOfContents: string | null,
  wordCount: IWordCount | null
};

export type IExcerptOnMarkdownRemarkArguments = {
  /**
   * @default 140
   */
  pruneLength?: number | null,

  /**
   * @default false
   */
  truncate?: boolean | null
};

export type IHeadingsOnMarkdownRemarkArguments = {
  depth?: HeadingLevels | null
};

export type ITableOfContentsOnMarkdownRemarkArguments = {
  /**
   * @default "fields.slug"
   */
  pathToSlugField?: string | null
};

export type IInternal11 = {
  content: string | null,
  type: string | null,
  contentDigest: string | null,
  owner: string | null
};

export type IFrontmatter2 = {
  title: string | null,
  path: string | null,
  date: any | null,
  draft: boolean | null,
  tags: Array<string | null> | null,
  excerpt: string | null,
  _PARENT: string | null
};

export type IDateOnFrontmatter2Arguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type IMarkdownHeading = {
  value: string | null,
  depth: number | null
};

export type IWordCount = {
  paragraphs: number | null,
  sentences: number | null,
  words: number | null
};

export type IInternal10 = {
  contentDigest: string | null,
  type: string | null,
  mediaType: string | null,
  description: string | null,
  owner: string | null
};

type FileDistinctEnum =
  | "id"
  | "children"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___mediaType"
  | "internal___description"
  | "internal___owner"
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "blksize"
  | "ino"
  | "blocks"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "birthtimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime";

type FileGroupEnum =
  | "id"
  | "children"
  | "parent"
  | "internal___contentDigest"
  | "internal___type"
  | "internal___mediaType"
  | "internal___description"
  | "internal___owner"
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "blksize"
  | "ino"
  | "blocks"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "birthtimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime";

/**
 * A connection to a list of items.
 */
export type IFileGroupConnectionConnection = {
  /**
   * Information to aid in pagination.
   */
  pageInfo: IPageInfo,

  /**
   * A list of edges.
   */
  edges: Array<IFileGroupConnectionEdge | null> | null,
  field: string | null,
  fieldValue: string | null,
  totalCount: number | null
};

/**
 * An edge in a connection.
 */
export type IFileGroupConnectionEdge = {
  /**
   * The item at the end of the edge
   */
  node: IFile | null,

  /**
   * The next edge in the connection
   */
  next: IFile | null,

  /**
   * The previous edge in the connection
   */
  previous: IFile | null
};

export type IMarkdownRemarkConnectionSort = {
  fields: Array<MarkdownRemarkConnectionSortByFieldsEnum | null>,

  /**
   * @default "ASC"
   */
  order?: MarkdownRemarkConnectionSortOrderValues | null
};

type MarkdownRemarkConnectionSortByFieldsEnum =
  | "id"
  | "parent"
  | "internal___content"
  | "internal___type"
  | "internal___contentDigest"
  | "internal___owner"
  | "frontmatter___title"
  | "frontmatter___path"
  | "frontmatter___date"
  | "frontmatter___draft"
  | "frontmatter___tags"
  | "frontmatter___excerpt"
  | "frontmatter____PARENT"
  | "excerpt"
  | "rawMarkdownBody"
  | "fileAbsolutePath"
  | "html"
  | "headings"
  | "timeToRead"
  | "tableOfContents"
  | "wordCount___paragraphs"
  | "wordCount___sentences"
  | "wordCount___words";

type MarkdownRemarkConnectionSortOrderValues = "ASC" | "DESC";

/**
 * Filter connection on its fields
 */
export type IFilterMarkdownRemark = {
  id?: IMarkdownRemarkConnectionIdQueryString2 | null,
  internal?: IMarkdownRemarkConnectionInternalInputObject2 | null,
  frontmatter?: IMarkdownRemarkConnectionFrontmatterInputObject2 | null,
  excerpt?: IExcerptQueryString4 | null,
  rawMarkdownBody?: IMarkdownRemarkConnectionRawMarkdownBodyQueryString2 | null,
  fileAbsolutePath?: IMarkdownRemarkConnectionFileAbsolutePathQueryString2 | null,
  html?: IHtmlQueryString4 | null,
  headings?: IHeadingsQueryList4 | null,
  timeToRead?: ITimeToReadQueryInt4 | null,
  tableOfContents?: ITableOfContentsQueryString4 | null,
  wordCount?: IWordCountTypeName4 | null
};

export type IMarkdownRemarkConnectionIdQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkConnectionInternalInputObject2 = {
  content?: IMarkdownRemarkConnectionInternalContentQueryString2 | null,
  type?: IMarkdownRemarkConnectionInternalTypeQueryString2 | null,
  contentDigest?: IMarkdownRemarkConnectionInternalContentDigestQueryString2 | null,
  owner?: IMarkdownRemarkConnectionInternalOwnerQueryString2 | null
};

export type IMarkdownRemarkConnectionInternalContentQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkConnectionInternalTypeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkConnectionInternalContentDigestQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkConnectionInternalOwnerQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkConnectionFrontmatterInputObject2 = {
  title?: IMarkdownRemarkConnectionFrontmatterTitleQueryString2 | null,
  path?: IMarkdownRemarkConnectionFrontmatterPathQueryString2 | null,
  date?: IMarkdownRemarkConnectionFrontmatterDateQueryString2 | null,
  draft?: IMarkdownRemarkConnectionFrontmatterDraftQueryBoolean2 | null,
  tags?: IMarkdownRemarkConnectionFrontmatterTagsQueryList2 | null,
  excerpt?: IMarkdownRemarkConnectionFrontmatterExcerptQueryString2 | null,
  _PARENT?: IMarkdownRemarkConnectionFrontmatterParentQueryString2 | null
};

export type IMarkdownRemarkConnectionFrontmatterTitleQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkConnectionFrontmatterPathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkConnectionFrontmatterDateQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkConnectionFrontmatterDraftQueryBoolean2 = {
  eq?: boolean | null,
  ne?: boolean | null,
  in?: Array<boolean | null> | null,
  nin?: Array<boolean | null> | null
};

export type IMarkdownRemarkConnectionFrontmatterTagsQueryList2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkConnectionFrontmatterExcerptQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkConnectionFrontmatterParentQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IExcerptQueryString4 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkConnectionRawMarkdownBodyQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkConnectionFileAbsolutePathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IHtmlQueryString4 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IHeadingsQueryList4 = {
  elemMatch?: IHeadingsListElemTypeName4 | null
};

export type IHeadingsListElemTypeName4 = {
  value?: IHeadingsListElemValueQueryString4 | null,
  depth?: IHeadingsListElemDepthQueryInt4 | null
};

export type IHeadingsListElemValueQueryString4 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IHeadingsListElemDepthQueryInt4 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type ITimeToReadQueryInt4 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type ITableOfContentsQueryString4 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IWordCountTypeName4 = {
  paragraphs?: IWordCountParagraphsQueryInt4 | null,
  sentences?: IWordCountSentencesQueryInt4 | null,
  words?: IWordCountWordsQueryInt4 | null
};

export type IWordCountParagraphsQueryInt4 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IWordCountSentencesQueryInt4 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IWordCountWordsQueryInt4 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

/**
 * A connection to a list of items.
 */
export type IMarkdownRemarkConnection = {
  /**
   * Information to aid in pagination.
   */
  pageInfo: IPageInfo,

  /**
   * A list of edges.
   */
  edges: Array<IMarkdownRemarkEdge | null> | null,
  totalCount: number | null,
  distinct: Array<string | null> | null,
  group: Array<IMarkdownRemarkGroupConnectionConnection | null> | null
};

export type IDistinctOnMarkdownRemarkConnectionArguments = {
  field?: MarkdownRemarkDistinctEnum | null
};

export type IGroupOnMarkdownRemarkConnectionArguments = {
  skip?: number | null,
  limit?: number | null,
  field?: MarkdownRemarkGroupEnum | null
};

/**
 * An edge in a connection.
 */
export type IMarkdownRemarkEdge = {
  /**
   * The item at the end of the edge
   */
  node: IMarkdownRemark | null,

  /**
   * The next edge in the connection
   */
  next: IMarkdownRemark | null,

  /**
   * The previous edge in the connection
   */
  previous: IMarkdownRemark | null
};

type MarkdownRemarkDistinctEnum =
  | "id"
  | "parent"
  | "internal___content"
  | "internal___type"
  | "internal___contentDigest"
  | "internal___owner"
  | "frontmatter___title"
  | "frontmatter___path"
  | "frontmatter___date"
  | "frontmatter___draft"
  | "frontmatter___tags"
  | "frontmatter___excerpt"
  | "frontmatter____PARENT"
  | "excerpt"
  | "rawMarkdownBody"
  | "fileAbsolutePath";

type MarkdownRemarkGroupEnum =
  | "id"
  | "parent"
  | "internal___content"
  | "internal___type"
  | "internal___contentDigest"
  | "internal___owner"
  | "frontmatter___title"
  | "frontmatter___path"
  | "frontmatter___date"
  | "frontmatter___draft"
  | "frontmatter___tags"
  | "frontmatter___excerpt"
  | "frontmatter____PARENT"
  | "excerpt"
  | "rawMarkdownBody"
  | "fileAbsolutePath";

/**
 * A connection to a list of items.
 */
export type IMarkdownRemarkGroupConnectionConnection = {
  /**
   * Information to aid in pagination.
   */
  pageInfo: IPageInfo,

  /**
   * A list of edges.
   */
  edges: Array<IMarkdownRemarkGroupConnectionEdge | null> | null,
  field: string | null,
  fieldValue: string | null,
  totalCount: number | null
};

/**
 * An edge in a connection.
 */
export type IMarkdownRemarkGroupConnectionEdge = {
  /**
   * The item at the end of the edge
   */
  node: IMarkdownRemark | null,

  /**
   * The next edge in the connection
   */
  next: IMarkdownRemark | null,

  /**
   * The previous edge in the connection
   */
  previous: IMarkdownRemark | null
};

export type ISitePageJsonNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageInternalComponentNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageComponentQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageComponentChunkNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorInputObject = {
  resolve?: ISitePagePluginCreatorResolveQueryString | null,
  id?: ISitePagePluginCreatorIdQueryString | null,
  name?: ISitePagePluginCreatorNameQueryString | null,
  version?: ISitePagePluginCreatorVersionQueryString | null,
  pluginOptions?: ISitePagePluginCreatorPluginOptionsInputObject | null,
  nodeAPIs?: ISitePagePluginCreatorNodeApIsQueryList | null,
  pluginFilepath?: ISitePagePluginCreatorPluginFilepathQueryString | null,
  packageJson?: ISitePagePluginCreatorPackageJsonInputObject | null,
  parent?: ISitePagePluginCreatorParentQueryString | null,
  internal?: ISitePagePluginCreatorInternalInputObject | null
};

export type ISitePagePluginCreatorResolveQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorIdQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorVersionQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorPluginOptionsInputObject = {
  name?: ISitePagePluginCreatorPluginOptionsNameQueryString | null,
  path?: ISitePagePluginCreatorPluginOptionsPathQueryString | null,
  pathCheck?: ISitePagePluginCreatorPluginOptionsPathCheckQueryBoolean | null
};

export type ISitePagePluginCreatorPluginOptionsNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorPluginOptionsPathQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorPluginOptionsPathCheckQueryBoolean = {
  eq?: boolean | null,
  ne?: boolean | null,
  in?: Array<boolean | null> | null,
  nin?: Array<boolean | null> | null
};

export type ISitePagePluginCreatorNodeApIsQueryList = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorPluginFilepathQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorPackageJsonInputObject = {
  name?: ISitePagePluginCreatorPackageJsonNameQueryString | null,
  description?: ISitePagePluginCreatorPackageJsonDescriptionQueryString | null,
  version?: ISitePagePluginCreatorPackageJsonVersionQueryString | null,
  main?: ISitePagePluginCreatorPackageJsonMainQueryString | null,
  license?: ISitePagePluginCreatorPackageJsonLicenseQueryString | null,
  dependencies?: ISitePagePluginCreatorPackageJsonDependenciesQueryList | null,
  devDependencies?: ISitePagePluginCreatorPackageJsonDevDependenciesQueryList | null,
  peerDependencies?: ISitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null,
  keywords?: ISitePagePluginCreatorPackageJsonKeywordsQueryList | null
};

export type ISitePagePluginCreatorPackageJsonNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorPackageJsonDescriptionQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorPackageJsonVersionQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorPackageJsonMainQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorPackageJsonLicenseQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorPackageJsonDependenciesQueryList = {
  elemMatch?: ISitePagePluginCreatorPackageJsonDependenciesInputObject | null
};

export type ISitePagePluginCreatorPackageJsonDependenciesInputObject = {
  name?: ISitePagePluginCreatorPackageJsonDependenciesNameQueryString | null,
  version?: ISitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null
};

export type ISitePagePluginCreatorPackageJsonDependenciesNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorPackageJsonDependenciesVersionQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorPackageJsonDevDependenciesQueryList = {
  elemMatch?: ISitePagePluginCreatorPackageJsonDevDependenciesInputObject | null
};

export type ISitePagePluginCreatorPackageJsonDevDependenciesInputObject = {
  name?: ISitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null,
  version?: ISitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null
};

export type ISitePagePluginCreatorPackageJsonDevDependenciesNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorPackageJsonPeerDependenciesQueryList = {
  elemMatch?: ISitePagePluginCreatorPackageJsonPeerDependenciesInputObject | null
};

export type ISitePagePluginCreatorPackageJsonPeerDependenciesInputObject = {
  name?: ISitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null,
  version?: ISitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null
};

export type ISitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorPackageJsonKeywordsQueryList = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorParentQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorInternalInputObject = {
  contentDigest?: ISitePagePluginCreatorInternalContentDigestQueryString | null,
  type?: ISitePagePluginCreatorInternalTypeQueryString | null,
  owner?: ISitePagePluginCreatorInternalOwnerQueryString | null
};

export type ISitePagePluginCreatorInternalContentDigestQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorInternalTypeQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorInternalOwnerQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePagePluginCreatorIdQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageComponentPathQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageIdQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageInternalInputObject2 = {
  type?: ISitePageInternalTypeQueryString2 | null,
  contentDigest?: ISitePageInternalContentDigestQueryString2 | null,
  description?: ISitePageInternalDescriptionQueryString | null,
  owner?: ISitePageInternalOwnerQueryString2 | null
};

export type ISitePageInternalTypeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageInternalContentDigestQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageInternalDescriptionQueryString = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePageInternalOwnerQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginResolveQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginIdQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginVersionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginPluginOptionsInputObject2 = {
  name?: ISitePluginPluginOptionsNameQueryString2 | null,
  path?: ISitePluginPluginOptionsPathQueryString2 | null,
  pathCheck?: ISitePluginPluginOptionsPathCheckQueryBoolean2 | null
};

export type ISitePluginPluginOptionsNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginPluginOptionsPathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginPluginOptionsPathCheckQueryBoolean2 = {
  eq?: boolean | null,
  ne?: boolean | null,
  in?: Array<boolean | null> | null,
  nin?: Array<boolean | null> | null
};

export type ISitePluginNodeApIsQueryList2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginPluginFilepathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginPackageJsonInputObject2 = {
  name?: ISitePluginPackageJsonNameQueryString2 | null,
  description?: ISitePluginPackageJsonDescriptionQueryString2 | null,
  version?: ISitePluginPackageJsonVersionQueryString2 | null,
  main?: ISitePluginPackageJsonMainQueryString2 | null,
  license?: ISitePluginPackageJsonLicenseQueryString2 | null,
  dependencies?: ISitePluginPackageJsonDependenciesQueryList2 | null,
  devDependencies?: ISitePluginPackageJsonDevDependenciesQueryList2 | null,
  peerDependencies?: ISitePluginPackageJsonPeerDependenciesQueryList2 | null,
  keywords?: ISitePluginPackageJsonKeywordsQueryList2 | null
};

export type ISitePluginPackageJsonNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginPackageJsonDescriptionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginPackageJsonVersionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginPackageJsonMainQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginPackageJsonLicenseQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginPackageJsonDependenciesQueryList2 = {
  elemMatch?: ISitePluginPackageJsonDependenciesInputObject2 | null
};

export type ISitePluginPackageJsonDependenciesInputObject2 = {
  name?: ISitePluginPackageJsonDependenciesNameQueryString2 | null,
  version?: ISitePluginPackageJsonDependenciesVersionQueryString2 | null
};

export type ISitePluginPackageJsonDependenciesNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginPackageJsonDependenciesVersionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginPackageJsonDevDependenciesQueryList2 = {
  elemMatch?: ISitePluginPackageJsonDevDependenciesInputObject2 | null
};

export type ISitePluginPackageJsonDevDependenciesInputObject2 = {
  name?: ISitePluginPackageJsonDevDependenciesNameQueryString2 | null,
  version?: ISitePluginPackageJsonDevDependenciesVersionQueryString2 | null
};

export type ISitePluginPackageJsonDevDependenciesNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginPackageJsonDevDependenciesVersionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginPackageJsonPeerDependenciesQueryList2 = {
  elemMatch?: ISitePluginPackageJsonPeerDependenciesInputObject2 | null
};

export type ISitePluginPackageJsonPeerDependenciesInputObject2 = {
  name?: ISitePluginPackageJsonPeerDependenciesNameQueryString2 | null,
  version?: ISitePluginPackageJsonPeerDependenciesVersionQueryString2 | null
};

export type ISitePluginPackageJsonPeerDependenciesNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginPackageJsonPeerDependenciesVersionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginPackageJsonKeywordsQueryList2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginInternalInputObject2 = {
  contentDigest?: ISitePluginInternalContentDigestQueryString2 | null,
  type?: ISitePluginInternalTypeQueryString2 | null,
  owner?: ISitePluginInternalOwnerQueryString2 | null
};

export type ISitePluginInternalContentDigestQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginInternalTypeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePluginInternalOwnerQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISiteSiteMetadataInputObject2 = {
  title?: ISiteSiteMetadataTitleQueryString2 | null,
  description?: ISiteSiteMetadataDescriptionQueryString2 | null
};

export type ISiteSiteMetadataTitleQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISiteSiteMetadataDescriptionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePortQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISiteHostQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePathPrefixQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISitePolyfillQueryBoolean2 = {
  eq?: boolean | null,
  ne?: boolean | null,
  in?: Array<boolean | null> | null,
  nin?: Array<boolean | null> | null
};

export type ISiteBuildTimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISiteIdQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISiteInternalInputObject2 = {
  contentDigest?: ISiteInternalContentDigestQueryString2 | null,
  type?: ISiteInternalTypeQueryString2 | null,
  owner?: ISiteInternalOwnerQueryString2 | null
};

export type ISiteInternalContentDigestQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISiteInternalTypeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type ISiteInternalOwnerQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

/**
 * Node of type Site
 */
export type ISite = {
  /**
   * The id of this node.
   */
  id: string,

  /**
   * The parent of this node.
   */
  parent: Node | null,

  /**
   * The children of this node.
   */
  children: Array<Node | null> | null,
  siteMetadata: ISiteMetadata2 | null,
  port: any | null,
  host: string | null,
  pathPrefix: string | null,
  polyfill: boolean | null,
  buildTime: any | null,
  internal: IInternal12 | null
};

export type IPortOnSiteArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

export type IBuildTimeOnSiteArguments = {
  /**
   * Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens
   */
  formatString?: string | null,

  /**
   * Returns a string generated with Moment.js' fromNow function
   */
  fromNow?: boolean | null,

  /**
   * Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds.
   */
  difference?: string | null,

  /**
   * Configures the locale Moment.js will use to format the date.
   */
  locale?: string | null
};

export type ISiteMetadata2 = {
  title: string | null,
  description: string | null
};

export type IInternal12 = {
  contentDigest: string | null,
  type: string | null,
  owner: string | null
};

export type IDirectoryIdQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryInternalInputObject2 = {
  contentDigest?: IDirectoryInternalContentDigestQueryString2 | null,
  type?: IDirectoryInternalTypeQueryString2 | null,
  description?: IDirectoryInternalDescriptionQueryString2 | null,
  owner?: IDirectoryInternalOwnerQueryString2 | null
};

export type IDirectoryInternalContentDigestQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryInternalTypeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryInternalDescriptionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryInternalOwnerQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectorySourceInstanceNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryAbsolutePathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryRelativePathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryExtensionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectorySizeQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryPrettySizeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryModifiedTimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryAccessTimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryChangeTimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryBirthTimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryRootQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryDirQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryBaseQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryExtQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryRelativeDirectoryQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryDevQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryModeQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryNlinkQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryUidQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryGidQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryRdevQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryBlksizeQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryInoQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryBlocksQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryAtimeMsQueryFloat2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryMtimeMsQueryFloat2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryCtimeMsQueryFloat2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryBirthtimeMsQueryFloat2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IDirectoryAtimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryMtimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryCtimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IDirectoryBirthtimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileIdQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileInternalInputObject2 = {
  contentDigest?: IFileInternalContentDigestQueryString2 | null,
  type?: IFileInternalTypeQueryString2 | null,
  mediaType?: IFileInternalMediaTypeQueryString2 | null,
  description?: IFileInternalDescriptionQueryString2 | null,
  owner?: IFileInternalOwnerQueryString2 | null
};

export type IFileInternalContentDigestQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileInternalTypeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileInternalMediaTypeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileInternalDescriptionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileInternalOwnerQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileSourceInstanceNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileAbsolutePathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileRelativePathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileExtensionQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileSizeQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFilePrettySizeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileModifiedTimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileAccessTimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileChangeTimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileBirthTimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileRootQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileDirQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileBaseQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileExtQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileNameQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileRelativeDirectoryQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileDevQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileModeQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileNlinkQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileUidQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileGidQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileRdevQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileBlksizeQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileInoQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileBlocksQueryInteger2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileAtimeMsQueryFloat2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileMtimeMsQueryFloat2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileCtimeMsQueryFloat2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileBirthtimeMsQueryFloat2 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IFileAtimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileMtimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileCtimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IFileBirthtimeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IPublicUrlQueryString3 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkIdQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkInternalInputObject2 = {
  content?: IMarkdownRemarkInternalContentQueryString2 | null,
  type?: IMarkdownRemarkInternalTypeQueryString2 | null,
  contentDigest?: IMarkdownRemarkInternalContentDigestQueryString2 | null,
  owner?: IMarkdownRemarkInternalOwnerQueryString2 | null
};

export type IMarkdownRemarkInternalContentQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkInternalTypeQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkInternalContentDigestQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkInternalOwnerQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkFrontmatterInputObject2 = {
  title?: IMarkdownRemarkFrontmatterTitleQueryString2 | null,
  path?: IMarkdownRemarkFrontmatterPathQueryString2 | null,
  date?: IMarkdownRemarkFrontmatterDateQueryString2 | null,
  draft?: IMarkdownRemarkFrontmatterDraftQueryBoolean2 | null,
  tags?: IMarkdownRemarkFrontmatterTagsQueryList2 | null,
  excerpt?: IMarkdownRemarkFrontmatterExcerptQueryString2 | null,
  _PARENT?: IMarkdownRemarkFrontmatterParentQueryString2 | null
};

export type IMarkdownRemarkFrontmatterTitleQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkFrontmatterPathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkFrontmatterDateQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkFrontmatterDraftQueryBoolean2 = {
  eq?: boolean | null,
  ne?: boolean | null,
  in?: Array<boolean | null> | null,
  nin?: Array<boolean | null> | null
};

export type IMarkdownRemarkFrontmatterTagsQueryList2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkFrontmatterExcerptQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkFrontmatterParentQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IExcerptQueryString3 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkRawMarkdownBodyQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IMarkdownRemarkFileAbsolutePathQueryString2 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IHtmlQueryString3 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IHeadingsQueryList3 = {
  elemMatch?: IHeadingsListElemTypeName3 | null
};

export type IHeadingsListElemTypeName3 = {
  value?: IHeadingsListElemValueQueryString3 | null,
  depth?: IHeadingsListElemDepthQueryInt3 | null
};

export type IHeadingsListElemValueQueryString3 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IHeadingsListElemDepthQueryInt3 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type ITimeToReadQueryInt3 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type ITableOfContentsQueryString3 = {
  eq?: string | null,
  ne?: string | null,
  regex?: string | null,
  glob?: string | null,
  in?: Array<string | null> | null,
  nin?: Array<string | null> | null
};

export type IWordCountTypeName3 = {
  paragraphs?: IWordCountParagraphsQueryInt3 | null,
  sentences?: IWordCountSentencesQueryInt3 | null,
  words?: IWordCountWordsQueryInt3 | null
};

export type IWordCountParagraphsQueryInt3 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IWordCountSentencesQueryInt3 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};

export type IWordCountWordsQueryInt3 = {
  eq?: number | null,
  ne?: number | null,
  gt?: number | null,
  gte?: number | null,
  lt?: number | null,
  lte?: number | null,
  in?: Array<number | null> | null,
  nin?: Array<number | null> | null
};
