import 'regenerator-runtime/runtime';
// @ts-ignore
import { ViewList } from 'dom-renderer';
// @ts-ignore
import vCard from 'vcf';
import { toCanvas } from 'qrcode';

import { makeVCard } from './utility';

import meta from './meta.yml';

const form = document.querySelector('form'),
    canvas = document.querySelector('main > canvas');

const field_view = new ViewList(form),
    data = localStorage.getItem('vCard');

field_view.render(meta).then(() => {
    if (!form) return;

    form.onchange = event => {
        event.preventDefault();
        // @ts-ignore
        const card = makeVCard(form.elements);

        localStorage.setItem('vCard', JSON.stringify(card.toJSON()));

        toCanvas(canvas, card.toString('3.0'));
    };

    if (!data) return;

    const card = JSON.parse(data);

    for (let item of card[1]) {
        const field = form.elements[item[0]] as HTMLInputElement;

        if (!field) continue;

        if (['photo', 'logo'].includes(item[0]))
            item[3] = item[3].split('URI:')[1];

        field.value = item[3];
    }

    toCanvas(canvas, vCard.fromJSON(card).toString('3.0'));
});
