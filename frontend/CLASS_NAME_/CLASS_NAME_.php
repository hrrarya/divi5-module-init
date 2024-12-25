<?php
/**
 * Module: MODULE_NAME_  Module class.
 *
 * @package MEE\Modules\CLASS_NAME_
 * @since ??
 */

namespace MEE\Modules\CLASS_NAME_;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;
use MEE\Modules\CLASS_NAME_\CLASS_NAME_Trait;

/**
 * `CLASS_NAME_` is consisted of functions used for Divi 4 Module such as Front-End rendering, REST API Endpoints etc.
 *
 * This is a dependency class and can be used as a dependency for `DependencyTree`.
 *
 * @since ??
 */
class CLASS_NAME_ implements DependencyInterface {
	use CLASS_NAME_Trait\RenderCallbackTrait;

	/**
	 * Loads `CLASS_NAME_` and registers Front-End render callback and REST API Endpoints.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public function load() {
		$module_json_folder_path = DIVI_ESSENTIAL_MODULES_JSON_PATH . 'CLASS_NAME_/';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ CLASS_NAME_::class, 'render_callback' ],
					]
				);
			}
		);
	}
}
