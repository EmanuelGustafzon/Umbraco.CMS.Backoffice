import { css, html, LitElement } from 'lit';
import { UUITextStyles } from '@umbraco-ui/uui-css/lib';
import { customElement, property } from 'lit/decorators.js';

import { UmbObserverMixin } from '@umbraco-cms/observable-api';
import { UmbContextConsumerMixin, UmbContextProviderMixin } from '@umbraco-cms/context-api';
import { UmbWorkspaceContext } from './workspace.context';

@customElement('umb-workspace')
export class UmbWorkspaceElement extends UmbContextProviderMixin(UmbContextConsumerMixin(UmbObserverMixin(LitElement))) {
	static styles = [
		UUITextStyles,
		css`
			:host {
				display: block;
				width: 100%;
				height: 100%;
			}
		`,
	];

	private _entityKey!: string;
	@property()
	public get entityKey(): string {
		return this._entityKey;
	}
	public set entityKey(value: string) {
		this._entityKey = value;
		this._workspaceContext.entityKey = value;
	}

	private _entityType = '';
	@property()
	public get entityType(): string {
		return this._entityType;
	}
	public set entityType(value: string) {
		this._entityType = value;
		this._workspaceContext.entityType = value;
	}

	private _workspaceContext:UmbWorkspaceContext = new UmbWorkspaceContext();

	constructor() {
		super();

		this.provideContext('umbWorkspaceContext', this._workspaceContext);
	}


	// TODO: implement fallback workspace
	// Note for extension-slot, we must enable giving the extension-slot a fallback element.
	

	render() {
		return html`<umb-extension-slot type="workspace" .filter=${(workspace: any) => (workspace).meta.entityType === this._entityType}></umb-extension-slot>`;
	}
}

export default UmbWorkspaceElement;

declare global {
	interface HTMLElementTagNameMap {
		'umb-workspace': UmbWorkspaceElement;
	}
}
