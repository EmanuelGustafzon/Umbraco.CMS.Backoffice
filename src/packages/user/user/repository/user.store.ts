import { type UmbUserDetailModel } from '../index.js';
import { UmbArrayState } from '@umbraco-cms/backoffice/observable-api';
import { UmbContextToken } from '@umbraco-cms/backoffice/context-api';
import { UmbStoreBase } from '@umbraco-cms/backoffice/store';
import { type UmbControllerHostElement } from '@umbraco-cms/backoffice/controller-api';

export const UMB_USER_STORE_CONTEXT = new UmbContextToken<UmbUserStore>('UmbUserStore');

/**
 * @export
 * @class UmbUserStore
 * @extends {UmbStoreBase}
 * @description - Data Store for Users
 */
export class UmbUserStore extends UmbStoreBase {
	constructor(host: UmbControllerHostElement) {
		super(host, UMB_USER_STORE_CONTEXT.toString(), new UmbArrayState<UmbUserDetailModel>([], (x) => x.id));
	}

	/**
	 * Get a user by id
	 * @param {id} string id.
	 * @memberof UmbUserStore
	 */
	byId(id: UmbUserDetailModel['id']) {
		return this._data.asObservablePart((x) => x.find((y) => y.id === id));
	}
}
