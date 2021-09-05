import React from "react"
import { makeAutoObservable, toJS } from "mobx";



class storeMenuHeader {
    menuHeader: Array<string> = ["Каталог", "Доставка", "Оплата", "Поддержка"]
    constructor() {
        makeAutoObservable(this);
    }
}

export default new storeMenuHeader();