<?php
/**
 * CLASS_NAME_::module_styles().
 *
 * @package MEE\Modules\CLASS_NAME_
 * @since ??
 */

 namespace MEE\Modules\CLASS_NAME_\CLASS_NAME_Trait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\FrontEnd\Module\Style;
use ET\Builder\Packages\Module\Layout\Components\StyleCommon\CommonStyle;
use ET\Builder\Packages\Module\Options\Css\CssStyle;
use ET\Builder\Packages\Module\Options\Text\TextStyle;

trait ModuleStylesTrait {
	use CustomCssTrait, CommonTrait;

	/**
	 * D4 module's style components.
	 *
	 * This function is equivalent of JS function ModuleStyles located in
	 * src/components/d4-module/styles.tsx.
	 *
	 * @since ??
	 *
	 * @param array $args {
	 *     An array of arguments.
	 *
	 *      @type string $id                Module ID. In VB, the ID of module is UUIDV4. In FE, the ID is order index.
	 *      @type string $name              Module name.
	 *      @type string $attrs             Module attributes.
	 *      @type string $parentAttrs       Parent attrs.
	 *      @type string $orderClass        Selector class name.
	 *      @type string $parentOrderClass  Parent selector class name.
	 *      @type string $wrapperOrderClass Wrapper selector class name.
	 *      @type string $settings          Custom settings.
	 *      @type string $state             Attributes state.
	 *      @type string $mode              Style mode.
	 *      @type ModuleElements $elements         ModuleElements instance.
	 * }
	 */
	public static function module_styles( $args ) {
		$attrs                       = $args['attrs'] ?? [];
		$elements                    = $args['elements'];
		$settings                    = $args['settings'] ?? [];
		$default_printed_style_attrs = $args['defaultPrintedStyleAttrs'] ?? [];
		$order_class                 = $args['orderClass'] ?? '';
		$colorStyle = [];

		
		
		
		// $use_overlay_bg = $attrs['hoverGradient']['advanced']['colorUse']['desktop']['value'] ?? 'off';
		// if( 'on' === $use_overlay_bg ){
		// 	$color1 = $attrs['hoverGradient']['advanced']['singleColorOne'] ?? [];
		// 	$colorStyle[] = CommonStyle::style(
		// 			[
		// 				'selector' => "$order_class .dnext-neip-ihb .neip-ihb-info",
		// 				'property'=> 'background-color',
		// 				'attr'     => $color1,
		// 			]
		// 			);
		// }
		
		// $colorStyle[] = (new self)->applyGradientOld($attrs, 'hoverGradient', $order_class, "$order_class .dnext-neip-ihb .neip-ihb-info");

		Style::add(
			[
				'id'            => $args['id'],
				'name'          => $args['name'],
				'orderIndex'    => $args['orderIndex'],
				'storeInstance' => $args['storeInstance'],
				'styles'        => [
					$elements->style(
						[
							'attrName'   => 'module',
							'styleProps' => [
								'defaultPrintedStyleAttrs' => $default_printed_style_attrs['module']['decoration'] ?? [],
								'disabledOn'               => [
									'disabledModuleVisibility' => $settings['disabledModuleVisibility'] ?? null,
								],
							],
						]
					),
					CssStyle::style(
						[
							'selector'  => $args['orderClass'],
							'attr'      => $attrs['css'] ?? [],
							'cssFields' => self::custom_css(),
						]
					),
					// // Image.
					// $elements->style(
					// 	[
					// 		'attrName' => 'image',
					// 	]
					// ),
					// // Title.
					// $elements->style(
					// 	[
					// 		'attrName' => 'heading',
					// 	]
					// ),
					// // Content.
					// $elements->style(
					// 	[
					// 		'attrName' => 'content',
					// 	]
					// ),
					...$colorStyle
				]
			]
		);
	}

}
