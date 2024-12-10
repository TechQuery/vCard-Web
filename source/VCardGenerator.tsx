import 'mdui/components/card';
import 'mdui/components/text-field';
import { computed, observable } from 'mobx';
import { persist, restore } from 'mobx-restful';
import { toCanvas } from 'qrcode';
import { component, observer, reaction } from 'web-cell';

import { makeVCard, VCardData } from './utility';

@component({ tagName: 'vcard-generator' })
@observer
export class VCardGenerator extends HTMLElement {
    @persist()
    @observable
    accessor rawData = {} as VCardData;

    restored = restore(this, 'vCard');

    @computed
    get vCardData() {
        return makeVCard(this.rawData).toString('3.0');
    }

    handleChange = (event: Event) => {
        event.stopPropagation();

        var { name, value } = event.target as HTMLInputElement;

        this.rawData = { ...this.rawData, [name]: value.trim() };
    };

    @reaction(that => that!.vCardData)
    renderCanvas(vCardData: string) {
        const canvas = this.querySelector('canvas');

        if (canvas) toCanvas(canvas, vCardData);
    }

    renderForm = ({ fn, email, tel, url, photo, title, org }: VCardData) => (
        <form
            className="d-flex flex-column gap-3 flex-fill"
            onChange={this.handleChange}
        >
            <mdui-text-field name="fn" label="Full name" required value={fn} />
            <mdui-text-field
                type="email"
                name="email"
                label="E-mail"
                required
                value={email}
            />
            <mdui-text-field
                type="tel"
                name="tel"
                label="Telephone"
                value={tel}
            />
            <mdui-text-field
                type="url"
                name="url"
                label="Web-site"
                value={url}
            />
            <mdui-text-field
                type="url"
                name="photo"
                label="Photo"
                value={photo}
            />
            <mdui-text-field
                name="title"
                label="Title"
                required
                value={title}
            />
            <mdui-text-field name="org" label="Organization" value={org} />
        </form>
    );

    render() {
        const { rawData } = this;

        return (
            <mdui-card className="d-flex flex-wrap flex-sm-nowrap">
                {this.renderForm(rawData)}

                <canvas />
            </mdui-card>
        );
    }
}
