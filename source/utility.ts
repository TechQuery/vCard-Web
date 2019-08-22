// @ts-ignore
import vCard from 'vcf';

export function makeVCard(fields: Iterable<{ name: string; value: string }>) {
    const card = new vCard();

    for (let { name, value } of fields) {
        value = value.trim();

        switch (name) {
            case 'fn':
                card.set('n', value.replace(/\s+/g, ';'));
                break;
            case 'photo':
            case 'logo':
                if (value) {
                    const type = value.split('.').slice(-1)[0];

                    value = `TYPE=${
                        type === 'jpg' ? 'JPEG' : type.toUpperCase()
                    };VALUE=URI:${value}`;
                }
        }
        card.set(name, value);
    }

    card.set('rev', new Date().toJSON());

    return card;
}
