import { type UmbUnlockUserRepository } from '../../repository/index.js';
import { UmbUserItemRepository } from '../../repository/item/user-item.repository.js';
import { UmbEntityActionBase } from '@umbraco-cms/backoffice/entity-action';
import { UmbControllerHostElement } from '@umbraco-cms/backoffice/controller-api';
import {
	type UmbModalManagerContext,
	UMB_MODAL_MANAGER_CONTEXT,
	UMB_CONFIRM_MODAL,
} from '@umbraco-cms/backoffice/modal';

export class UmbUnlockUserEntityAction extends UmbEntityActionBase<UmbUnlockUserRepository> {
	#modalManager?: UmbModalManagerContext;
	#itemRepository: UmbUserItemRepository;

	constructor(host: UmbControllerHostElement, repositoryAlias: string, unique: string) {
		super(host, repositoryAlias, unique);

		this.#itemRepository = new UmbUserItemRepository(this);

		this.consumeContext(UMB_MODAL_MANAGER_CONTEXT, (instance) => {
			this.#modalManager = instance;
		});
	}

	async execute() {
		if (!this.repository || !this.#modalManager) return;

		const { data } = await this.#itemRepository.requestItems([this.unique]);

		if (data) {
			const item = data[0];

			const modalContext = this.#modalManager.open(UMB_CONFIRM_MODAL, {
				data: {
					headline: `Unlock ${item.name}`,
					content: 'Are you sure you want to unlock this user?',
					confirmLabel: 'Unlock',
				},
			});

			await modalContext.onSubmit();
			await this.repository?.unlock([this.unique]);
		}
	}
}
