<?php
/**
 * CLASS_NAME_::render_callback()
 *
 * @package MEE\Modules\CLASS_NAME_
 * @since ??
 */

 namespace MEE\Modules\CLASS_NAME_\CLASS_NAME_Trait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// phpcs:disable ET.Sniffs.ValidVariableName.UsedPropertyNotSnakeCase -- WP use snakeCase in \WP_Block_Parser_Block

use ET\Builder\Packages\Module\Module;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Packages\Module\Options\Element\ElementComponents;

trait RenderCallbackTrait {
	use ModuleClassnamesTrait;
	use ModuleStylesTrait;
	use ModuleScriptDataTrait;
	/**
	 * Divi 4 module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 *
	 * @param array          $attrs Block attributes that were saved by VB.
	 * @param string         $content          Block content.
	 * @param \WP_Block      $block            Parsed block object that being rendered.
	 * @param ModuleElements $elements ModuleElements instance.
	 *
	 * @return string HTML rendered of D4 module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {
		
		$parent       = BlockParserStore::get_parent( $block->parsed_block['id'], $block->parsed_block['storeInstance'] );
		$parent_attrs = $parent->attrs ?? [];

		// Background component.
		$background_component = ElementComponents::component(
			[
				'attrs'         => $attrs['module']['decoration'] ?? [],
				'id'            => $block->parsed_block['id'],

				// FE only.
				'orderIndex'    => $block->parsed_block['orderIndex'],
				'storeInstance' => $block->parsed_block['storeInstance'],
			]
		);


		// // Image.
		// $image = $elements->render(
		// 	[
		// 		'attrName' => 'image',
		// 		'attributes' => [
		// 			'class' => 'img-fluid'
		// 		]
		// 	]
		// );

		// $image_wrapper = HTMLUtility::render(
		// 	[
		// 		'tag'               => 'div',
		// 		'childrenSanitizer' => 'et_core_esc_previously',
		// 		"attributes"        => [
		// 			'class' => "neip-ihb-img",
		// 		],
		// 		'children'          => [
		// 			$image,
		// 		],
		// 	]
		// );

		// // Heading.

		// $heading_tag = $attrs['headingText']['innerContent']['desktop']['value']['tag'] ?? 'h2';
		// $heading = $elements->render(
		// 	[
		// 		'tagName' => $heading_tag,
		// 		'attrName' => 'headingText',
		// 		'attrSubName' => "text",
		// 		'attributes' => [
        //             'class' => 'neip-ihb-heading',
        //         ],
		// 		'selector' => '{{selector}} .neip-ihb-heading',
        //         'attributesSanitizers' => ['esc_html__'],
		// 	]
		// );

		// // Content

		// $content = $elements->render([
		// 	'tagName' => 'div',
		// 	'attrName' => 'content',
		// 	'attributes' => [
        //         'class' => ['neip-ihb-desc'],
        //     ],
        //     'selector' => '{{selector}} .neip-ihb-desc',
        //     'attributesSanitizers' => ['et_core_esc_previously'],
		// ]);


		return Module::render(
			[
				// FE only.
				'orderIndex'          => $block->parsed_block['orderIndex'],
				'storeInstance'       => $block->parsed_block['storeInstance'],

				// VB equivalent.
				'id'                  => $block->parsed_block['id'],
				'name'                => $block->block_type->name,
				'moduleCategory'      => $block->block_type->category,
				'attrs'               => $attrs,
				'elements'            => $elements,
				'classnamesFunction'  => [ self::class, 'module_classnames' ],
				'stylesComponent'     => [ self::class, 'module_styles' ],
				'scriptDataComponent' => [ self::class, 'module_script_data' ],
				'parentAttrs'         => $parent_attrs,
				'parentId'            => $parent->id ?? '',
				'parentName'          => $parent->blockName ?? '',
				'children'            => $background_component . 'HERE WILL BE YOUR CONTENT'
			]
		);
	}
}
