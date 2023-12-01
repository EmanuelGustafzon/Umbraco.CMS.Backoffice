import { UmbUserDetailModel } from '../../../types.js';
import { UMB_USER_WORKSPACE_CONTEXT } from '../../user-workspace.context.js';
import { UMB_APP_CONTEXT } from '@umbraco-cms/backoffice/app';
import { css, html, customElement, query, nothing, ifDefined, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/internal/lit-element';

@customElement('umb-user-workspace-avatar')
export class UmbUserAvatarElement extends UmbLitElement {
	@state()
	private _user?: UmbUserDetailModel;

	@state()
	private _userAvatarUrls: Array<{ url: string; scale: string }> = [];

	@query('#AvatarFileField')
	_avatarFileField?: HTMLInputElement;

	@query('uui-combobox')
	private _selectElement!: HTMLInputElement;

	#userWorkspaceContext?: typeof UMB_USER_WORKSPACE_CONTEXT.TYPE;

	constructor() {
		super();

		this.consumeContext(UMB_USER_WORKSPACE_CONTEXT, (instance) => {
			this.#userWorkspaceContext = instance;
			if (!this.#userWorkspaceContext) return;
			this.#observeUser();
		});
	}

	protected getFormElement() {
		return this._selectElement;
	}

	#observeUser = () => {
		this.observe(
			this.#userWorkspaceContext!.data,
			async (user) => {
				this._user = user;
				this.#setUserAvatarUrls(user);
			},
			'umbUserObserver',
		);
	};

	async #getAppContext() {
		// TODO: remove this when we get absolute urls from the server
		return this.consumeContext(UMB_APP_CONTEXT, (instance) => {}).asPromise();
	}

	#setUserAvatarUrls = async (user: UmbUserDetailModel | undefined) => {
		if (user?.avatarUrls?.length === 0) return;

		// TODO: remove this when we get absolute urls from the server
		const serverUrl = (await this.#getAppContext()).getServerUrl();
		if (!serverUrl) return;

		this._userAvatarUrls = [
			{
				scale: '1x',
				url: `${serverUrl}${user?.avatarUrls?.[3]}`,
			},
			{
				scale: '2x',
				url: `${serverUrl}${user?.avatarUrls?.[4]}`,
			},
		];
	};

	#uploadAvatar = async () => {
		try {
			const selectedFile = await this.#selectAvatar();
			this.#userWorkspaceContext?.uploadAvatar(selectedFile);
		} catch (error) {
			console.log(error);
		}
	};

	#selectAvatar = async () => {
		return new Promise((resolve, reject) => {
			if (!this._avatarFileField) {
				reject("Can't find avatar file field");
				return;
			}

			this._avatarFileField.addEventListener('change', (event) => {
				const file = event.target.files?.[0];
				if (!file) {
					reject("Can't find avatar file");
					return;
				}

				resolve(file);
			});

			this._avatarFileField.click();
		});
	};

	#deleteAvatar = async () => {
		if (!this.#userWorkspaceContext) return;
		const { error } = await this.#userWorkspaceContext.deleteAvatar();

		if (!error) {
			this._userAvatarUrls = [];
		}
	};

	#getAvatarSrcset() {
		let string = '';

		this._userAvatarUrls?.forEach((url) => {
			string += `${url.url} ${url.scale},`;
		});
		return string;
	}

	#hasAvatar() {
		return this._userAvatarUrls.length > 0;
	}

	render() {
		return html`
			<uui-box>
				<form id="AvatarUploadForm" novalidate>
					<uui-avatar
						id="Avatar"
						.name=${this._user?.name || ''}
						img-src=${ifDefined(this.#hasAvatar() ? this._userAvatarUrls[0].url : undefined)}
						img-srcset=${ifDefined(this.#hasAvatar() ? this.#getAvatarSrcset() : undefined)}></uui-avatar>
					<input id="AvatarFileField" type="file" name="avatarFile" required hidden />
					<uui-button label="${this.localize.term('user_changePhoto')}" @click=${this.#uploadAvatar}></uui-button>
					${this.#hasAvatar()
						? html`
								<uui-button
									type="button"
									label=${this.localize.term('user_removePhoto')}
									@click=${this.#deleteAvatar}></uui-button>
						  `
						: nothing}
				</form>
			</uui-box>
		`;
	}

	static styles = [
		css`
			:host {
				display: block;
				margin-bottom: var(--uui-size-space-4);
			}

			#Avatar {
				font-size: 75px;
				place-self: center;
			}

			form {
				text-align: center;
				display: flex;
				flex-direction: column;
				gap: var(--uui-size-space-2);
			}
		`,
	];
}

export default UmbUserAvatarElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-user-workspace-avatar': UmbUserAvatarElement;
	}
}
