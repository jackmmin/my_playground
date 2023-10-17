import { LightningElement, wire } from 'lwc';
import getUpbitMarketData from '@salesforce/apex/UpbitFuncController.init';

export default class UpbitFunc extends LightningElement {
    marketData;

    @wire(getUpbitMarketData)
    wiredMarketData({ error, data }) {
        if (data) {
            this.marketData = data;
        } else if (error) {
            console.error(error);
        }
    }
}