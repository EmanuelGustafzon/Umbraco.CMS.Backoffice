import { manifests as advancedManifests } from './advanced/manifests.js';
import { manifests as sectionManifests } from './section/manifests.js';
import { manifests as structureManifests } from './structure/manifests.js';
import { manifests as welcomeDashboardManifests } from './welcome/manifests.js';
import type { ManifestTypes, UmbExtensionManifestKind } from '@umbraco-cms/backoffice/extension-registry';

export const manifests: Array<ManifestTypes | UmbExtensionManifestKind> = [
	...advancedManifests,
	...sectionManifests,
	...structureManifests,
	...welcomeDashboardManifests,
];
