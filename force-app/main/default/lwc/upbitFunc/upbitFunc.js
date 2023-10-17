import { LightningElement, wire } from 'lwc';
import init from '@salesforce/apex/UpbitFuncController.init';

export default class UpbitFunc extends LightningElement {
    marketData;

    @wire(init)
    wireInit({ error, data }) {
        if (data) {
            this.marketData = data;
        } else if (error) {
            console.error(error);
        }
    }
}