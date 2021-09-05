import React from "react";
import { makeAutoObservable, toJS } from "mobx";



class storeCardHeader {
    count:number = 0;
    constructor() {
        makeAutoObservable(this);
    }
}

export default new storeCardHeader();