import {MetaCharListField} from '../meta-fields/char'
import {RegisterAdhocField} from '../meta-install/type-register'
const LIST = 'list';
const MODEL = 'runTask';


@RegisterAdhocField(MODEL, 'name', LIST)
export class MetaNameListField extends MetaCharListField {
    render() {
        return (
            <a href="/user">adhoc</a>
        )
    }
}

@RegisterAdhocField(MODEL, 'number', LIST)
export class MetaNumberListField extends MetaCharListField {
    render() {
        return (
            <div>ffdf</div>
        )
    }
}