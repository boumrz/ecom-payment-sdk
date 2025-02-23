import Component from 'src/utils/component';

import { Paranja } from 'src/components/Paranja';
import { addClass } from 'src/utils/classList';
import style from './style.css';

export class PaymentPage extends Component {
    name = 'payment-page';

    render() {
        const { onClose, onForceClose } = this.props;
        const paranja = new Paranja();

        const cover = document.createElement('div');
        addClass(cover, style.cover);

        const cross = document.createElement('div');
        addClass(cross, style.cross);
        cross.addEventListener('click', onForceClose);
        cross.innerText = '\u2715';

        const wrap = document.createElement('div');
        addClass(wrap, style.wrap);

        const inner = document.createElement('div');
        addClass(inner, style.inner);

        const iframe = document.createElement('iframe');
        iframe.setAttribute('name', this.name);
        addClass(iframe, style.iframe);

        cover.appendChild(wrap);
        wrap.appendChild(cross);
        wrap.appendChild(inner);
        inner.appendChild(iframe);

        return paranja.execute({
            children: cover,
            onClick: onClose
        });
    }

    get url() {
        const { url } = this.props;
        const pos = url.indexOf('?');

        if (pos === -1) {
            return url;
        }

        return url.slice(0, pos);
    }
}
