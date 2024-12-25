import { ModuleClassnamesParams, textOptionsClassnames } from '@divi/module';
import { CLASS_NAME_Attrs } from './types';


/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<CLASS_NAME_Attrs>} param0 Function parameters.
 */
export const moduleClassnames = ({
  classnamesInstance,
  attrs,
}: ModuleClassnamesParams<CLASS_NAME_Attrs>): void => {
  // Text Options.
  classnamesInstance.add(textOptionsClassnames(attrs?.module?.advanced?.text));
};
