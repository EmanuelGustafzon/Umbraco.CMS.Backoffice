import { UmbEntityData } from './entity.data';
import { createDocumentTypeTreeItem } from './utils';
import {
	DocumentTypeTreeItemModel,
	DocumentTypeModel,
	ContentTypeCompositionTypeModel,
} from '@umbraco-cms/backend-api';

export const data: Array<DocumentTypeModel> = [
	{
		allowedTemplateKeys: [],
		defaultTemplateKey: null,
		key: 'all-property-editors-document-type-key',
		alias: 'blogPost',
		name: 'Blog Post',
		description: null,
		icon: 'umb:item-arrangement',
		allowedAsRoot: true,
		variesByCulture: true,
		variesBySegment: false,
		isElement: false,
		properties: [
			{
				key: '2',
				containerKey: 'all-properties-group-key',
				alias: 'colorPicker',
				name: 'Color Picker',
				description: '',
				dataTypeKey: 'dt-colorPicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '3',
				containerKey: 'all-properties-group-key',
				alias: 'contentPicker',
				name: 'Content Picker',
				description: '',
				dataTypeKey: 'dt-contentPicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '4',
				containerKey: 'all-properties-group-key',
				alias: 'eyeDropper',
				name: 'Eye Dropper',
				description: '',
				dataTypeKey: 'dt-eyeDropper',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '5',
				containerKey: 'all-properties-group-key',
				alias: 'multiUrlPicker',
				name: 'Multi URL Picker',
				description: '',
				dataTypeKey: 'dt-multiUrlPicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '6',
				containerKey: 'all-properties-group-key',
				alias: 'multiNodeTreePicker',
				name: 'Multi Node Tree Picker',
				description: '',
				dataTypeKey: 'dt-multiNodeTreePicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '7',
				containerKey: 'all-properties-group-key',
				alias: 'datePicker',
				name: 'Date Picker',
				description: '',
				dataTypeKey: 'dt-datePicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '8',
				containerKey: 'all-properties-group-key',
				alias: 'email',
				name: 'Email',
				description: '',
				dataTypeKey: 'dt-email',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '9',
				containerKey: 'all-properties-group-key',
				alias: 'textBox',
				name: 'Text Box',
				description: '',
				dataTypeKey: 'dt-textBox',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '19',
				containerKey: 'all-properties-group-key',
				alias: 'dropdown',
				name: 'Dropdown',
				description: '',
				dataTypeKey: 'dt-dropdown',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '11',
				containerKey: 'all-properties-group-key',
				alias: 'textArea',
				name: 'Text Area',
				description: '',
				dataTypeKey: 'dt-textArea',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '12',
				containerKey: 'all-properties-group-key',
				alias: 'slider',
				name: 'Slider',
				description: '',
				dataTypeKey: 'dt-slider',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '13',
				containerKey: 'all-properties-group-key',
				alias: 'toggle',
				name: 'Toggle',
				description: '',
				dataTypeKey: 'dt-toggle',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '14',
				containerKey: 'all-properties-group-key',
				alias: 'tags',
				name: 'Tags',
				description: '',
				dataTypeKey: 'dt-tags',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '15',
				containerKey: 'all-properties-group-key',
				alias: 'markdownEditor',
				name: 'MarkdownEditor',
				description: '',
				dataTypeKey: 'dt-markdownEditor',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '16',
				containerKey: 'all-properties-group-key',
				alias: 'radioButtonList',
				name: 'Radio Button List',
				description: '',
				dataTypeKey: 'dt-radioButtonList',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '17',
				containerKey: 'all-properties-group-key',
				alias: 'checkboxList',
				name: 'Checkbox List',
				description: '',
				dataTypeKey: 'dt-checkboxList',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '18',
				containerKey: 'all-properties-group-key',
				alias: 'blockList',
				name: 'Block List',
				description: '',
				dataTypeKey: 'dt-blockList',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '19',
				containerKey: 'all-properties-group-key',
				alias: 'mediaPicker',
				name: 'Media Picker',
				description: '',
				dataTypeKey: 'dt-mediaPicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '20',
				containerKey: 'all-properties-group-key',
				alias: 'imageCropper',
				name: 'Image Cropper',
				description: '',
				dataTypeKey: 'dt-imageCropper',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '21',
				containerKey: 'all-properties-group-key',
				alias: 'uploadField',
				name: 'Upload Field',
				description: '',
				dataTypeKey: 'dt-uploadField',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '22',
				containerKey: 'all-properties-group-key',
				alias: 'blockGrid',
				name: 'Block Grid',
				description: '',
				dataTypeKey: 'dt-blockGrid',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '23',
				containerKey: 'all-properties-group-key',
				alias: 'blockGrid',
				name: 'Icon Picker',
				description: '',
				dataTypeKey: 'dt-iconPicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '24',
				containerKey: 'all-properties-group-key',
				alias: 'numberRange',
				name: 'Number Range',
				description: '',
				dataTypeKey: 'dt-numberRange',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '25',
				containerKey: 'all-properties-group-key',
				alias: 'orderDirection',
				name: 'Order Direction',
				description: '',
				dataTypeKey: 'dt-orderDirection',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '26',
				containerKey: 'all-properties-group-key',
				alias: 'overlaySize',
				name: 'Overlay Size',
				description: '',
				dataTypeKey: 'dt-overlaySize',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '27',
				containerKey: 'all-properties-group-key',
				alias: 'label',
				name: 'Label',
				description: '',
				dataTypeKey: 'dt-label',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '28',
				containerKey: 'all-properties-group-key',
				alias: 'integer',
				name: 'Integer',
				description: '',
				dataTypeKey: 'dt-integer',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '29',
				containerKey: 'all-properties-group-key',
				alias: 'decimal',
				name: 'Decimal',
				description: '',
				dataTypeKey: 'dt-decimal',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '30',
				containerKey: 'all-properties-group-key',
				alias: 'memberPicker',
				name: 'Member Picker',
				description: '',
				dataTypeKey: 'dt-memberPicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '31',
				containerKey: 'all-properties-group-key',
				alias: 'memberGroupPicker',
				name: 'Member Group Picker',
				description: '',
				dataTypeKey: 'dt-memberGroupPicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '32',
				containerKey: 'all-properties-group-key',
				alias: 'userPicker',
				name: 'User Picker',
				description: '',
				dataTypeKey: 'dt-userPicker',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				key: 'all-properties-group-key',
				parentKey: null,
				name: 'Content',
				type: 'Group',
				sortOrder: 0,
			},
		],
		allowedContentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},

	{
		allowedTemplateKeys: [],
		defaultTemplateKey: null,
		key: '29643452-cff9-47f2-98cd-7de4b6807681',
		alias: 'blogPost',
		name: 'Blog Post',
		description: null,
		icon: 'umb:item-arrangement',
		allowedAsRoot: true,
		variesByCulture: true,
		variesBySegment: false,
		isElement: false,
		properties: [
			{
				key: '5b4ca208-134e-4865-b423-06e5e97adf3c',
				containerKey: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				alias: 'blogPostText',
				name: 'Blog Post Text',
				description: null,
				dataTypeKey: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: 'ef7096b6-7c9e-49ba-8d49-395111e65ea2',
				containerKey: '227d6ed2-e118-4494-b8f2-deb69854a56a',
				alias: 'blogTextStringUnderMasterTab',
				name: 'Blog text string under master tab',
				description: null,
				dataTypeKey: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				variesByCulture: true,
				variesBySegment: false,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: 'e010c429-b298-499a-9bfe-79687af8972a',
				containerKey: '22177c49-ecba-4f2e-b7fa-3f2c04d02cfb',
				alias: 'blogTextStringUnderGroupUnderMasterTab',
				name: 'Blog text string under group under master tab',
				description: null,
				dataTypeKey: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				variesByCulture: true,
				variesBySegment: false,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
			{
				key: '1a22749a-c7d2-44bb-b36b-c977c2ced6ef',
				containerKey: '2c943997-b685-432d-a6c5-601d8e7a298a',
				alias: 'localBlogTabString',
				name: 'Local Blog Tab String',
				description: null,
				dataTypeKey: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: '^[0-9]*$',
					regExMessage: null,
				},
				appearance: {
					labelOnTop: true,
				},
			},
			{
				key: '22',
				containerKey: '2c943997-b685-432d-a6c5-601d8e7a298a',
				alias: 'blockGrid',
				name: 'Block Grid',
				description: '',
				dataTypeKey: 'dt-blockGrid',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: true,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				key: 'c3cd2f12-b7c4-4206-8d8b-27c061589f75',
				parentKey: null,
				name: 'Content-group',
				type: 'Group',
				sortOrder: 0,
			},
			{
				key: '227d6ed2-e118-4494-b8f2-deb69854a56a',
				parentKey: null,
				name: 'Master Tab',
				type: 'Tab',
				sortOrder: 0,
			},
			{
				key: '22177c49-ecba-4f2e-b7fa-3f2c04d02cfb',
				parentKey: '227d6ed2-e118-4494-b8f2-deb69854a56a',
				name: 'Blog Group under master tab',
				type: 'Group',
				sortOrder: 0,
			},
			{
				key: '2c943997-b685-432d-a6c5-601d8e7a298a',
				parentKey: null,
				name: 'Local blog tab',
				type: 'Tab',
				sortOrder: 1,
			},
		],
		allowedContentTypes: [
			{
				key: '29643452-cff9-47f2-98cd-7de4b6807681',
				sortOrder: 0,
			},
		],
		compositions: [
			{
				key: '5035d7d9-0a63-415c-9e75-ee2cf931db92',
				compositionType: ContentTypeCompositionTypeModel.INHERITANCE,
			},
			{
				key: '8f68ba66-6fb2-4778-83b8-6ab4ca3a7c5d',
				compositionType: ContentTypeCompositionTypeModel.COMPOSITION,
			},
		],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
	{
		allowedTemplateKeys: ['916cfecc-3295-490c-a16d-c41fa9f72980'],
		defaultTemplateKey: '916cfecc-3295-490c-a16d-c41fa9f72980',
		key: '5035d7d9-0a63-415c-9e75-ee2cf931db92',
		alias: 'masterPage',
		name: 'Master Page',
		description: null,
		icon: 'umb:document',
		allowedAsRoot: false,
		variesByCulture: false,
		variesBySegment: false,
		isElement: false,
		properties: [
			{
				key: '5e5f7456-c751-4846-9f2b-47965cc96ec6',
				containerKey: '6f281e5a-0242-4649-bd9e-d6bf87f92b41',
				alias: 'masterText',
				name: 'Master text',
				description: null,
				dataTypeKey: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				key: '6f281e5a-0242-4649-bd9e-d6bf87f92b41',
				parentKey: null,
				name: 'Master Tab',
				type: 'Tab',
				sortOrder: 0,
			},
		],
		allowedContentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
	{
		allowedTemplateKeys: [],
		defaultTemplateKey: null,
		key: '8f68ba66-6fb2-4778-83b8-6ab4ca3a7c5d',
		alias: 'baseElementType',
		name: 'Base Element Type',
		description: null,
		icon: 'umb:science',
		allowedAsRoot: false,
		variesByCulture: false,
		variesBySegment: false,
		isElement: true,
		properties: [
			{
				key: 'b92de6ac-1a22-4a45-a481-b6cae1cccbbf',
				containerKey: '1e845ca8-1e3e-4b03-be1d-0b4149ce2129',
				alias: 'pageTitle',
				name: 'Page title',
				description: null,
				dataTypeKey: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				key: '1e845ca8-1e3e-4b03-be1d-0b4149ce2129',
				parentKey: null,
				name: 'Content-group',
				type: 'Group',
				sortOrder: 0,
			},
		],
		allowedContentTypes: [],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
	{
		allowedTemplateKeys: [],
		defaultTemplateKey: null,
		key: 'simple-document-type-key',
		alias: 'simpleDocumentType',
		name: 'Simple Document Type',
		description: null,
		icon: 'umb:document',
		allowedAsRoot: true,
		variesByCulture: false,
		variesBySegment: false,
		isElement: false,
		properties: [
			{
				key: '1680d4d2-cda8-4ac2-affd-a69fc10382b1',
				containerKey: '341b8521-fd43-4333-ae7a-a10cbbc6f4b0',
				alias: 'prop1',
				name: 'Prop 1',
				description: null,
				dataTypeKey: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
				variesByCulture: false,
				variesBySegment: false,
				validation: {
					mandatory: false,
					mandatoryMessage: null,
					regEx: null,
					regExMessage: null,
				},
				appearance: {
					labelOnTop: false,
				},
			},
		],
		containers: [
			{
				key: '341b8521-fd43-4333-ae7a-a10cbbc6f4b0',
				parentKey: null,
				name: 'Content',
				type: 'Group',
				sortOrder: 0,
			},
		],
		allowedContentTypes: [{ key: 'simple-document-type-key', sortOrder: 0 }],
		compositions: [],
		cleanup: {
			preventCleanup: false,
			keepAllVersionsNewerThanDays: null,
			keepLatestVersionPerDayForDays: null,
		},
	},
];

export const treeData: Array<DocumentTypeTreeItemModel> = [
	{
		$type: 'DocumentTypeTreeItemViewModel',
		name: 'All property editors document type',
		type: 'document-type',
		hasChildren: false,
		key: 'all-property-editors-document-type-key',
		isContainer: false,
		parentKey: null,
		icon: '',
	},
	{
		$type: 'DocumentTypeTreeItemViewModel',
		name: 'Document Type 1',
		type: 'document-type',
		hasChildren: false,
		key: 'd81c7957-153c-4b5a-aa6f-b434a4964624',
		isContainer: false,
		parentKey: null,
		icon: '',
	},
	{
		$type: 'DocumentTypeTreeItemViewModel',
		name: 'Document Type 2',
		type: 'document-type',
		hasChildren: false,
		key: 'a99e4018-3ffc-486b-aa76-eecea9593d17',
		isContainer: false,
		parentKey: null,
		icon: '',
	},
	{
		$type: 'DocumentTypeTreeItemViewModel',
		name: 'Simple Document Type',
		type: 'document-type',
		hasChildren: false,
		key: 'simple-document-type-key',
		isContainer: false,
		parentKey: null,
		icon: 'umb:document',
	},
];

// Temp mocked database
// TODO: all properties are optional in the server schema. I don't think this is correct.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
class UmbDocumentTypeData extends UmbEntityData<DocumentTypeModel> {
	private treeData = treeData;

	constructor() {
		super(data);
	}

	getTreeRoot(): Array<DocumentTypeTreeItemModel> {
		const rootItems = this.treeData.filter((item) => item.parentKey === null);
		return rootItems.map((item) => createDocumentTypeTreeItem(item));
	}

	getTreeItemChildren(key: string): Array<DocumentTypeTreeItemModel> {
		const childItems = this.treeData.filter((item) => item.parentKey === key);
		return childItems.map((item) => createDocumentTypeTreeItem(item));
	}

	getTreeItem(keys: Array<string>): Array<DocumentTypeTreeItemModel> {
		const items = this.treeData.filter((item) => keys.includes(item.key ?? ''));
		return items.map((item) => createDocumentTypeTreeItem(item));
	}

	getAllowedTypesOf(key: string): Array<DocumentTypeTreeItemModel> {
		const documentType = this.getByKey(key);
		const allowedTypeKeys = documentType?.allowedContentTypes?.map((documentType) => documentType.key) ?? [];
		const items = this.treeData.filter((item) => allowedTypeKeys.includes(item.key ?? ''));
		return items.map((item) => createDocumentTypeTreeItem(item));
	}
}

export const umbDocumentTypeData = new UmbDocumentTypeData();
