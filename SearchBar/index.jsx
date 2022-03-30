import React, { Component } from 'react'
import datasong from '../data/datasong';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import config from '../lib/config'
import Button from '../components/Button';

export default class Home extends Component {
    state = {
        accessToken: '',
        isAuthorize: false,
    }

    getHashParams() {
        const hashParams = {};

        const r = /([^&;=]+)=?([^&;]*)/g;
        const q = window.locationhash.substring(1);
        let e = r.exec(q);

        while (e) {
            hashParams [e[1]] = decodeURIComponent (e[2]);
            e = r.exec(q);
        }
        return hashParmas;
    };
};