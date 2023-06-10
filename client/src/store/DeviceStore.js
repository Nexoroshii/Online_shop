import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {
                id: 1,
                name: 'Холодильники',
            },
            {
                id: 2,
                name: 'Смартфоны',
            },
            {
                id: 3,
                name: 'Ноутбуки',
            },
            {
                id: 4,
                name: 'Телевизоры',
            },
            {
                id: 5,
                name: 'Планшеты',
            },
        ];
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' },
        ];
        this._devices = [
            {
                id: 1,
                name: 'Iphone 12 pro',
                price: 2000,
                rating: 5,
                img: 'https://cdn21vek.by/img/galleries/7881/501/preview_b/iphone12pro128gb2bmgmk3breezy_apple_63ce30f96bedc.jpeg',
            },
            {
                id: 2,
                name: 'Iphone 12 pro',
                price: 2000,
                rating: 5,
                img: 'https://cdn21vek.by/img/galleries/7881/501/preview_b/iphone12pro128gb2bmgmk3breezy_apple_63ce30f96bedc.jpeg',
            },
            {
                id: 3,
                name: 'Iphone 12 pro',
                price: 2000,
                rating: 5,
                img: 'https://cdn21vek.by/img/galleries/7881/501/preview_b/iphone12pro128gb2bmgmk3breezy_apple_63ce30f96bedc.jpeg',
            },
            {
                id: 4,
                name: 'Iphone 12 pro',
                price: 2000,
                rating: 5,
                img: 'https://cdn21vek.by/img/galleries/7881/501/preview_b/iphone12pro128gb2bmgmk3breezy_apple_63ce30f96bedc.jpeg',
            },
            {
                id: 5,
                name: 'Iphone 12 pro',
                price: 2000,
                rating: 5,
                img: 'https://cdn21vek.by/img/galleries/7881/501/preview_b/iphone12pro128gb2bmgmk3breezy_apple_63ce30f96bedc.jpeg',
            },
            {
                id: 6,
                name: 'Iphone 12 pro',
                price: 2000,
                rating: 5,
                img: 'https://cdn21vek.by/img/galleries/7881/501/preview_b/iphone12pro128gb2bmgmk3breezy_apple_63ce30f96bedc.jpeg',
            },
            {
                id: 7,
                name: 'Iphone 12 pro',
                price: 2000,
                rating: 5,
                img: 'https://cdn21vek.by/img/galleries/7881/501/preview_b/iphone12pro128gb2bmgmk3breezy_apple_63ce30f96bedc.jpeg',
            },
        ];
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    }
    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }
    setSelectedType(type) {
        return (this._selectedType = type);
    }
    setSelectedBrand(brand) {
        return (this._selectedBrand = brand);
    }
    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
}
