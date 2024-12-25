import React, {
  Fragment,
  ReactElement,
} from 'react';

import {
  ModuleScriptDataProps,
} from '@divi/module';
import { CLASS_NAME_Attrs } from './types';


/**
 * Divi 4 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<CLASS_NAME_Attrs>} props React component props.
 *
 * @returns {ReactElement}
 */
export const ModuleScriptData = ({
  elements,
}: ModuleScriptDataProps<CLASS_NAME_Attrs>): ReactElement => (
  <Fragment>
    {elements.scriptData({
      attrName: 'module',
    })}
  </Fragment>
);

