<?php
namespace MEE\Modules\CLASS_NAME_\CLASS_NAME_Trait;

use ET\Builder\Packages\Module\Layout\Components\StyleCommon\CommonStyle;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

trait CommonTrait {
    public function applyGradientOld($attrs, $slug, $order_class, $selector ) {
        $gradientUse = $attrs[$slug]['advanced']['gradientUse']['desktop']['value'];
		$gradientType = $attrs[$slug]['advanced']['gradientType']['desktop']['value'] ?? "";
		$gradientLinerDic = $attrs[$slug]['advanced']['gradientLinerDirection']['desktop']['value'] ?? "";
		$gradientRadialDic = $attrs[$slug]['advanced']['gradientRadialDirection']['desktop']['value'] ?? "";
		$gradientApply = "linear-gradient" === $gradientType ? $gradientLinerDic : $gradientRadialDic;

		// Color
		$colorOne = $attrs[$slug]['advanced']['colorOne']['desktop']['value'] ?? "";
		$colorTwo = $attrs[$slug]['advanced']['colorTwo']['desktop']['value'] ?? "";

		// Color Position
		$startPos = $attrs[$slug]['advanced']['startPos']['desktop']['value'] ?? "";
		$endPos = $attrs[$slug]['advanced']['endPos']['desktop']['value'] ?? "";

        if ('on' === $gradientUse ) {
			return CommonStyle::style(
					[
						'selector' => $selector,
						'property' => "background: $gradientType($gradientApply, $colorOne $startPos, $colorTwo $endPos);",
						'attr'     => $attrs[$slug]['advanced']['gradientType'] ?? [],
					]
                    );
		}
        return null;
    }
}