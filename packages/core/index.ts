import {makeInstaller} from '@xlz-ui/utils';
import "@xlz-ui/theme/index.css"
import components from './components';

const installer=makeInstaller(components);

export * from '@xlz-ui/components';

export default installer;