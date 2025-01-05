<?php
/**
 * CLASS_NAME_::custom_css().
 *
 * @package MEE\Modules\CLASS_NAME_
 * @since ??
 */

namespace MEE\Modules\CLASS_NAME_\CLASS_NAME_Trait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

trait CustomCssTrait {

	/**
	 * Custom CSS fields
	 *
	 * This function is equivalent of JS const cssFields located in
	 * src/components/d4-module/custom-css.ts.
	 *
	 * A minor difference with the JS const cssFields, this function did not have `label` property on each array item.
	 *
	 * @since ??
	 */
	public static function custom_css() {
		return \WP_Block_Type_Registry::get_instance()->get_registered( 'dnxte/MODULE_TEXTDOMAIN_' )->customCssFields;
	}

}
