import vCard from 'vcf';

export interface VCardData {
    fn: string;
    email: string;
    tel?: string;
    url?: string;
    photo?: string;
    title: string;
    org?: string;
}

export function makeVCard(data: VCardData) {
    const card = new vCard();

    for (let [name, value] of Object.entries(data) as [string, string][]) {
        value = value.trim();

        switch (name) {
            case 'fn':
                card.set('n', value.replace(/\s+/g, ';'));
                break;
            case 'photo':
            case 'logo':
                if (value) {
                    const type = value.split('.').at(-1);

                    value = `TYPE=${
                        type === 'jpg' ? 'JPEG' : type?.toUpperCase()
                    };VALUE=URI:${value}`;
                }
        }
        card.set(name, value);
    }

    card.set('rev', new Date().toJSON());

    return card;
}
