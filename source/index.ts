import { DOMRenderer, VNode } from 'dom-renderer';
import { configure } from 'mobx';

import './VCardGenerator';

configure({ enforceActions: 'never' });

new DOMRenderer().render(new VNode({ tagName: 'vcard-generator' }));
