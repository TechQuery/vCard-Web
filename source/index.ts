import 'regenerator-runtime/runtime';
// @ts-ignore
import { ViewList } from 'dom-renderer';
// @ts-ignore
import vCard from 'vcf';
import { toCanvas } from 'qrcode';

import meta from './meta.json';

const form = document.querySelector('form'),
    canvas = document.querySelector('main > canvas');

const field_view = new ViewList(form);

field_view.render(meta);

if (form)
    form.onchange = event => {
        event.preventDefault();

        const card = new vCard();
        // @ts-ignore
        for (let { name, value } of form.elements) card.set(name, value);

        toCanvas(canvas, card.toString('3.0'));
    };
