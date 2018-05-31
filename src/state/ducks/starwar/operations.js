import {requesting, data, error} from './actions'
import axios from "axios";

import { StarWar } from 'configs/constants' 

export function fetchResults () {
    return dispatch => {
        dispatch(requesting())
        axios.get(StarWar.PLANET)
            .then((response) => {
                dispatch(data((response.data.results)));
            })
            .catch((e) => {
                dispatch(error())
            });
    }
}