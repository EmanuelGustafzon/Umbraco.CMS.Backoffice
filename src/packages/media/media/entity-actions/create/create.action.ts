import type { UmbMediaDetailRepository } from '../../repository/index.js';
import { UmbMediaItemRepository } from '../../repository/index.js';
import type { UmbMediaCreateOptionsModalData } from './media-create-options-modal.token.js';
import { UMB_MEDIA_CREATE_OPTIONS_MODAL } from './media-create-options-modal.token.js';
import { UmbEntityActionBase } from '@umbraco-cms/backoffice/entity-action';
import type { UmbControllerHostElement } from '@umbraco-cms/backoffice/controller-api';
import type { UmbModalManagerContext } from '@umbraco-cms/backoffice/modal';
import { UMB_MODAL_MANAGER_CONTEXT } from '@umbraco-cms/backoffice/modal';

export class UmbCreateMediaEntityAction extends UmbEntityActionBase<UmbMediaDetailRepository> {
	#modalContext?: UmbModalManagerContext;
	#itemRepository;

	constructor(host: UmbControllerHostElement, repositoryAlias: string, unique: string, entityType: string) {
		super(host, repositoryAlias, unique, entityType);

		this.#itemRepository = new UmbMediaItemRepository(host);

		this.consumeContext(UMB_MODAL_MANAGER_CONTEXT, (instance) => {
			this.#modalContext = instance;
		});
	}

	async execute() {
		if (!this.repository) return;

		// default to root
		let mediaItem = null;

		if (this.unique) {
			// get media item to get the doc type id
			const { data, error } = await this.#itemRepository.requestItems([this.unique]);
			if (error || !data) throw new Error(`Failed to load media item`);
			mediaItem = data[0];
		}

		if (!mediaItem) throw new Error(`Failed to load media item`);

		this._openModal({
			parent: { unique: this.unique, entityType: this.entityType },
			mediaType: { unique: mediaItem.mediaType.unique },
		});
	}

	private async _openModal(modalData: UmbMediaCreateOptionsModalData) {
		if (!this.#modalContext) return;
		this.#modalContext.open(UMB_MEDIA_CREATE_OPTIONS_MODAL, {
			data: modalData,
		});
	}
}
