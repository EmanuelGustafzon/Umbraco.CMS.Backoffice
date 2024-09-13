import { manifest as kindManifest } from './restore-from-recycle-bin.action.kind.js';
import type { ManifestTypes, UmbExtensionManifestKind } from '@umbraco-cms/backoffice/extension-registry';

export const manifests: Array<ManifestTypes | UmbExtensionManifestKind> = [
	kindManifest,
	{
		type: 'modal',
		alias: 'Umb.Modal.RecycleBin.Restore',
		name: 'Restore From Recycle Bin Modal',
		element: () => import('./modal/restore-from-recycle-bin-modal.element.js'),
	},
];
