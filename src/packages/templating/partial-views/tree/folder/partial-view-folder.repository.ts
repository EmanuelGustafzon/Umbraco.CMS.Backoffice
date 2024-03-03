import { UMB_PARTIAL_VIEW_FOLDER_ENTITY_TYPE } from '../../entity.js';
import type { UmbPartialViewTreeItemModel } from '../types.js';
import { UMB_PARTIAL_VIEW_TREE_STORE_CONTEXT } from '../partial-view-tree.store.js';
import { UmbPartialViewFolderServerDataSource } from './partial-view-folder.server.data-source.js';
import type { UmbFolderModel } from '@umbraco-cms/backoffice/tree';
import { UmbFolderRepositoryBase } from '@umbraco-cms/backoffice/tree';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';

export class UmbPartialViewFolderRepository extends UmbFolderRepositoryBase<UmbPartialViewTreeItemModel> {
	constructor(host: UmbControllerHost) {
		super(
			host,
			UmbPartialViewFolderServerDataSource,
			UMB_PARTIAL_VIEW_TREE_STORE_CONTEXT,
			folderToPartialViewTreeItemFolder,
		);
	}
}

const folderToPartialViewTreeItemFolder = (
	folder: UmbFolderModel,
	parentUnique: string | null,
): UmbPartialViewTreeItemModel => {
	return {
		unique: folder.unique,
		parentUnique,
		name: folder.name,
		entityType: UMB_PARTIAL_VIEW_FOLDER_ENTITY_TYPE,
		isFolder: true,
		hasChildren: false,
	};
};
